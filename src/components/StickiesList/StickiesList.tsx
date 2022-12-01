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
import { useParams } from "react-router-dom";

const StickiesList = () => {
  const { stickyId } = useParams();

  const dispatch = useAppDispatch();
  // if you have selected a category, then you will see only the stickies of that category
  // if you have not selected a category, then you will see all the stickies
  const { selectedCategories } = useAppSelector(actualSelectedCategories);

  const { stickies: allStickies } = useAppSelector(actualStickies);

  //
  const stickiesToShow =
    selectedCategories.length > 0
      ? allStickies.filter((sticky: ISticky) => {
          return sticky.category !== undefined;
        })
      : allStickies;

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
      <section className="stickyList">
        {stickiesToShow &&
          stickiesToShow.map((sticky: ISticky) => (
            <>
              <Sticky
                key={sticky.id}
                sticky={sticky}
                opened={stickyId === sticky.id}
              />
            </>
          ))}
      </section>
    </>
  );
};

export default StickiesList;
