import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { userWantsBlurs } from "src/constants/values";
import { useAppDispatch } from "src/redux/app/hooks";
import { togglePopupActionCreator } from "src/redux/features/popupSlice";
import { ListOfPopups } from "src/Interfaces";
const WrapperStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-grow: 1;
  backdrop-filter: ${userWantsBlurs && "blur(10px)"};
  z-index: 10;
`;
export interface WrapperProps {
  component?: ListOfPopups;
}
const Wrapper = ({ component }: WrapperProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const goHome = (componentToClose?: string) => {
    componentToClose && dispatch(togglePopupActionCreator(componentToClose));

    navigate("/");
  };
  return <WrapperStyled onClick={() => goHome(component)}></WrapperStyled>;
};

export default Wrapper;
