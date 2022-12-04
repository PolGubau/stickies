import React from "react";
import { TiDelete } from "react-icons/ti";
import { useAppSelector, useAppDispatch } from "src/redux/app/hooks";
import {
  actualSelectedCategories,
  removeSelectedCategoryActionCreator,
} from "src/redux/features/selectedCategoriesSlice";

const SelectedCategories = () => {
  const dispatch = useAppDispatch();

  const { selectedCategories } = useAppSelector(actualSelectedCategories);

  const removeThisCategory = (id: string) => {
    dispatch(removeSelectedCategoryActionCreator(id));
  };
  return (
    <>
      {selectedCategories.length === 0 && <h3>Todas las notas</h3>}
      {selectedCategories.length > 0 && (
        <h3 className="listTitle">
          Notas de
          {selectedCategories.map((category: any) => (
            <p key={category.id} className="categoryItem">
              {category.name}
              <TiDelete onClick={() => removeThisCategory(category.id)} />
            </p>
          ))}
        </h3>
      )}
    </>
  );
};

export default SelectedCategories;
