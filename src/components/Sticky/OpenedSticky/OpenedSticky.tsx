import React from "react";
import useCategoriesFunctions from "src/components/Header/Categories/utils/useCategoriesFunctions";
import Wrapper from "src/components/Wrapper/Wrapper";
import { ISticky } from "src/Interfaces";
import { defaultStickyColor } from "src/styles/theme";
import useStickyFunctions from "../utils/useStickyFunctions";
import { OpenedStickyStyled } from "./OpenedStickiesStyled";

function OpenedSticky({ sticky }: { sticky: ISticky }) {
  const fs = useStickyFunctions();
  const fc = useCategoriesFunctions();
  const stickyColor = sticky.category
    ? fc.categoryOfThisSticky(sticky.category).color ?? defaultStickyColor
    : defaultStickyColor;
  return (
    <>
      <OpenedStickyStyled bgColor={stickyColor}>
        <div className="stickyHeader">
          <h2 className="sticky">{sticky.title}</h2>
          <button onClick={fs.closeSticky}>X</button>
        </div>
        <p>{sticky.description}</p>
        {sticky.category && <p>{sticky.category}</p>}
        <button onClick={() => fs.deleteSticky(sticky.id)}>Delete</button>
      </OpenedStickyStyled>
      <Wrapper />
    </>
  );
}

export default OpenedSticky;
