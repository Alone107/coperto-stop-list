import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import stopListReducer from "./stopListSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    stopList: stopListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
