import ActionButton from "src/components/Buttons/ActionButton/ActionButton";
import { useAppSelector, useAppDispatch } from "src/redux/app/hooks";
import { actualCategories } from "src/redux/features/categoriesSlice";
import { openPopupActionCreator } from "src/redux/features/popupSlice";
import { CategoriesContainerStyled, CategoryName } from "./CategoriesStyled";
import useCategoriesFunctions from "./utils/useCategoriesFunctions";
//

const Categories = () => {
  const dispatch = useAppDispatch();
  const f = useCategoriesFunctions();
  const { categories } = useAppSelector(actualCategories) || [];

  return (
    <CategoriesContainerStyled>
      {categories.map((category: any) => (
        <CategoryName
          onClick={() => f.selectThisCategory(category)}
          color={category.color}
          key={category.id}
        >
          {category.name}
        </CategoryName>
      ))}
      <div onClick={() => dispatch(openPopupActionCreator("newCategory"))}>
        <ActionButton iconName="newCategory" />
      </div>
    </CategoriesContainerStyled>
  );
};

export default Categories;
