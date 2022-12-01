import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { userWantsBlurs } from "src/constants/values";
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

const Wrapper = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return <WrapperStyled onClick={goHome}></WrapperStyled>;
};

export default Wrapper;
