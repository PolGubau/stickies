import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "src/redux/app/hooks";
import { toggleFormActionCreator } from "src/redux/features/formSlice";

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
      dispatch(toggleFormActionCreator());
    },
  };
};

export default useFormFunctions;
