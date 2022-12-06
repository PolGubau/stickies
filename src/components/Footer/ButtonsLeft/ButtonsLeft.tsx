import React from "react";
import ActionButton from "src/components/Buttons/ActionButton/ActionButton";
import FormStickies from "src/components/Footer/FormStickies/Form";
import { togglePopupActionCreator } from "src/redux/features/popupSlice";
import { useAppDispatch } from "src/redux/app/hooks";
import styled from "styled-components";

const ButtonsLeftStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ButtonsLeft = () => {
  const dispatch = useAppDispatch();
  const handleDisplayPopup = () => {
    dispatch(togglePopupActionCreator("newCategory"));
  };
  return (
    <>
      <ButtonsLeftStyled className="buttonsLeft">
        <div onClick={handleDisplayPopup}>
          <ActionButton iconName="newCategory" />
        </div>
        <FormStickies />
      </ButtonsLeftStyled>
    </>
  );
};

export default ButtonsLeft;
