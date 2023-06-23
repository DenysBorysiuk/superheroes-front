import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { fetchHeroes, addHero, deleteHero, updateHero } from "./operations";

const extraActions = [fetchHeroes, addHero, deleteHero, updateHero];
const getActions = (type) => extraActions.map((action) => action[type]);

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const heroesSlice = createSlice({
  name: "heroes",
  initialState,
  extraReducers: (builder) => {
    return builder
      .addCase(fetchHeroes.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addHero.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteHero.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (contact) => contact._id === action.payload._id
        );
        state.items.splice(index, 1);
      })
      .addCase(updateHero.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (contact) => contact._id === action.payload._id
        );
        state.items[index] = action.payload;
      })
      .addMatcher(isAnyOf(...getActions("pending")), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(...getActions("rejected")), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error(`Something went wrong`);
      })
      .addMatcher(isAnyOf(...getActions("fulfilled")), (state) => {
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const heroesReducer = heroesSlice.reducer;
