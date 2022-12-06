import { StickiesLayoutType } from "src/constants/startingSettingsTypes";
import styled from "styled-components";
interface StickyStyledProps {
  bgColor: string;
  opened?: boolean;
  layout?: StickiesLayoutType;
}
export const ClosedStickyStyled = styled.div<StickyStyledProps>`
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
  flex-direction: ${(props) => (props.layout === "list" ? "row" : "column")};

  justify-content: space-between;
  align-items: flex-start;
  height: fit-content;

  .stickyHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
`;
