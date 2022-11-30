import { FormEvent, useRef } from "react";
import { useAppSelector } from "src/redux/app/hooks";
import { actualCategories } from "src/redux/features/categoriesSlice";
import {
  CategoriesContainerStyled,
  CategoryName,
  OptionColor,
} from "./CategoriesStyled";
import useCategoriesFunctions from "./utils/useCategoriesFunctions";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { availableColors } from "src/styles/theme";
//

const Categories = () => {
  const f = useCategoriesFunctions();
  const { categories } = useAppSelector(actualCategories) || [];
  const categoryRef = useRef<HTMLInputElement>(null);
  const colorRef = useRef<HTMLSelectElement>(null);

  const handleNewCategory = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCategory = {
      name: categoryRef.current?.value,
      color: colorRef.current?.value,
    };
    f.createCategory(newCategory);
  };

  return (
    <CategoriesContainerStyled>
      <form className="formCategories" onSubmit={(e) => handleNewCategory(e)}>
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
      </form>
      {categories.map((category: any) => (
        <CategoryName
          onClick={() => f.selectThisCategory(category)}
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
