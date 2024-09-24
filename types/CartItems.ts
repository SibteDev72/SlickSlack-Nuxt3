import type { categoryInterface } from "./Menu";
export type CartItems = {
  id: number;
  imgSrc: String;
  title: String;
  ingredients: String[];
  category: categoryInterface;
  price: number;
  quantity: number;
  totalAmount: number;
};
