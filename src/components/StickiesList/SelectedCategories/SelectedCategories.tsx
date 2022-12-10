import { FiDelete } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";
import { CategoryName } from "src/components/Header/Categories/CategoriesStyled";
import { useAppSelector, useAppDispatch } from "src/redux/app/hooks";
import {
  changeShowingPrivateActionCreator,
  popupsState,
} from "src/redux/features/popupSlice";
import {
  actualSelectedCategories,
  removeSelectedCategoryActionCreator,
} from "src/redux/features/selectedCategoriesSlice";
import {
  HiddenStickiesTitle,
  WhichCategoriesAreYouViewing,
} from "./SelectedCategoriesStyled";

const SelectedCategories = () => {
  const dispatch = useAppDispatch();

  const { selectedCategories } = useAppSelector(actualSelectedCategories);
  const anySelectedCategory = selectedCategories.length > 0;

  const removeThisCategory = (id: string) => {
    dispatch(removeSelectedCategoryActionCreator(id));
  };
  const {
    privateLogin: { showingPrivate },
  } = useAppSelector(popupsState);

  const handleLogout = () => {
    dispatch(changeShowingPrivateActionCreator(false));
  };

  if (showingPrivate) {
    return (
      <WhichCategoriesAreYouViewing>
        <HiddenStickiesTitle onClick={handleLogout}>
          Stickies ocultos
          <FiDelete />
        </HiddenStickiesTitle>
        {selectedCategories.map((category: any) => (
          <HiddenStickiesTitle key={category.id}>
            {category.name}
            <TiDelete
              size={20}
              onClick={() => removeThisCategory(category.id)}
            />
          </HiddenStickiesTitle>
        ))}
      </WhichCategoriesAreYouViewing>
    );
  } else {
    return (
      <WhichCategoriesAreYouViewing>
        {anySelectedCategory ? (
          <h3>Viendo los stickies de</h3>
        ) : (
          <h3>Todos los stickies</h3>
        )}
        {selectedCategories.map((category: any) => (
          <CategoryName color={category.color} key={category.id}>
            {category.name}
            <TiDelete
              size={17}
              onClick={() => removeThisCategory(category.id)}
            />
          </CategoryName>
        ))}
      </WhichCategoriesAreYouViewing>
    );
  }
};

export default SelectedCategories;
