import { colors } from "src/styles/theme";
import styled from "styled-components";
interface StickyStyledProps {
  bgColor: string;
  done?: boolean;
  opened?: boolean;
}
export const ClosedGridStickyStyled = styled.div<StickyStyledProps>`
  background-color: ${(props) => props.bgColor};
  position: relative;
  overflow: hidden;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid black;
  width: fit-content;
  z-index: 0;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: fit-content;
  opacity: ${(props) => (props.done ? "0.5" : "1")};
  .stickyTexts {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-grow: 1;
    h2 {
      margin: 10px 0px 5px 0;
      text-decoration: ${(props) => (props.done ? "line-through" : "none")};
    }
    p {
      margin: 0 0 10px 0;
    }
  }
  .stickyButtons {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 10px;
  }
`;
export const ClosedListStyled = styled.div<StickyStyledProps>`
  background-color: ${(props) => props.bgColor};
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 30px;
  width: 100%;
  z-index: 0;
  height: fit-content;
  display: flex;
  gap: 10px;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  opacity: ${(props) => (props.done ? "0.5" : "1")};

  .stickyContent {
    padding: 10px 10px 10px 20px;
    border-radius: 30px;
    border: 1px solid ${colors.gray.dark};

    flex-grow: 1;
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: flex-start;
    align-content: center;
    /* flex-wrap: wrap; */
    h2 {
      margin: 0;
      text-decoration: ${(props) => (props.done ? "line-through" : "none")};
    }
    .stickyTexts {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      gap: 10px;
      flex-grow: 1;
    }
    .stickyButtons {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }
  }
`;
