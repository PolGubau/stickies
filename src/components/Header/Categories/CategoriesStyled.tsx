import styled from "styled-components";
export interface ICategoryName {
  color: string;
}
export const CategoriesContainerStyled = styled.section`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  margin: 0;
  align-items: stretch;

  .formCategories {
    display: flex;
    flex-direction: row;
    gap: 0px;
    align-items: stretch;
    justify-content: flex-start;
    align-content: center;
    user-select: none;
    height: 40px;
    :hover {
      cursor: pointer;
    }
    //first child
    .nomCategoria {
      flex: 1 1 auto;
      border: 1px solid black;
      border-right: none;
      padding-left: 20px;
      border-radius: 20px 0 0 20px;
    }
    .chooseColor {
      height: 100%;
      border-left: none;
      border-right: 0;
      background-color: white;
      padding: 0;
      margin: 0;
      padding-right: 2px;
    }
    .submit {
      display: flex;
      justify-content: center;
      align-items: center;
      border-left: none;
      border: 1px solid black;
      padding-right: 10px;
      border-radius: 0 20px 20px 0;
    }
  }
`;

export const OptionColor = styled.option<ICategoryName>`
  background-color: ${(props) => props.color};
`;
export const CategoryName = styled.button<ICategoryName>`
  background-color: ${(props) => props.color};
  margin: 0;
  padding: 0px 15px;
  height: 40px;

  border-radius: 20px;
  cursor: pointer;
  border: 1px solid black;
`;
