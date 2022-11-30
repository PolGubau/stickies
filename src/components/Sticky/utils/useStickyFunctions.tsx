import { useNavigate } from "react-router-dom";

const useStickyFunctions = () => {
  const navigate = useNavigate();

  return {
    closeSticky: () => {
      navigate("/");
    },
    openSticky: (id: string, opened: boolean) => {
      !opened && navigate(`/sticky/${id}`);
    },
  };
};

export default useStickyFunctions;
