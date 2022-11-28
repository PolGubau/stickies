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
  :hover {
    cursor: pointer;
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
