import { colors } from "src/styles/theme";
import styled from "styled-components";

export const FormStyled = styled.form`
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: flex-start;
  justify-content: flex-start;
  width: 20vw;
  max-width: 600px;
  min-width: 300px;
  gap: 10px;
  padding: 10px;
  border: 1px solid ${colors.gray.dark};
  border-radius: 30px;
  background: ${colors.red.light};

  input,
  textarea {
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
    width: 100%;
    padding: 10px;
    border: 1px solid ${colors.gray.dark};
    border-radius: 5px;
  }

  textarea {
    max-height: 20vh;
    min-height: 10vh;
    resize: vertical;
  }

  .formTitle {
    margin: 7px 3px;
    padding: 0;
    color: ${colors.gray.dark};
  }

  .submitButton {
    padding: 10px;
    border: 1px solid ${colors.gray.normal};
    border-radius: 5px;
    background-color: ${colors.orange.normal};
    flex-grow: 1;
    border-radius: 20px;
    cursor: pointer;
  }

  .categorySelector {
    padding: 5px 0;
    width: 100%;
  }

  .buttonsContainer {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    gap: 5px;
  }

  .minimizeButton {
    background-color: ${colors.gray.normal};
    color: ${colors.gray.light};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    font-size: 20px;
  }

  .downFixed {
    position: fixed;
    bottom: 20px;
    left: 20px;
  }
`;
