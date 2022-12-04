import { configureStore } from "@reduxjs/toolkit";
import stickiesReducer from "../features/stickiesSlice";
import categoryReducer from "../features/categoriesSlice";
import selectedCategoriesReducer from "../features/selectedCategoriesSlice";
import popupReducer from "../features/popupSlice";

export const store = configureStore({
  reducer: {
    stickies: stickiesReducer,
    categories: categoryReducer,
    selectedCategories: selectedCategoriesReducer,
    popup: popupReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
