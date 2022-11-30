import { ICategory, ISticky } from "src/Interfaces";
import { useAppDispatch, useAppSelector } from "src/redux/app/hooks";
import { actualCategories } from "src/redux/features/categoriesSlice";

import { removeStickysActioncreator } from "src/redux/features/stickiesSlice";
import { colors } from "src/styles/theme";
import styled from "styled-components";

interface StickyStyledProps {
  bgColor: string;
}
const StickyStyled = styled.div<StickyStyledProps>`
  position: relative;
  overflow: hidden;
  padding: 10px;
  background-color: ${(props) => props.bgColor};
  border-radius: 10px;
`;
const Sticky = ({ sticky }: { sticky: ISticky }) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    console.log("delete sticky");
    dispatch(removeStickysActioncreator(sticky.id));
  };

  const allCategories = useAppSelector(actualCategories);
  const categoryOfThisSticky = allCategories.categories.find(
    (category: ICategory) => category.name === sticky.category
  );
  const bgColor = categoryOfThisSticky?.color ?? colors.yellow;

  return (
    <StickyStyled bgColor={bgColor}>
      <h2 className="sticky">{sticky.title}</h2>
      <p>{sticky.description}</p>
      {sticky.category && <p>{sticky.category}</p>}
      <button onClick={handleDelete}>Delete</button>
    </StickyStyled>
  );
};

export default Sticky;
