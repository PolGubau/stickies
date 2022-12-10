import { FiDelete } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";
import { useAppSelector, useAppDispatch } from "src/redux/app/hooks";
import {
  changeShowingPrivateActionCreator,
  popupsState,
} from "src/redux/features/popupSlice";
import {
  actualSelectedCategories,
  removeSelectedCategoryActionCreator,
} from "src/redux/features/selectedCategoriesSlice";
import { HiddenStickiesTitle } from "./SelectedCategoriesStyled";

const SelectedCategories = () => {
  const dispatch = useAppDispatch();

  const { selectedCategories } = useAppSelector(actualSelectedCategories);

  const removeThisCategory = (id: string) => {
    dispatch(removeSelectedCategoryActionCreator(id));
  };
  const popupState = useAppSelector(popupsState);
  const isLoged = popupState.privateLogin.isLogged;

  const handleLogout = () => {
    dispatch(changeShowingPrivateActionCreator(false));
  };
  return (
    <>
      {selectedCategories.length === 0 && isLoged ? (
        <HiddenStickiesTitle onClick={handleLogout}>
          Stickies ocultos
          <FiDelete onClick={() => {}} />
        </HiddenStickiesTitle>
      ) : (
        <h3>Todos los stickies</h3>
      )}
      {selectedCategories.length > 0 && (
        <h3 className="listTitle">
          Notas de
          {selectedCategories.map((category: any) => (
            <p key={category.id} className="categoryItem">
              {category.name}
              <TiDelete
                size={17}
                onClick={() => removeThisCategory(category.id)}
              />
            </p>
          ))}
        </h3>
      )}
    </>
  );
};

export default SelectedCategories;
