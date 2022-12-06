import React from "react";
import useCategoriesFunctions from "src/components/Header/Categories/utils/useCategoriesFunctions";
import { StickiesLayoutType } from "src/constants/startingSettingsTypes";
import { ISticky } from "src/Interfaces";
import { useAppSelector } from "src/redux/app/hooks";
import { actualsettings } from "src/redux/features/settingsSlice";
import { defaultStickyColor } from "src/styles/theme";
import useStickyFunctions from "../utils/useStickyFunctions";
import { ClosedStickyStyled } from "./ClosedStickiesStyled";

const ClosedSticky = ({ sticky }: { sticky: ISticky }) => {
  const fs = useStickyFunctions();
  const fc = useCategoriesFunctions();
  const { settings } = useAppSelector(actualsettings);

  const stickiesLayout: StickiesLayoutType =
    settings.stickiesLayout.settingValue;

  const stickyColor = sticky.category
    ? fc.categoryOfThisSticky(sticky.category).color ?? defaultStickyColor
    : defaultStickyColor;
  return (
    <>
      <ClosedStickyStyled
        bgColor={stickyColor}
        onClick={() => fs.openSticky(sticky.id)}
        layout={stickiesLayout}
      >
        <div className="stickyHeader">
          <h2 className="sticky">{sticky.title}</h2>
        </div>
        {sticky.description && <p>{fs.shortDescription(sticky.description)}</p>}
        {sticky.category && <p>{sticky.category}</p>}
        <button onClick={() => fs.deleteSticky(sticky.id)}>Delete</button>
      </ClosedStickyStyled>
    </>
  );
};

export default ClosedSticky;
