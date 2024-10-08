import type { CartItems } from "~/types/Cart";
import type { formData } from "~/types/Form";
import { loadStripe } from "@stripe/stripe-js";

export async function stripeCheckout(
  items: CartItems[],
  customerInfo: formData
) {
  const checkout_api: string =
    "https://slick-slice-v1-rho.vercel.app/api/create-checkout-session";
  // "api/create-checkout-session";
  const config = useRuntimeConfig();
  try {
    const { id } = await $fetch(checkout_api, {
      method: "POST",
      body: {
        items: items,
        customerInfo: customerInfo,
      },
    });
    const stripe = await loadStripe(config.public.stripePublicKey);
    if (stripe) {
      stripe.redirectToCheckout({ sessionId: id });
    }
  } catch (error) {
    console.error("Error during checkout:", error);
  }
}
