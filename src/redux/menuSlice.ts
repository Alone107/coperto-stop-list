import { createSlice } from "@reduxjs/toolkit";
import type { MenuItem } from "../types/menu";
import menuData from "../data/menu.json";

type MenuState = {
  items: MenuItem[];
};

const initialState: MenuState = {
  items: menuData as MenuItem[],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
});

export default menuSlice.reducer;
