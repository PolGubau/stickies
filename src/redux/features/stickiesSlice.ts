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
    updateSticky: (state, action) => {
      const updatedSticky = action.payload;
      if (updatedSticky.category.length === 0) {
        delete updatedSticky.category;
      }
      if (updatedSticky.description.length === 0) {
        delete updatedSticky.description;
      }
      state.stickies = state.stickies.map((sticky) => {
        if (sticky.id === updatedSticky.id) {
          return updatedSticky;
        }
        return sticky;
      });
      localStorage.setItem(
        LOCAL_STORAGE_KEY.stickies,
        JSON.stringify(state.stickies)
      );
    },
  },
});
export const actualStickies = (state: any) => state.stickies;

export const {
  addSticky: addStickysActioncreator,
  loadStickies: loadStickysActioncreator,
  removeSticky: removeStickysActioncreator,
  updateSticky: updateStickiesActioncreator,
} = stickiesSlice.actions;

export default stickiesSlice.reducer;
