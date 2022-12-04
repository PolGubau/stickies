import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "src/redux/app/hooks";
import { togglePopupActionCreator } from "src/redux/features/popupSlice";

const useFormFunctions = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return {
    closeSticky: () => {
      navigate("/");
    },
    createSticky: (id: string, opened: boolean) => {
      !opened && navigate(`/sticky/${id}`);
    },
    handleMinimize: (e: any) => {
      e.preventDefault();
      dispatch(togglePopupActionCreator("newSticky"));
    },
  };
};

export default useFormFunctions;
