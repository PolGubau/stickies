import ActionButton from "src/components/Buttons/ActionButton/ActionButton";
import { useAppSelector, useAppDispatch } from "src/redux/app/hooks";
import { actualCategories } from "src/redux/features/categoriesSlice";
import { openPopupActionCreator } from "src/redux/features/popupSlice";
import { defaultCategoryColor } from "src/styles/theme";
import { CategoriesContainerStyled, CategoryName } from "./CategoriesStyled";
import useCategoriesFunctions from "./utils/useCategoriesFunctions";
//

const Categories = () => {
  const dispatch = useAppDispatch();
  const f = useCategoriesFunctions();
  const { categories } = useAppSelector(actualCategories) || [];

  return (
    <CategoriesContainerStyled>
      {categories.map((category: any) => {
        const colorObject = f.getColorByItsLight(category.color);
        return (
          <CategoryName
            onClick={() => f.selectThisCategory(category)}
            color={
              colorObject ? colorObject[1].light : defaultCategoryColor.light
            }
            key={category.id}
          >
            {category.name}
          </CategoryName>
        );
      })}
      <div onClick={() => dispatch(openPopupActionCreator("newCategory"))}>
        <ActionButton iconName="newCategory" />
      </div>
    </CategoriesContainerStyled>
  );
};

export default Categories;
