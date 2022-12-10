import { colors, shapes } from "src/styles/theme";
import styled from "styled-components";

export const FormStyled = styled.form`
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 20vw;
  max-width: 600px;
  min-width: 300px;
  gap: 10px;
  padding: 10px;
  border: 1px solid ${colors.gray.dark};
  border-radius: 30px;
  background: ${colors.gray.light};

  input,
  textarea,
  select {
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
    width: 100%;
    min-height: 40px;
    padding: 10px 15px;
    border-radius: ${shapes.borderRadius.large};
    border: 1px solid ${colors.gray.dark};
  }

  textarea {
    max-height: 20vh;
    min-height: 10vh;
    resize: vertical;
  }
  .categorySelectorContainer {
    width: 100%;
    position: relative;
    .categorySelector {
      position: relative;
      appearance: none;
    }
    .iconSelect {
      user-select: none;
      position: absolute;
      height: 30px;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  .formTitle {
    margin: 7px 3px;
    padding: 0;
    color: ${colors.gray.dark};
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
    border-radius: ${shapes.borderRadius.large};
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
  .submitButton {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 10px;
    font-size: 1em;
    border-radius: 5px;
    border: 1px solid ${colors.gray.dark};
    background-color: ${colors.orange.normal};
    flex-grow: 1;
    border-radius: ${shapes.borderRadius.large};
    cursor: pointer;
    :hover {
      background-color: ${colors.orange.dark};
      color: ${colors.gray.dark};
    }
  }
`;
interface CheckBoxButtonProps {
  clicked?: boolean;
}

export const CheckBoxButton = styled.div<CheckBoxButtonProps>`
  background-color: ${(props) =>
    props.clicked ? colors.gray.dark : colors.gray.normal};
  border: 1px solid
    ${(props) => (props.clicked ? colors.gray.normal : colors.gray.dark)};
  color: ${(props) => (props.clicked ? colors.gray.light : colors.gray.dark)};
  padding: 10px 15px;
  width: 100%;
  border-radius: ${shapes.borderRadius.large};
  display: flex;
  min-height: 40px;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  justify-content: center;
  p {
    padding: 0;
    margin: 0;
  }
`;
