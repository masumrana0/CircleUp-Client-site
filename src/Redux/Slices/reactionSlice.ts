import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IInitialState {
  id: null;
  React: null;
}

const initialState: IInitialState = {
  id: null,
  React: null,
};

export const reactionSlice = createSlice({
  name: "reaction",
  initialState,
  reducers: {
    setReaction: (state, action) => {
      state.id = action.payload.reaction.id;
      state.React = action.payload.reaction.reaction;
    },
  },
});

export const { setReaction } = reactionSlice.actions;
export default reactionSlice.reducer;
