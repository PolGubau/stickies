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
      const { id, name, color } = action.payload;
      const newCategory = {
        id,
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
    updateCategory: (state, action) => {
      const { id, name, color } = action.payload;
      const category = state.categories.find((category) => category.id === id);
      if (category) {
        category.name = name;
        category.color = color;
      }
    },
    deleteCategory: (state, action) => {
      console.log("deleteCategory", action.payload);

      state.categories = state.categories.filter(
        (category) => category.id !== action.payload
      );
    },
  },
});
export const actualCategories = (state: { categories: ICategories }) =>
  state.categories;
export const conreteCategory = (state: any, name: string) => {
  return state.categories.find((category: any) => category.name === name);
};
export const {
  addCategory: addCategoryActionCreator,
  updateCategory: updateCategoryActionCreator,
  removeCategory: removeCategoryActionCreator,
  deleteCategory: deleteCategoryActionCreator,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
