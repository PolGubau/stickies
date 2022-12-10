import styled from "styled-components";
import { colors } from "./theme";

export const AppStyled = styled.main`
  min-height: 100vh;
  padding: 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: ${colors.white.light};
  background-image: radial-gradient(${colors.gray.dark} 1px, transparent 0);
  background-size: 50px 50px;

  .stickiesList {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-grow: 1;
  }
`;
