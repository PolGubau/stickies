import { ICategory, ISticky } from "src/Interfaces";
import { useAppSelector } from "src/redux/app/hooks";
import { actualStickies } from "src/redux/features/stickiesSlice";

const useStickiesListFunctions = () => {
  const { stickies } = useAppSelector(actualStickies);

  return {
    getAllStickiesWithCategory: () => {
      const stickiesWithCategory = stickies.map((sticky: ISticky) => {
        const category = sticky.category;
        return { ...sticky, category };
      });
      return stickiesWithCategory;
    },
    getStickiesByCategory: (category: ICategory) => {
      return stickies.filter(
        (sticky: ISticky) => sticky.category === category.name
      );
    },
  };
};

export default useStickiesListFunctions;
