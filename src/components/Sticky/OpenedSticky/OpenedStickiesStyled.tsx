import styled from "styled-components";
interface StickyStyledProps {
  bgColor: string;
  opened?: boolean;
}
export const OpenedStickyStyled = styled.div<StickyStyledProps>`
  position: absolute;
  overflow: hidden;
  padding: 10px 20px;
  background-color: ${(props) => props.bgColor};
  border-radius: 10px;
  border: 1px solid black;
  width: 80vw;
  z-index: 11;
  top: 15vh;
  left: 10vw;
  min-height: 70vh;

  .stickyHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
`;
