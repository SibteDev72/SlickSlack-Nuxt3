import type { foodItemInterface } from "~/types/Menu";
export const useSelectedCategory = () =>
  useState<string>("category", () => "pizza");
export const useSelectedID = () => useState<number>("selectedID", () => 0);
export const useSelectedItem = () =>
  useState<foodItemInterface>("selectedItem", () => ({
    id: 0,
    imgSrc: "",
    title: "",
    ingredients: [],
    category: "",
    price: 0,
    quantity: 0,
  }));
