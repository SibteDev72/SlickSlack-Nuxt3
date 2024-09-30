import type { CartItems } from "../types/Cart";

export const useCart = () => {
  const items = useState<CartItems[]>("items", () => []);
  const cartTotal = useState<number>("cartTotal", () => 0);

  const addItem = (item: CartItems) => {
    const existingItem = items.value.find(
      (itm) => itm.food_id === item.food_id
    );
    if (!existingItem) {
      items.value.push(item);
      calculateTotal();
    }
  };

  const updateQuantityItem = (id: Number, type: string) => {
    const item = items.value.find((item) => item.id === id);
    if (item) {
      type === "add" ? (item.quantity += 1) : (item.quantity -= 1);
      item.totalAmount = item.price * item.quantity;
      calculateTotal();
    }
  };

  const removeItem = (id: number) => {
    items.value = items.value.filter((item) => item.id !== id);
    calculateTotal();
  };

  const clearCart = () => {
    items.value = [];
    cartTotal.value = 0;
  };

  const calculateTotal = () => {
    cartTotal.value = items.value.reduce(
      (total, obj) => total + (obj["totalAmount"] || 0),
      0
    );
  };

  return {
    items,
    addItem,
    updateQuantityItem,
    removeItem,
    clearCart,
    cartTotal,
  };
};
