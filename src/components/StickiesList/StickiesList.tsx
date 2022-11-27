import { ISticky } from "src/Interfaces";
import { useAppSelector, useAppDispatch } from "src/redux/app/hooks";
import { actualStickies } from "src/redux/features/stickiesSlice";
import "./StickiesListStyles.css";
import Sticky from "../Sticky/Sticky";
import { TiDelete } from "react-icons/ti";
import {
  actualSelectedCategories,
  removeSelectedCategoryActionCreator,
} from "src/redux/features/selectedCategoriesSlice";

const StickiesList = () => {
  const dispatch = useAppDispatch();
  const { stickies } = useAppSelector(actualStickies);
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
      <section className="stikyList">
        {stickies &&
          stickies.map((sticky: ISticky) => (
            <Sticky key={sticky.id} sticky={sticky} />
          ))}
      </section>
    </>
  );
};

export default StickiesList;
