import { createSlice } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_KEY } from "src/constants";
import { ICategory } from "src/Interfaces";

const initialState = {
  selectedCategories: window
    ? JSON.parse(
        window.localStorage.getItem(LOCAL_STORAGE_KEY.selectedCategories) ||
          "[]"
      )
    : [],
};

// create a slice for terminals
export const categoriesSlice = createSlice({
  name: "selectedCategories",
  initialState,
  reducers: {
    // state = whole new category
    addSelectedCategory: (state, action) => {
      //we just want to add this category if its not already in the list
      if (
        !state.selectedCategories.find(
          (category: ICategory) => category.id === action.payload.id
        )
      ) {
        state.selectedCategories.push(action.payload);
        localStorage.setItem(
          LOCAL_STORAGE_KEY.selectedCategories,
          JSON.stringify(state.selectedCategories)
        );
      }
    },
    //send the id of the category to remove
    removeSelectedCategory: (state, action) => {
      state.selectedCategories = state.selectedCategories.filter(
        (selectedCategory: ICategory) => selectedCategory.id !== action.payload
      );
      localStorage.setItem(
        LOCAL_STORAGE_KEY.selectedCategories,
        JSON.stringify(state.selectedCategories)
      );
    },
  },
});
export const actualSelectedCategories = (state: any) =>
  state.selectedCategories;
export const {
  addSelectedCategory: addSelectedCategoryActionCreator,
  removeSelectedCategory: removeSelectedCategoryActionCreator,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
