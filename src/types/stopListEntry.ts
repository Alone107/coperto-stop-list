export type StopListEntry = {
  itemId: number;
  reason: "out_of_stock" | "bad_quality" | "no_cook" | "other";
  comment: string;
  returnAt: string;
  createdAt: string;
  imageUrl: string;
};
