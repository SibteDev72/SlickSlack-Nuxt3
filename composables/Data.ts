import type { MenuItemInterface, categoryInterface } from "~/types/Menu";
export const useSelectedCategory = () =>
  useState<categoryInterface>("category", () => ({
    id: 1,
    title: "pizza",
    icon: "pizza.png",
  }));
export const useSelectedID = () => useState<number>("selectedID", () => 0);
export const useSelectedItem = () =>
  useState<MenuItemInterface>("selectedItem", () => ({
    id: 0,
    imgSrc: "",
    title: "",
    ingredients: [],
    category: "",
    price: 0,
    quantity: 0,
  }));
