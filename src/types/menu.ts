export type MenuItem = {
  id: number;
  name: string;
  category: "kitchen" | "bar" | "dessert";
  price: number;
  remainder: number;
  imageUrl: string;
};
