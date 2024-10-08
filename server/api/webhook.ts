import Stripe from "stripe";
import { defineEventHandler, readRawBody } from "h3";
import { getServerFirestore } from "../api/utils/firebase";
import { orderMapper } from "~/utility/helperFunction";

const config = useRuntimeConfig();
const stripe = new Stripe(config.stripeSecretKey, { apiVersion: "2024-06-20" });

export default defineEventHandler(async (event) => {
  const sig = event.node.req.headers["stripe-signature"];
  const webhookSecret = "whsec_PVsGBOcZgGheNcpnVBnBgFrNuP8bj8ZY";
  const rawBody = await readRawBody(event);

  if (!rawBody) {
    console.error("Raw body is undefined");
    event.node.res.statusCode = 400;
    return { error: "Raw body is required" };
  }

  let stripeEvent;
  const firestore = getServerFirestore();

  try {
    stripeEvent = stripe.webhooks.constructEvent(rawBody, sig!, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    event.node.res.statusCode = 400;
    return { error: "Webhook signature verification failed" };
  }

  if (stripeEvent.type === "checkout.session.completed") {
    const checkout_session = stripeEvent.data.object;
    const metadata = checkout_session.metadata;
    if (metadata) {
      const items = JSON.parse(metadata.items);
      const customerInfo = JSON.parse(metadata.customerInfo);
      orderMapper(items, customerInfo, firestore);
      console.log("Order Send to DB");
    } else {
      console.warn("No metadata available in payment intent.");
    }
  }

  event.node.res.statusCode = 200;
  return { received: true };
});
