import { ISticky } from "src/Interfaces";

import { defaultStickyColor } from "src/styles/theme";
import useCategoriesFunctions from "../Header/Categories/utils/useCategoriesFunctions";
import Wrapper from "../Wrapper/Wrapper";
import { StickyStyled } from "./StickyStyled";
import useStickyFunctions from "./utils/useStickyFunctions";

//
const Sticky = ({ sticky, opened }: { sticky: ISticky; opened: boolean }) => {
  const fs = useStickyFunctions();
  const fc = useCategoriesFunctions();
  const stickyColor = sticky.category
    ? fc.categoryOfThisSticky(sticky.category).color
    : defaultStickyColor;

  return (
    <>
      <StickyStyled
        bgColor={stickyColor}
        onClick={() => fs.openSticky(sticky.id, opened)}
        opened={opened}
      >
        <div className="stickyHeader">
          <h2 className="sticky">{sticky.title}</h2>
          {opened && <button onClick={fs.closeSticky}>X</button>}
        </div>
        <p>{fs.shortDescription(sticky.description)}</p>
        {sticky.category && <p>{sticky.category}</p>}
        <button onClick={() => fs.deleteSticky(sticky.id)}>Delete</button>
      </StickyStyled>
      {opened && <Wrapper />}
    </>
  );
};

export default Sticky;
