import { configureStore } from "@reduxjs/toolkit";
import stickiesReducer from "../features/stickiesSlice";
import categoryReducer from "../features/categoriesSlice";
import selectedCategoriesReducer from "../features/selectedCategoriesSlice";

export const store = configureStore({
  reducer: {
    stickies: stickiesReducer,
    categories: categoryReducer,
    selectedCategories: selectedCategoriesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;