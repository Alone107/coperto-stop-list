import type { StopListEntry } from "../types/stopListEntry";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type StopListState = {
  entries: StopListEntry[];
};

const initialState: StopListState = {
  entries: [],
};

const stopListSlice = createSlice({
  name: "stopList",
  initialState,
  reducers: {
    addToStopList(state, action: PayloadAction<StopListEntry>) {
      state.entries.push(action.payload);
    },
  },
});

export const { addToStopList } = stopListSlice.actions;

export default stopListSlice.reducer;
