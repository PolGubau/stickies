import { useNavigate } from "react-router-dom";
import { ISticky } from "src/Interfaces";
import { useAppDispatch, useAppSelector } from "src/redux/app/hooks";
import {
  actualStickies,
  removeStickysActioncreator,
  toggleArchivedActioncreator,
  toggleCompletedActioncreator,
  togglePrivateActioncreator,
} from "src/redux/features/stickiesSlice";

const useStickyFunctions = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { stickies } = useAppSelector(actualStickies);

  return {
    closeSticky: () => {
      navigate("/");
    },
    openSticky: (id: string) => {
      navigate(`/sticky/${id}`);
    },
    deleteSticky: (id: string) => {
      dispatch(removeStickysActioncreator(id));
    },
    toggleCompleteSticky: (id: string) => {
      dispatch(toggleCompletedActioncreator(id));
    },
    toggleArchiveSticky: (id: string) => {
      dispatch(toggleArchivedActioncreator(id));
    },
    togglePrivateSticky: (id: string) => {
      dispatch(togglePrivateActioncreator(id));
    },
    shortDescription: (description: string | undefined) => {
      return description && description.length > 37
        ? description.slice(0, 37) + "..."
        : description;
    },
    getAllStickiesWithCategory: () => {
      const stickiesWithCategory = stickies.map((sticky: ISticky) => {
        const category = sticky.category;
        return { ...sticky, category };
      });
      return stickiesWithCategory;
    },
  };
};

export default useStickyFunctions;
