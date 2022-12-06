import { FormEvent, useRef, useState } from "react";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { OptionColor } from "./NewCategoryStyled";
import useCategoriesFunctions from "src/components/Header/Categories/utils/useCategoriesFunctions";
import Wrapper from "src/components/Wrapper/Wrapper";
import { availableColors } from "src/styles/theme";
import { NewCategoryStyled } from "./NewCategoryStyled";
import { actualCategories } from "src/redux/features/categoriesSlice";
import { useAppSelector } from "src/redux/app/hooks";
import { ICategory } from "src/Interfaces";

const NewCategory = () => {
  const { categories } = useAppSelector(actualCategories) || [];

  const f = useCategoriesFunctions();
  const categoryRef = useRef<HTMLInputElement>(null);
  const [colorSelected, setColorSelected] = useState(availableColors[0][0]);
  const [isNameAlreadyUsed, setIsNameAlreadyUsed] = useState(false);
  const handleNewCategory = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCategory = {
      name: categoryRef.current?.value,
      color: colorSelected,
    };
    f.createCategory(newCategory);
  };
  const validateNewName = () => {
    const newName = categoryRef.current?.value;
    const validated = newName
      ? setIsNameAlreadyUsed(f.validateNewName(newName))
      : false;
    return validated;
  };
  const validateName = (name: string) => {
    const validated = name
      ? setIsNameAlreadyUsed(f.validateNewName(name))
      : false;
    return validated;
  };
  const handleUpdateName = (
    category: ICategory,
    e: FormEvent<HTMLInputElement>
  ) => {
    const name = e.currentTarget.value;
    validateName(name);
    f.updateCategory(category, "name", name);
  };

  return (
    <>
      <Wrapper component={"newCategory"} />
      <NewCategoryStyled>
        <article className="articleCreate">
          <h2>Crea una Categoría</h2>
          <form className="formCreate" onSubmit={(e) => handleNewCategory(e)}>
            <div className="formInputs">
              <input
                onChange={validateNewName}
                type="text"
                placeholder="Crea una categoría"
                ref={categoryRef}
              />
              {isNameAlreadyUsed && (
                <p className="error">El nombre ya está en uso</p>
              )}
              <div className="categoryColor">
                {availableColors.map((color) => (
                  <OptionColor
                    key={color[0]}
                    color={color[1]}
                    selected={color[0] === colorSelected}
                    onClick={() => setColorSelected(color[1])}
                  />
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="submit"
              disabled={isNameAlreadyUsed}
            >
              <MdOutlineCreateNewFolder />
            </button>
          </form>
        </article>
        <article className="articleEdit">
          <h2>Edita tus categorías</h2>
          <div className="categories">
            {categories.map((category) => (
              <div className="category" key={category.id}>
                <div className="categoryName">
                  <input
                    className="inputName"
                    type="text"
                    defaultValue={category.name}
                    onChange={(e) => handleUpdateName(category, e)}
                  />
                </div>
                <div className="categoryColor">
                  {availableColors.map((color) => (
                    <OptionColor
                      key={color[0]}
                      color={color[1]}
                      selected={color[1] === category.color}
                      onClick={(e) =>
                        f.updateCategory(category, "color", color[1])
                      }
                    />
                  ))}
                </div>
                <button onClick={() => f.deleteCategory(category.id)}>
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        </article>
      </NewCategoryStyled>
    </>
  );
};

export default NewCategory;
