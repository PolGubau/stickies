import ActionButton from "src/components/Buttons/ActionButton/ActionButton";
import { useAppDispatch, useAppSelector } from "src/redux/app/hooks";
import {
  changeShowingPrivateActionCreator,
  popupsState,
  togglePopupActionCreator,
} from "src/redux/features/popupSlice";
const OptionsAside = () => {
  const dispatch = useAppDispatch();
  const popupState = useAppSelector(popupsState);

  const { showingPrivate } = popupState.privateLogin;
  const handleDisplayPopup = (e: any, popup: string) => {
    e.preventDefault();
    dispatch(togglePopupActionCreator(popup));
  };
  const handleLogout = () => {
    dispatch(changeShowingPrivateActionCreator(false));
  };
  return (
    <div className="rightButtons">
      {showingPrivate ? (
        <div onClick={handleLogout}>
          <ActionButton iconName="unlock" />
        </div>
      ) : (
        <div onClick={(e) => handleDisplayPopup(e, "privateLogin")}>
          <ActionButton iconName="lock" />
        </div>
      )}

      <div onClick={(e) => handleDisplayPopup(e, "settings")}>
        <ActionButton iconName="settings" />
      </div>
    </div>
  );
};

export default OptionsAside;
