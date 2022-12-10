import { colors } from "src/styles/theme";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: ${colors.white.light};
  padding: 10px 10px 10px 20px;
  border-radius: 30px;
  gap: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  overflow-x: hidden;
  width: 100%;
  h1 {
    margin: 0;
    font-size: 2rem;
    padding: 0;
  }
`;
