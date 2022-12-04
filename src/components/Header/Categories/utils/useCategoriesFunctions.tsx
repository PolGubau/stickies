import { MAX_CATEGORIES } from "src/constants/values";
import { ICategory } from "src/Interfaces";
import { useAppDispatch, useAppSelector } from "src/redux/app/hooks";
import {
  actualCategories,
  addCategoryActionCreator,
  deleteCategoryActionCreator,
} from "src/redux/features/categoriesSlice";
import { addSelectedCategoryActionCreator } from "src/redux/features/selectedCategoriesSlice";
import { defaultStickyColor } from "src/styles/theme";

const useCategoriesFunctions = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector(actualCategories) || [];

  return {
    selectThisCategory: (category: ICategory) => {
      dispatch(addSelectedCategoryActionCreator(category));
    },
    createCategory: (category: any) => {
      if (categories.length < MAX_CATEGORIES) {
        const newId = `category-  ${Math.floor(
          Math.random() * 1000000
        ).toString(36)}`;
        const newCategory = {
          id: newId,
          name: category.name,
          color: category.color,
        };
        newCategory.name && dispatch(addCategoryActionCreator(newCategory));
      }
    },
    categoryOfThisSticky: (stickyCategory: string) => {
      const category = categories.find(
        (category: ICategory) => category.name === stickyCategory
      );
      return category || { color: defaultStickyColor };
    },
    validateNewName: (newName: string): boolean => {
      const isNameAlreadyUsed = categories?.some(
        (category: any) => category.name.toLowerCase() === newName.toLowerCase()
      );
      return isNameAlreadyUsed;
    },
    updateCategory: (oldCategory: ICategory, event: any) => {
      console.log("updateCategory", oldCategory, event);

      // const newCategory = {
      //   ...oldCategory,
      //   name: event.target.value,
      // };

      // dispatch(addCategoryActionCreator(newCategory));
    },
    deleteCategory: (categoryId: string | number) => {
      dispatch(deleteCategoryActionCreator(categoryId));
    },
  };
};

export default useCategoriesFunctions;
