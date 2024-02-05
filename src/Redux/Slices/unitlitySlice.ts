import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IinitialState {
  post: string;
}

const initialState: IinitialState = {
  post: "",
};

export const utilitySlice = createSlice({
  name: "utilitySlice",
  initialState,
  reducers: {
    setPostId: (state, action: PayloadAction<string>) => {
      state.post = action.payload;
    },
  },
});

export const { setPostId } = utilitySlice.actions;
export default utilitySlice.reducer;
