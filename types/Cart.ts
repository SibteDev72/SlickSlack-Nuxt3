import type { categoryInterface } from "./Menu";
export type CartItems = {
  id: number;
  food_id: number;
  imgSrc: string;
  title: string;
  ingredients: string[];
  category: categoryInterface;
  price: number;
  quantity: number;
  totalAmount: number;
};
