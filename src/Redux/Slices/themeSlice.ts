import { themeKey } from "@/constants/storageKey";
import {
  getFromLocalStorage,
  setThemeStatusLocalStorage,
} from "@/utils/local-storage";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { useEffect } from "react";
// import { useAppDispatch } from "../hooks";

export interface IisDarkMode {
  theme: string;
}

const initializeThemeStatus = () => {
  const themeStatus = getFromLocalStorage(themeKey) || "light";
  return {
    theme: themeStatus,
  };
};

const initialState: IisDarkMode = initializeThemeStatus();

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleThemeMode: (state, action: PayloadAction<string>) => {
      setThemeStatusLocalStorage(themeKey, action.payload);
      state.theme = action.payload;
    },
  },
});

export const { toggleThemeMode } = themeSlice.actions;

export default themeSlice.reducer;
