import { ICategory, ISticky } from "src/Interfaces";
import { useAppDispatch, useAppSelector } from "src/redux/app/hooks";
import { actualCategories } from "src/redux/features/categoriesSlice";

import { removeStickysActioncreator } from "src/redux/features/stickiesSlice";
import { colors } from "src/styles/theme";
import { StickyStyled } from "./StickyStyled";
import useStickyFunctions from "./utils/useStickyFunctions";
const Sticky = ({ sticky, opened }: { sticky: ISticky; opened: boolean }) => {
  const dispatch = useAppDispatch();
  const f = useStickyFunctions();
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
    <StickyStyled
      bgColor={bgColor}
      onClick={() => f.openSticky(sticky.id, opened)}
      opened={opened}
    >
      <div className="stickyHeader">
        <h2 className="sticky">{sticky.title}</h2>
        {opened && <button onClick={f.closeSticky}>X</button>}
      </div>
      <p>{sticky.description}</p>
      {sticky.category && <p>{sticky.category}</p>}
      <button onClick={handleDelete}>Delete</button>
    </StickyStyled>
  );
};

export default Sticky;
