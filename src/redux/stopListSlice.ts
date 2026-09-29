import type { StopListEntry } from "../types/stopListEntry";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type StopListState = {
  entries: StopListEntry[];
  selectedItemId: number | null;
};

const initialState: StopListState = {
  entries: [],
  selectedItemId: null,
};

const stopListSlice = createSlice({
  name: "stopList",
  initialState,
  reducers: {
    addToStopList(state, action: PayloadAction<StopListEntry>) {
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
