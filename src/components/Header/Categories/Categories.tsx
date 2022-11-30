import { FormEvent, useRef } from "react";
import { ICategory } from "src/Interfaces";
import { useAppSelector, useAppDispatch } from "src/redux/app/hooks";
import {
  actualCategories,
  addCategoryActionCreator,
} from "src/redux/features/categoriesSlice";
import { addSelectedCategoryActionCreator } from "src/redux/features/selectedCategoriesSlice";
import { CategoryName, NewCategoryForm } from "./CategoriesStyled";
import "./CategoriesStyles.css";
import { MdOutlineCreateNewFolder } from "react-icons/md";
//

//
const Categories = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector(actualCategories) || [];
  const categoryRef = useRef<HTMLInputElement>(null);
  const colorRef = useRef<HTMLInputElement>(null);
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

  //

  return (
    <section className="categoriesContainer">
      <NewCategoryForm onSubmit={(e) => handleNewCategory(e)}>
        <input className="nomCategoria" type="text" placeholder="Crea una categoría" ref={categoryRef} />
        <input type="color" name="color" id="color" className="chooseColor" ref={colorRef} />
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
    </section>
  );
};

export default Categories;
