import ActionButton from "src/components/Buttons/ActionButton/ActionButton";
import { useAppDispatch } from "src/redux/app/hooks";
import { togglePopupActionCreator } from "src/redux/features/popupSlice";
const OptionsAside = () => {
  const dispatch = useAppDispatch();
  const handleDisplayPopup = (e: any) => {
    e.preventDefault();
    dispatch(togglePopupActionCreator("settings"));
  };

  return (
    <div onClick={handleDisplayPopup}>
      <ActionButton iconName="settings" />
    </div>
  );
};

export default OptionsAside;
