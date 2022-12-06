import { MAX_CATEGORIES } from "src/constants/values";
import { ICategory } from "src/Interfaces";
import { useAppDispatch, useAppSelector } from "src/redux/app/hooks";
import {
  actualCategories,
  addCategoryActionCreator,
  deleteCategoryActionCreator,
  updateCategoryActionCreator,
} from "src/redux/features/categoriesSlice";
import { addSelectedCategoryActionCreator } from "src/redux/features/selectedCategoriesSlice";
import { availableColors, defaultStickyColor } from "src/styles/theme";

const useCategoriesFunctions = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector(actualCategories) || [];

  return {
    selectThisCategory: (category: ICategory) => {
      dispatch(addSelectedCategoryActionCreator(category));
    },
    createCategory: (category: any) => {
      if (categories.length < MAX_CATEGORIES) {
        const id = `category-${Math.floor(Math.random() * 1000000).toString(
          36
        )}`;
        const newCategory = {
          id,
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
    updateCategory: (oldCategory: ICategory, field: string, value: string) => {
      const newCategory = {
        ...oldCategory,
        [field]: value,
      };
      dispatch(updateCategoryActionCreator(newCategory));
    },

    deleteCategory: (categoryId: string | number) => {
      dispatch(deleteCategoryActionCreator(categoryId));
    },
    getColorByItsLight: (color: string) => {
      const colorObject = availableColors.find(
        (availableColor) => availableColor[1].light === color
      );
      return colorObject;
    },
  };
};

export default useCategoriesFunctions;
