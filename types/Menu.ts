export type menuCardInterface = {
  id: Number;
  imgSrc: String;
  title: String;
  text: String;
  price: String;
};
export type foodItemInterface = {
  id: number;
  imgSrc: String;
  title: String;
  ingredients: String[];
  category: String;
  price: number;
};
export type categoryInterface = {
  id: Number;
  title: string;
  icon: string;
};
