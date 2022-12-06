import React from "react";
import { breakpoints } from "src/styles/theme";
import styled from "styled-components";
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
  min-height: 80vh;
  background-color: #fff;
  border-radius: 20px;
  display: flex;

  @media screen and (max-width: ${breakpoints.mobile}) {
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
`;

const Popup = ({ children }: IProps) => {
  return (
    <>
      <Wrapper/>
      <PopUpLayout>{children}</PopUpLayout>
    </>
  );
};

export default Popup;
