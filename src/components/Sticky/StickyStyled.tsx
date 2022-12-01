import styled from "styled-components";
interface StickyStyledProps {
  bgColor: string;
  opened?: boolean;
}
export const StickyStyled = styled.div<StickyStyledProps>`
  position: ${(props) => (props.opened ? "absolute" : "relative")};
  overflow: ${(props) => (props.opened ? "auto" : "hidden")};
  cursor: ${(props) => (props.opened ? "default" : "pointer")};
  padding: 10px 20px;
  background-color: ${(props) => props.bgColor};
  border-radius: 10px;
  border: 1px solid black;
  //styles for the opened sticky
  width: ${(props) => (props.opened ? "80vw" : "fit-content")};
  z-index: ${(props) => (props.opened ? "11" : "0")};
  top: ${(props) => (props.opened ? "15vh" : "0")};
  left: ${(props) => (props.opened ? "10vw" : "0")};
  height: ${(props) => (props.opened ? "70vh" : "fit-content")};

  .stickyHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
`;
