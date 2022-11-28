import { createSlice } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_KEY } from "src/constants";
import { IStickies } from "src/Interfaces";

const initialState: IStickies = {
  stickies: window
    ? JSON.parse(
        window.localStorage.getItem(LOCAL_STORAGE_KEY.stickies) || "[]"
      )
    : [],
};

// create a slice for terminals
export const stickiesSlice = createSlice({
  name: "stickies",
  initialState,
  reducers: {
    loadStickies: (state, action) => {
      state.stickies = action.payload;
    },

    addSticky: (state, action) => {
      const newSticky = action.payload;
      if (newSticky.category.length === 0) {
        delete newSticky.category;
      }
      if (newSticky.description.length === 0) {
        delete newSticky.description;
      }
      state.stickies.push(newSticky);
      localStorage.setItem(
        LOCAL_STORAGE_KEY.stickies,
        JSON.stringify(state.stickies)
      );
    },
    removeSticky: (state, action) => {
      state.stickies = state.stickies.filter(
        (sticky) => sticky.id !== action.payload
      );
      localStorage.setItem(
        LOCAL_STORAGE_KEY.stickies,
        JSON.stringify(state.stickies)
      );
    },
    getStickiesByCategory: (state, action) => {
      state.stickies = state.stickies.filter(
        (sticky) => sticky.category === action.payload
      );
    },
  },
});
export const actualStickies = (state: any) => state.stickies;
export const stickiesWithThisCategory = (state: any, category: string) =>
  state.stickies.filter((sticky: any) => sticky.category === category);
export const {
  addSticky: addStickysActioncreator,
  loadStickies: loadStickysActioncreator,
  removeSticky: removeStickysActioncreator,
  getStickiesByCategory: getStickiesByCategorysActioncreator,
} = stickiesSlice.actions;

export default stickiesSlice.reducer;
