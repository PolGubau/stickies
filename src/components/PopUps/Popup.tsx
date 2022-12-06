import React from "react";
import { useDispatch } from "react-redux";
import { closeAllPopupsActionCreator } from "src/redux/features/popupSlice";
import { breakpoints } from "src/styles/theme";
import styled from "styled-components";
import ActionButton from "../Buttons/ActionButton/ActionButton";
import Wrapper from "../Wrapper/Wrapper";
interface IProps {
  children: React.ReactNode;
}
const PopUpLayout = styled.section`
  z-index: 11;
  position: absolute;
  top: 10vh;
  left: 10%;
  width: 80vw;
  /* min-height: 80vh; */
  background-color: #fff;
  border-radius: 20px;
  overflow-y: hidden;
  display: flex;
  align-items: stretch;
  @media screen and (max-width: ${breakpoints.mobile}) {
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100vh;
  }
  .closePopUpButton {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

const Popup = ({ children }: IProps) => {
  const dispatch = useDispatch();
  return (
    <>
      <Wrapper />
      <PopUpLayout>
        <div
          className="closePopUpButton"
          onClick={() => dispatch(closeAllPopupsActionCreator())}
        >
          <ActionButton iconName="minimize" />
        </div>
        {children}
      </PopUpLayout>
    </>
  );
};

export default Popup;
