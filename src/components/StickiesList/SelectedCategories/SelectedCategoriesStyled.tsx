import { colors } from "src/styles/theme";
import styled from "styled-components";

export const HiddenStickiesTitle = styled.h3`
  cursor: pointer;
  padding: 5px 10px;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${colors.gray.dark};
  border-radius: 20px;
  width: fit-content;
  background-color: ${colors.gray.light};
  :hover {
    background-color: ${colors.gray.dark};
    color: ${colors.gray.light};
  }
`;
export const WhichCategoriesAreYouViewing = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: row;
`;
