import { ICategory, ISticky } from "src/Interfaces";
import { useAppSelector } from "src/redux/app/hooks";
import { actualCategories } from "src/redux/features/categoriesSlice";

import { colors, defaultStickyColor } from "src/styles/theme";
import { StickyStyled } from "./StickyStyled";
import useStickyFunctions from "./utils/useStickyFunctions";

//
const Sticky = ({ sticky, opened }: { sticky: ISticky; opened: boolean }) => {
  const f = useStickyFunctions();

  const allCategories = useAppSelector(actualCategories);
  const categoryOfThisSticky = allCategories.categories.find(
    (category: ICategory) => category.name === sticky.category
  );

  const bgColor = categoryOfThisSticky?.color || defaultStickyColor;

  const description =
    sticky.description && !opened && sticky.description.length > 50
      ? sticky.description.slice(0, 40) + "..."
      : sticky.description;
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
      <p>{description}</p>
      {sticky.category && <p>{sticky.category}</p>}
      <button onClick={() => f.deleteSticky(sticky.id)}>Delete</button>
    </StickyStyled>
  );
};

export default Sticky;
