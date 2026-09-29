import type { StopListEntry } from "../types/stopListEntry";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type StopListState = {
  entries: StopListEntry[];
  selectedItemId: number | null;
};

const savedStopList = localStorage.getItem("stopList");

const initialState: StopListState = {
  entries: savedStopList ? JSON.parse(savedStopList) : [],
  selectedItemId: null,
};

const stopListSlice = createSlice({
  name: "stopList",
  initialState,
  reducers: {
    addToStopList(state, action: PayloadAction<StopListEntry>) {
      const alreadyExists = state.entries.some(
        (entry) => entry.itemId === action.payload.itemId,
      );

      if (alreadyExists) {
        return;
      }

      state.entries.push(action.payload);
    },
    selectItem(state, action: PayloadAction<number | null>) {
      state.selectedItemId = action.payload;
    },
    removeFromStopList(state, action: PayloadAction<number>) {
      state.entries = state.entries.filter(
        (entry) => entry.itemId !== action.payload,
      );
    },
  },
});

export const { addToStopList, selectItem, removeFromStopList } =
  stopListSlice.actions;

export default stopListSlice.reducer;
