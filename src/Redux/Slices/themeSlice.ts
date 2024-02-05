// import { themeKey } from "@/constants/storageKey";
// import {
//   getFromLocalStorage,
//   setThemeStatusLocalStorage,
// } from "@/utils/local-storage";
// import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// // import { useEffect } from "react";
// // import { useAppDispatch } from "../hooks";

// export interface IisDarkMode {
//   theme: string;
// }

// const initializeThemeStatus = () => {
//   const themeStatus = getFromLocalStorage(themeKey) || "system";
//   return {
//     isDarkMode: themeStatus,
//   };
// };

// const initialState: IisDarkMode = initializeThemeStatus();

// export const themeSlice = createSlice({
//   name: "theme",
//   initialState,
//   reducers: {
//     toggleThemeMode: (state, action: PayloadAction<string>) => {
//       state.theme = action.payload;
//       // setThemeStatusLocalStorage(themeKey, action.payload);
//     },
//   },
// });

// export const { toggleThemeMode } = themeSlice.actions;

// export default themeSlice.reducer;
