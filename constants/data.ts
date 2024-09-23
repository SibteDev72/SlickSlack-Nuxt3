import type { navLinkInterface } from "~/types/NavLink";
import type { foodItemInterface, categoryInterface } from "~/types/Menu";
import type { howItWorksCardInterface } from "~/types/HowItWorks";
import type { reviewsInterface } from "~/types/Reviews";
export const navLinks: navLinkInterface[] = [
  {
    id: 1,
    ref: "home",
    title: "home",
    hash: "#home",
  },
  {
    id: 2,
    ref: "popular",
    title: "popular",
    hash: "#popular",
  },
  {
    id: 3,
    ref: "howItWorks",
    title: "how it works",
    hash: "#howItWorks",
  },
  {
    id: 4,
    ref: "about",
    title: "about",
    hash: "#about",
  },
  {
    id: 5,
    ref: "contact",
    title: "contact",
    hash: "#contact",
  },
];
export const howItWorksCards: howItWorksCardInterface[] = [
  {
    id: 1,
    imgSrc: "orderFood.png",
    title: "Easy To Order",
    text: "You only order through the app",
  },
  {
    id: 2,
    imgSrc: "rider.png",
    title: "Fastest Delivery",
    text: "Delivery will be on time",
  },
  {
    id: 3,
    imgSrc: "delivered.png",
    title: "Best Quality",
    text: "The Best Quality of food for you",
  },
];
export const menuCards: foodItemInterface[] = [
  {
    id: 1,
    imgSrc: "creamePizza.png",
    title: "Creame Tikka",
    ingredients: ["Onion", "Mozzallera"],
    category: "pizza",
    price: 20,
  },
  {
    id: 2,
    imgSrc: "pennaPasta.png",
    title: "Penna Pasta",
    ingredients: ["Chicken", "Tomatoes Sauce", "Morrocan Sauce"],
    category: "pasta",
    price: 18,
  },
  {
    id: 3,
    imgSrc: "supremePizza.png",
    title: "Chicken Supreme",
    ingredients: ["Chicken", "Capsicum", "Onion", "Mozzallera"],
    category: "pizza",
    price: 24,
  },
  {
    id: 4,
    imgSrc: "alfredoPasta.png",
    title: "Alfredo Pasta",
    ingredients: ["Alfredo Sauce", "Molten Cheese", "Pepper"],
    category: "pasta",
    price: 18,
  },
];
export const categories: categoryInterface[] = [
  {
    id: 1,
    title: "pizza",
    icon: "pizza.png",
  },
  {
    id: 2,
    title: "pasta",
    icon: "pasta.png",
  },
  {
    id: 3,
    title: "steak",
    icon: "steak.png",
  },
  {
    id: 4,
    title: "wrap",
    icon: "wrap.png",
  },
];
export const foodItems: foodItemInterface[] = [
  {
    id: 1,
    imgSrc: "fajitaPizza.png",
    title: "Chicken Fajita",
    ingredients: ["Chicken", "Onion", "Capsicum", "Jalapeno"],
    category: "pizza",
    price: 25,
  },
  {
    id: 2,
    imgSrc: "creamePizza.png",
    title: "Creame Tikka",
    ingredients: ["Onion", "Mozzallera"],
    category: "pizza",
    price: 20,
  },
  {
    id: 3,
    imgSrc: "supremePizza.png",
    title: "Chicken Supreme",
    ingredients: ["Chicken", "Capsicum", "Onion", "Mozzallera"],
    category: "pizza",
    price: 24,
  },
  {
    id: 4,
    imgSrc: "vegiePizza.png",
    title: "ALL Veggie",
    ingredients: ["Onion", "Capsicum", "Jalapeno", "Mushrooms"],
    category: "pizza",
    price: 18,
  },
  {
    id: 5,
    imgSrc: "alfredoPasta.png",
    title: "Alfredo Pasta",
    ingredients: ["Alfredo Sauce", "Molten Cheese", "Pepper"],
    category: "pasta",
    price: 18,
  },
  {
    id: 6,
    imgSrc: "mexicanPasta.png",
    title: "Mexican Pasta",
    ingredients: ["Red Chillie", "Mexican Sauce", "Spegatti"],
    category: "pasta",
    price: 18,
  },
  {
    id: 7,
    imgSrc: "pennaPasta.png",
    title: "Penna Pasta",
    ingredients: ["Chicken", "Tomatoes Sauce", "Morrocan Sauce"],
    category: "pasta",
    price: 18,
  },
];
export const reviews: reviewsInterface[] = [
  {
    id: 1,
    avatar: "avatar1.png",
    name: "Alex",
    rating: "starsRating.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium asperiores ipsum quae ab tempora hic assumenda, Quas quaerat, odit.",
  },
  {
    id: 2,
    avatar: "avatar2.png",
    name: "Angela",
    rating: "starsRating.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium asperiores ipsum quae ab tempora hic assumenda, Quas quaerat, odit.",
  },
  {
    id: 3,
    avatar: "avatar3.png",
    name: "Robin",
    rating: "starsRating.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium asperiores ipsum quae ab tempora hic assumenda, Quas quaerat, odit.",
  },
  {
    id: 4,
    avatar: "avatar4.png",
    name: "Debbie",
    rating: "starsRating.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium asperiores ipsum quae ab tempora hic assumenda, Quas quaerat, odit.",
  },
  {
    id: 5,
    avatar: "avatar5.png",
    name: "Robert",
    rating: "starsRating.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium asperiores ipsum quae ab tempora hic assumenda, Quas quaerat, odit.",
  },
  {
    id: 6,
    avatar: "avatar6.png",
    name: "Melissa",
    rating: "starsRating.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium asperiores ipsum quae ab tempora hic assumenda, Quas quaerat, odit.",
  },
];
