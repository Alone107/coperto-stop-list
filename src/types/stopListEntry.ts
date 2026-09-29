export type StopListEntry = {
  id: number;
  cause: "out_of_stock" | "bad_quality" | "no_cook" | "other";
  commentary: string;
  timeReturn: string;
  timeCreate: string;
};
