import { ICategory, ISticky } from "src/Interfaces";
import { useAppSelector } from "src/redux/app/hooks";
import { actualStickies } from "src/redux/features/stickiesSlice";
import "./StickiesListStyles.css";
import Sticky from "../Sticky";
import { actualSelectedCategories } from "src/redux/features/selectedCategoriesSlice";
import { useParams } from "react-router-dom";
import useStickiesListFunctions from "./utils/useStickiesListFunctions";
import SelectedCategories from "./SelectedCategories/SelectedCategories";
import { popupsState } from "src/redux/features/popupSlice";
const StickiesList = () => {
  const { stickyId } = useParams();
  const fsl = useStickiesListFunctions();

  const { selectedCategories } = useAppSelector(actualSelectedCategories);

  const { stickies: allStickies } = useAppSelector(actualStickies);

  //
  const popupState = useAppSelector(popupsState);
  const showingPrivate = popupState.privateLogin.showingPrivate;
  const stickiesByCategory =
    selectedCategories.length === 0
      ? allStickies
      : selectedCategories.reduce((acc: ISticky[], category: ICategory) => {
          return [...acc, ...fsl.getStickiesByCategory(category)];
        }, []);
  const stickiesToShow = showingPrivate
    ? stickiesByCategory.filter((sticky: ISticky) => {
        return sticky.private === true;
      })
    : stickiesByCategory.filter((sticky: ISticky) => {
        return sticky.private === false;
      });

  return (
    <>
      <SelectedCategories />
      <section className="stickyList">
        {stickiesToShow &&
          stickiesToShow.map((sticky: ISticky) => (
            <Sticky
              key={sticky.id}
              sticky={sticky}
              opened={stickyId === sticky.id}
            />
          ))}
      </section>
    </>
  );
};

export default StickiesList;
