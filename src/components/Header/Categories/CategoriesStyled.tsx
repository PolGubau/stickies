import styled from "styled-components";
export interface ICategoryName {
  color: string;
}
export interface IOptionColor {
  color: string;
  selected: boolean;
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
`;

export const OptionColor = styled.div<IOptionColor>`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  border: 1px solid black;
  background-color: ${(props) => props.color};
`;
export const CategoryName = styled.button<ICategoryName>`
  background-color: ${(props) => props.color};
  margin: 0;
  padding: 5px 10px;
  min-width: 50px;
  border-radius: 20px;
  cursor: pointer;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  :hover {
    filter: brightness(0.8);
    transform: scale(0.95);
  }
`;
