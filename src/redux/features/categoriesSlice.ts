import { createSlice } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_KEY } from "src/constants";
import { ICategories } from "src/Interfaces";

const initialState: ICategories = {
  categories: window
    ? JSON.parse(
        window.localStorage.getItem(LOCAL_STORAGE_KEY.categories) || "[]"
      )
    : [],
};

// create a slice for terminals
export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      const { name, color } = action.payload;
      const newCategory = {
        id: Math.random(),
        name,
        color,
        createdAt: new Date().toISOString(),
      };
      state.categories.push(newCategory);
      localStorage.setItem(
        LOCAL_STORAGE_KEY.categories,
        JSON.stringify(state.categories)
      );
    },
    removeCategory: (state, action) => {
      state.categories = state.categories.filter(
        (category) => category.id !== action.payload
      );
    },
  },
});
export const actualCategories = (state: any) => state.categories;
export const {
  addCategory: addCategoryActionCreator,
  removeCategory: removeCategoryActionCreator,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
