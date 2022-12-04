import React from "react";
import ActionButton from "src/components/Buttons/ActionButton/ActionButton";
import FormStickies from "src/components/Footer/FormStickies/Form";
import { togglePopupActionCreator } from "src/redux/features/popupSlice";
import { useAppDispatch } from "src/redux/app/hooks";

const ButtonsLeft = () => {
  const dispatch = useAppDispatch();
  const handleDisplayPopup = (e: any) => {
    e.preventDefault();
    dispatch(togglePopupActionCreator("newCategory"));
  };
  return (
    <>
      <div onClick={handleDisplayPopup}>
        <ActionButton iconName="newCategory" />
      </div>
      <FormStickies />
    </>
  );
};

export default ButtonsLeft;
