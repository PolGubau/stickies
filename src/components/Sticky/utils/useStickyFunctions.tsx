import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "src/redux/app/hooks";
import { removeStickysActioncreator } from "src/redux/features/stickiesSlice";

const useStickyFunctions = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return {
    closeSticky: () => {
      navigate("/");
    },
    openSticky: (id: string, opened: boolean) => {
      !opened && navigate(`/sticky/${id}`);
    },
    deleteSticky: (id: string) => {
      console.log("delete sticky");
      dispatch(removeStickysActioncreator(id));
    },
  };
};

export default useStickyFunctions;
