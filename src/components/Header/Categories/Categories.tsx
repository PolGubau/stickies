import { FormEvent, useRef } from "react";
import { ICategory } from "src/Interfaces";
import { useAppSelector, useAppDispatch } from "src/redux/app/hooks";
import {
  actualCategories,
  addCategoryActionCreator,
} from "src/redux/features/categoriesSlice";
import { addSelectedCategoryActionCreator } from "src/redux/features/selectedCategoriesSlice";
import {
  CategoriesContainerStyled,
  CategoryName,
  NewCategoryForm,
  OptionColor,
} from "./CategoriesStyled";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { availableColors } from "src/styles/theme";
//

const Categories = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector(actualCategories) || [];
  const categoryRef = useRef<HTMLInputElement>(null);
  const colorRef = useRef<HTMLSelectElement>(null);
  const maxCategories = 10;

  const handleNewCategory = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (categories.length < maxCategories) {
      const newCategory = {
        name: categoryRef.current?.value,
        color: colorRef.current?.value,
      };
      newCategory.name && dispatch(addCategoryActionCreator(newCategory));
    }
  };

  const selectThisCategory = (category: ICategory) => {
    dispatch(addSelectedCategoryActionCreator(category));
  };

  return (
    <CategoriesContainerStyled>
      <NewCategoryForm onSubmit={(e) => handleNewCategory(e)}>
        <input
          className="nomCategoria"
          type="text"
          placeholder="Crea una categoría"
          ref={categoryRef}
        />

        <select className="chooseColor" ref={colorRef}>
          {availableColors.map((color) => {
            return (
              <OptionColor
                color={color[1].normal}
                value={color[1].normal}
                key={color[0]}
              >
                {color[0]}
              </OptionColor>
            );
          })}
        </select>

        <button type="submit" className="submit">
          <MdOutlineCreateNewFolder size={30} />
        </button>
      </NewCategoryForm>
      {categories.map((category: any) => (
        <CategoryName
          onClick={() => selectThisCategory(category)}
          color={category.color}
          key={category.id}
        >
          {category.name}
        </CategoryName>
      ))}
    </CategoriesContainerStyled>
  );
};

export default Categories;
