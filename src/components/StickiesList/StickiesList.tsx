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
  // if you have selected a category, then you will see only the stickies of that category
  // if you have not selected a category, then you will see all the stickies
  const selectedCategories = useAppSelector(actualSelectedCategories);
  const { stickies } = useAppSelector(actualStickies);
  const stickiesToShow = selectedCategories.length
    ? stickies.filter((sticky: any) =>
        selectedCategories.includes(sticky.category)
      )
    : stickies;
  console.log(stickiesToShow);
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
