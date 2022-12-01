import { MAX_CATEGORIES } from "src/constants/values";
import { ICategory } from "src/Interfaces";
import { useAppDispatch, useAppSelector } from "src/redux/app/hooks";
import {
  actualCategories,
  addCategoryActionCreator,
} from "src/redux/features/categoriesSlice";
import { addSelectedCategoryActionCreator } from "src/redux/features/selectedCategoriesSlice";

const useCategoriesFunctions = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector(actualCategories) || [];

  return {
    selectThisCategory: (category: ICategory) => {
      dispatch(addSelectedCategoryActionCreator(category));
    },
    createCategory: (category: any) => {
      if (categories.length < MAX_CATEGORIES) {
        const newId =
          "category-" + Math.floor(Math.random() * 1000000).toString(36);
        const newCategory = {
          id: newId,
          name: category.name,
          color: category.color,
        };
        newCategory.name && dispatch(addCategoryActionCreator(newCategory));
      }
    },
    categoryOfThisSticky: (stickyCategory: string) => {
      return categories.find(
        (category: ICategory) => category.name === stickyCategory
      );
    },
  };
};

export default useCategoriesFunctions;
