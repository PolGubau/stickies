import ActionButton from "src/components/Buttons/ActionButton/ActionButton";
import { useAppDispatch, useAppSelector } from "src/redux/app/hooks";
import {
  changeShowingPrivateActionCreator,
  popupsState,
  togglePopupActionCreator,
} from "src/redux/features/popupSlice";
import styled from "styled-components";
const ButtonsRight = () => {
  const dispatch = useAppDispatch();
  const {
    privateLogin: { showingPrivate },
  } = useAppSelector(popupsState);

  const handleDisplayPopup = (e: any, popup: string) => {
    e.preventDefault();
    dispatch(togglePopupActionCreator(popup));
  };
  const handleLogout = () => {
    dispatch(changeShowingPrivateActionCreator(false));
  };
  const ButtonsRightStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `;
  return (
    <ButtonsRightStyled>
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
    </ButtonsRightStyled>
  );
};

export default ButtonsRight;
