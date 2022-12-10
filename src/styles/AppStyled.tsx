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
  background: ${colors.gray.light};
  background-image: radial-gradient(${colors.gray.dark} 1px, transparent 0);
  background-size: 50px 50px;

  .title {
    font-size: 3rem;
    font-weight: bold;
    line-height: 1.5;
    margin: 0 0 2rem 0;
  }

  .stickiesList {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-grow: 1;
  }

  .footerSection {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    width: 100%;
    justify-content: space-between;
  }


`;
