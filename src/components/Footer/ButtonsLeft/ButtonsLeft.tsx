import React from "react";
// import ActionButton from "src/components/Buttons/ActionButton/ActionButton";
import FormStickies from "src/components/Footer/FormStickies/Form";
// import { togglePopupActionCreator } from "src/redux/features/popupSlice";
// import { useAppDispatch } from "src/redux/app/hooks";

const ButtonsLeft = () => {
  // const dispatch = useAppDispatch();
  // const handleDisplayPopup = () => {
  //   dispatch(togglePopupActionCreator("newCategory"));
  // };
  return (
    <>
      <div className="buttonsLeft">
        {/* <div onClick={handleDisplayPopup}>
          <ActionButton iconName="newCategory" />
        </div> */}
        <FormStickies />
      </div>
    </>
  );
};

export default ButtonsLeft;
