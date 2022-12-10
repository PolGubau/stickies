import { MouseEvent } from "react";
import { Link } from "react-router-dom";
import ActionButton from "src/components/Buttons/ActionButton/ActionButton";
import { StickiesLayoutType } from "src/constants/startingSettingsTypes";
import { ISticky } from "src/Interfaces";
import { useAppSelector } from "src/redux/app/hooks";
import { actualSettings } from "src/redux/features/settingsSlice";
import useStickyFunctions from "../utils/useStickyFunctions";
import {
  ClosedGridStickyStyled,
  ClosedListStyled,
} from "./ClosedStickiesStyled";

const BasicSticky = ({ sticky }: { sticky: ISticky }) => {
  const fs = useStickyFunctions();
  const toggleCompleted = (
    id: string,
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    fs.toggleCompleteSticky(id);
  };
  return (
    <Link className="stickyContent" to={`/sticky/${sticky.id}`}>
      <div className="stickyTexts">
        <h2 className="sticky">{sticky.title}</h2>

        {sticky.description && <p>{fs.shortDescription(sticky.description)}</p>}
      </div>
      <div className="stickyButtons">
        <div onClick={(e) => toggleCompleted(sticky.id, e)}>
          <ActionButton iconName="done" />
        </div>
        <div onClick={() => fs.deleteSticky(sticky.id)}>
          <ActionButton iconName="delete" />
        </div>
      </div>
    </Link>
  );
};

const ClosedSticky = ({
  sticky,
  color,
}: {
  sticky: ISticky;
  color: string;
}) => {
  const { settings } = useAppSelector(actualSettings);
  //
  const stickiesLayout: StickiesLayoutType =
    settings.stickiesLayout.settingValue || "grid";

  //

  return stickiesLayout === "list" ? (
    <ClosedListStyled bgColor={color} done={sticky.completed}>
      <BasicSticky sticky={sticky} />
    </ClosedListStyled>
  ) : (
    <ClosedGridStickyStyled bgColor={color} done={sticky.completed}>
      <BasicSticky sticky={sticky} />
    </ClosedGridStickyStyled>
  );
};

export default ClosedSticky;
