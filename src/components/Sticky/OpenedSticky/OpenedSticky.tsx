import React from "react";
import Wrapper from "src/components/Wrapper/Wrapper";
import { ISticky } from "src/Interfaces";
import useStickyFunctions from "../utils/useStickyFunctions";
import { OpenedStickyStyled } from "./OpenedStickiesStyled";

function OpenedSticky({ sticky, color }: { sticky: ISticky; color: string }) {
  const fs = useStickyFunctions();

  return (
    <>
      <OpenedStickyStyled bgColor={color}>
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
