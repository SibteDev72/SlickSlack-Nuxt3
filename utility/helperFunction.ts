import type { navLinkInterface } from "~/types/NavLink";
import type { MenuItemInterface } from "~/types/Menu";
import type { CartItems } from "~/types/Cart";
import type { OrderItemInterface } from "~/types/Order";
import type { formData } from "~/types/Form";
import { menuItems } from "~/constants/data";
import { useCart } from "~/composables/Cart";
import { useFirestore } from "~/composables/Firestore";
import type { Firestore } from "firebase/firestore";

export const useActiveLink = (
  links: navLinkInterface[],
  scrollPosition: number
): string => {
  const activeLink = ref<string>("");
  links.map((data, index, array) => {
    const indexData = array[index];
    const previousData = index > 0 ? array[index - 1] : null;
    if (previousData) {
      //@ts-ignore
      const previousPageRef: HTMLElement = document.getElementById(
        `${previousData.ref}`
      );
      //@ts-ignore
      const currentPageRef: HTMLElement = document.getElementById(
        `${data.ref}`
      );
      if (
        scrollPosition >
          previousPageRef?.offsetHeight + previousPageRef?.offsetTop &&
        scrollPosition < currentPageRef.offsetHeight + currentPageRef.offsetTop
      ) {
        activeLink.value = data.title;
      }
    } else if (indexData.ref) {
      activeLink.value = indexData.ref;
    }
  });

  return activeLink.value;
};

export const useTextSlpitter = (
  containerRef: HTMLElement,
  textData: string,
  avgCharacterWidth: number
): string[] => {
  const containerWidth = containerRef.clientWidth;
  const avgCharWidth = avgCharacterWidth;
  const charsPerLine = Math.floor(containerWidth / avgCharWidth);

  const lines: string[] = [];
  let currentLine = "";

  textData.split(" ").forEach((word) => {
    if ((currentLine + word).length <= charsPerLine) {
      currentLine += word + " ";
    } else {
      lines.push(currentLine.trim());
      currentLine = word + " ";
    }
  });
  if (currentLine) lines.push(currentLine.trim());

  return lines;
};

export const getFilteredItems = (category: string): MenuItemInterface[] => {
  return menuItems.filter((items) => items.category === category);
};

export const cartMapper = (item: MenuItemInterface) => {
  const { addItem } = useCart();
  const category = useSelectedCategory();
  let obj: CartItems = {
    id: Math.floor(Math.random() * 1000) + 1000,
    food_id: item.id,
    imgSrc: item.imgSrc,
    title: item.title,
    ingredients: item.ingredients,
    category: category.value,
    price: item.price,
    quantity: 1,
    totalAmount: item.price,
  };
  addItem(obj);
};

export const orderMapper = (
  items: CartItems[],
  customerInfo: formData,
  firestore: Firestore
) => {
  const cartTotal = items.reduce(
    (total, obj) => total + (obj["totalAmount"] || 0),
    0
  );
  const { addOrder } = useFirestore();
  let obj: OrderItemInterface = {
    id: Math.floor(Math.random() * 1000) + 1000,
    from_public_site: true,
    firstName: customerInfo.firstName,
    lastName: customerInfo.lastName,
    address: customerInfo.address,
    email: customerInfo.email,
    cartItem: items.map((item) => ({
      category_id: item.category.id,
      food_id: item.food_id,
      price: item.price,
      quantity: item.quantity,
      title: item.title,
      totalAmount: item.totalAmount,
    })),
    orderTotal: cartTotal,
    createdAt: new Date(),
  };
  addOrder(obj, firestore);
};
