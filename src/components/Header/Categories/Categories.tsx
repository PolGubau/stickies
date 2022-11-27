import { FormEvent, useRef } from "react";
import { ICategory } from "src/Interfaces";
import { useAppSelector, useAppDispatch } from "src/redux/app/hooks";
import {
  actualCategories,
  addCategoryActionCreator,
} from "src/redux/features/categoriesSlice";
import { addSelectedCategoryActionCreator } from "src/redux/features/selectedCategoriesSlice";
import styled from "styled-components";
import "./CategoriesStyles.css";
//
interface ICategoryName {
  color: string;
}
const CategoryName = styled.p<ICategoryName>`
  background-color: ${(props) => props.color};
  margin: 0;
  padding: 5px;
  border-radius: 15px;
`;

//
const Categories = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector(actualCategories) || [];
  const categoryRef = useRef<HTMLInputElement>(null);
  const colorRef = useRef<HTMLInputElement>(null);
  //max categories = 10
  const maxCategories = 10;

  const handleNewCategory = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (categories.length < maxCategories) {
      const newCategory = {
        name: categoryRef.current?.value,
        color: colorRef.current?.value,
      };
      dispatch(addCategoryActionCreator(newCategory));
    }
  };

  const selectThisCategory = (category: ICategory) => {
    dispatch(addSelectedCategoryActionCreator(category));
  };

  const NewCategoryForm = styled.form`
    display: flex;
    flex-direction: row;
    gap: 0px;
    align-items: stretch;
    justify-content: flex-start;
    align-content: center;
  `;
  return (
    <section className="categoriesContainer">
      <NewCategoryForm onSubmit={(e) => handleNewCategory(e)}>
        <input type="text" placeholder="Crea una categoría" ref={categoryRef} />
        <input type="color" name="color" id="color" ref={colorRef} />
        <button type="submit">Crear categoría</button>
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
    </section>
  );
};

export default Categories;
