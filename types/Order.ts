export type OrderItemInterface = {
  id: number;
  from_public_site: boolean;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  cartItem: {
    category_id: number;
    food_id: number;
    title: string;
    quantity: number;
    price: number;
    totalAmount: number;
  }[];
  orderTotal: number;
  createdAt: Date;
};
