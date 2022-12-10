import { colors, shapes } from "src/styles/theme";
import styled from "styled-components";

export const PrivateLoginPopupStyled = styled.article`
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-start;
  align-content: flex-start;
  align-items: stretch;
  flex: 1;
  h2 {
    margin: 5px 0;
  }
  .form {
    display: flex;
    display: row;
    gap: 10px;
    align-items: stretch;
    justify-content: flex-start;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    input {
      flex: 1;
      padding: 5px 10px;
      font-size: 1.2rem;
      border: 1px solid ${colors.gray.dark};
      border-radius: ${shapes.borderRadius.large};
    }
  }
  .resetPasswordContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: flex-start;
    margin: 20px 0;
    p {
      margin: 0;
      font-size: 0.9em;
    }
    button {
      display: flex;
      flex-direction: row;
      gap: 10px;
      align-items: center;
      padding: 5px 10px;
      border-radius: 12px;
      background-color: ${colors.orange.light};
      border: 1px solid ${colors.gray.dark};
      cursor: pointer;
      :hover {
        background-color: ${colors.orange.normal};
        transform: scale(0.95);
      }
    }
  }
`;
