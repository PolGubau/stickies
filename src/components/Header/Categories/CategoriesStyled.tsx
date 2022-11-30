import styled from "styled-components";
export interface ICategoryName {
  color: string;
}

export const NewCategoryForm = styled.form`
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
`;

export const CategoryName = styled.button<ICategoryName>`
  background-color: ${(props) => props.color};
  margin: 0;
  padding: 5px;
  border-radius: 15px;
  cursor: pointer;
  border: 1px solid black;
`;
