import { IOptionColor } from "src/components/Header/Categories/CategoriesStyled";
import { breakpoints, colors } from "src/styles/theme";
import styled from "styled-components";

export const NewCategoryStyled = styled.article`
  z-index: 11;
  position: absolute;
  top: 10vh;
  left: 10%;
  width: 80vw;
  min-height: 80vh;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-start;
  align-content: flex-start;
  @media screen and (max-width: ${breakpoints.mobile}) {
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
  .articleCreate {
    flex-grow: 1;
    background-color: ${colors.red.light};
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
    gap: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    align-content: flex-start;
    h2 {
      margin: 5px 0;
    }
    .formCreate {
      display: flex;
      flex-direction: row;
      gap: 15px;
      flex-wrap: wrap;
      width: 100%;
      max-width: 600px;
      justify-content: space-between;
      align-items: stretch;

      /* flex-wrap: wrap; */

      .formInputs {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 10px;

        input {
          font-size: 1.2rem;
          border: 1px solid ${colors.gray.dark};
          border-radius: 20px;
          padding: 5px 10px;
          width: 100%;
        }

        .categoryColor {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
      }
    }
    .submit {
      background-color: var(--dark-grey);
      color: var(--light-grey);
      border: 0px solid var(--orange-dark);
      border-radius: 20px;
      padding: 0 15px;
      display: flex;
      gap: 5px;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      transition: 0.1s ease-in-out;
      height: 100%;
      aspect-ratio: 1/1;
      max-width: 200px;
      :hover {
        cursor: pointer;
        background-color: black;
        transform: scale(0.95);
      }
    }
    @media (max-width: ${breakpoints.tablet}) {
      height: fit-content;
    }
  }
  .articleEdit {
    padding: 20px 40px;

    flex-grow: 1.7;
    display: flex;
    flex-direction: column;
    .categories {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .category {
      display: flex;
      flex-direction: row;
      gap: 10px;
      flex-wrap: wrap;
      width: 100%;
      align-content: center;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 4px;
      border-radius: 20px;
      background-color: ${colors.gray.light};
    }
    .inputName {
      display: flex;
      flex-direction: row;
      border: 1px solid ${colors.gray.dark};
      border-radius: 20px;
      padding: 5px 10px;
    }
    .categoryColor {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: center;
      justify-content: flex-start;
      align-items: flex-start;
      max-width: 600px;
      flex-grow: 1;
      div {
        max-width: 20px;
      }
    }
  }
`;
export const OptionColor = styled.div<IOptionColor>`
  display: flex;
  margin: 3px;
  flex-grow: 1;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  max-width: 30px;
  border: 1px solid black;
  background-color: ${(props) => props.color};
`;
