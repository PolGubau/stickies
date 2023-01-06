import { FormEvent, useRef, useState } from "react";
import { OptionColor } from "./NewCategoryStyled";
import useCategoriesFunctions from "src/components/Header/Categories/utils/useCategoriesFunctions";
import { availableColors } from "src/styles/theme";
import { NewCategoryStyled } from "./NewCategoryStyled";
import { actualCategories } from "src/redux/features/categoriesSlice";
import { useAppSelector } from "src/redux/app/hooks";
import { ICategory } from "src/Interfaces";
import ActionButton from "src/components/Buttons/ActionButton/ActionButton";
import Popup from "../Popup";
import { MAX_CATEGORIES, MAX_CATEGORY_LENGTH } from "src/constants/values";

const NewCategory = () => {
  const { categories } = useAppSelector(actualCategories) || [];

  const f = useCategoriesFunctions();
  const categoryRef = useRef<HTMLInputElement>(null);
  const [colorSelected, setColorSelected] = useState<string>(
    availableColors[0][1].light
  );
  const [isNameAlreadyUsed, setIsNameAlreadyUsed] = useState<boolean>(false);
  const [newCategoryLenght, setNewCategoryLenght] = useState<number>(0);

  const handleNewCategory = (e: any) => {
    if (categories.length >= MAX_CATEGORIES) return;
    if (isNameAlreadyUsed) return;
    e.preventDefault();
    const newCategory = {
      name: categoryRef.current?.value,
      color: colorSelected,
    };
    f.createCategory(newCategory);
    //reset inputs
    categoryRef.current!.value = "";
    setColorSelected(availableColors[0][1].light);
  };
  const validateNewName = () => {
    const newName = categoryRef.current?.value;
    const validated = newName
      ? setIsNameAlreadyUsed(f.validateNewName(newName))
      : false;
    setNewCategoryLenght(newName?.length || 0);
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
      <Popup>
        <NewCategoryStyled>
          <article className="articleCreate">
            <div className="headerNewCategory">
              <h2>Crea una Categoría</h2>
              <p className="actualLenght">
                <span>{newCategoryLenght}</span>
                /20
              </p>
            </div>

            <form className="formCreate" onSubmit={(e) => handleNewCategory(e)}>
              <div className="formInputs">
                <input
                  disabled={categories.length >= MAX_CATEGORIES}
                  onChange={validateNewName}
                  type="text"
                  maxLength={MAX_CATEGORY_LENGTH}
                  placeholder="Crea una categoría"
                  ref={categoryRef}
                />
                {isNameAlreadyUsed && (
                  <p className="error">El nombre ya está en uso</p>
                )}
                {categories.length >= MAX_CATEGORIES && (
                  <p className="error">
                    Has alcanzado el numero máximo de categorías
                  </p>
                )}
                <div className="categoryColor">
                  {availableColors.map((color) => (
                    <OptionColor
                      key={color[0]}
                      color={color[1].light}
                      selected={color[1].light === colorSelected}
                      onClick={() => {
                        setColorSelected(color[1].light);
                      }}
                    />
                  ))}
                </div>
              </div>
              <div onClick={(e) => handleNewCategory(e)}>
                <ActionButton
                  disabled={
                    categories.length >= MAX_CATEGORIES || isNameAlreadyUsed
                  }
                  iconName="send"
                />
              </div>
            </form>
          </article>
          <article className="articleEdit">
            <h2>Edita tus categorías</h2>
            <div className="categories">
              {categories.map((category) => (
                <div className="category" key={category.id}>
                  <div className="inputgroups">
                    <input
                      className="categoryName"
                      type="text"
                      defaultValue={category.name}
                      required
                      onChange={(e) => handleUpdateName(category, e)}
                    />
                    <div className="categoryColor">
                      {availableColors.map((color) => (
                        <OptionColor
                          key={color[0]}
                          color={color[1].light}
                          selected={color[1].light === category.color}
                          onClick={() => {
                            f.updateCategory(category, "color", color[1].light);
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div onClick={() => f.deleteCategory(category.id)}>
                    <ActionButton iconName="delete" />
                  </div>
                </div>
              ))}
            </div>
          </article>
        </NewCategoryStyled>
      </Popup>
    </>
  );
};

export default NewCategory;
