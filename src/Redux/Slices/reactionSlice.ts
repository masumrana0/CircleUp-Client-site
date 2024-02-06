import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IInitialState {
  reaction: string;
}

const initialState: IInitialState = {
  reaction: "",
};

export const reactionSlice = createSlice({
  name: "reaction",
  initialState,
  reducers: {
    setReaction: (state, action) => {
      state.reaction = action.payload;
    },
  },
});

export const { setReaction } = reactionSlice.actions;
export default reactionSlice.reducer;
