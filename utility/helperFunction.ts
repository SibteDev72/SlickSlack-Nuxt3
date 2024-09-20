import type { navLinkInterface } from "~/types/NavLink";
import type { foodItemInterface } from "~/types/Menu";
import type { CartItems } from "~/types/CartItems";
import { foodItems } from "~/constants/data";
import { useCart } from "~/composables/Cart";

export const useActiveLink = (
  links: navLinkInterface[],
  scrollPosition: number
): String => {
  const activeLink = ref<String>("");
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
  const avgCharWidth = avgCharacterWidth; // Approximate average character width in pixels (you can adjust this value)
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

export const useFilteredItems = (category: String): foodItemInterface[] => {
  return foodItems.filter((items) => items.category === category);
};

export const cartMapper = (item: foodItemInterface) => {
  const { addItem } = useCart();
  const category = useSelectedCategory();
  let obj: CartItems = {
    id: item.id,
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
