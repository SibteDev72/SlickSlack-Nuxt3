import Stripe from "stripe";
import type { CartItems } from "~/types/Cart";
import { defineEventHandler, readBody } from "h3";

const config = useRuntimeConfig();
const stripe = new Stripe(config.stripeSecretKey, { apiVersion: "2024-06-20" });

export default defineEventHandler(async (event) => {
  const { items, customerInfo } = await readBody(event);

  const lineItems = items.map((item: CartItems) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.title,
      },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    customer_email: customerInfo.email,
    mode: "payment",
    success_url: `https://slick-slice-v1-rho.vercel.app/success`,
    cancel_url: `https://slick-slice-v1-rho.vercel.app/Menu`,
    metadata: {
      items: JSON.stringify(items),
      customerInfo: JSON.stringify(customerInfo),
    },
  });

  return { id: session.id };
});
