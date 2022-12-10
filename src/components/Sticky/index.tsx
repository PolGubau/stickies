import { ISticky } from "src/Interfaces";
import { defaultStickyColor } from "src/styles/theme";
import useCategoriesFunctions from "../Header/Categories/utils/useCategoriesFunctions";
import ClosedSticky from "./ClosedSticky/ClosedSticky";
import OpenedSticky from "./OpenedSticky/OpenedSticky";

//
const Sticky = ({ sticky, opened }: { sticky: ISticky; opened: boolean }) => {
  const fc = useCategoriesFunctions();

  const color = sticky.category
    ? fc.categoryOfThisSticky(sticky.category).color ?? defaultStickyColor
    : defaultStickyColor;
  return (
    <>
      {!opened && <ClosedSticky sticky={sticky} color={color} />}
      {opened && <OpenedSticky sticky={sticky} color={color} />}
    </>
  );
};

export default Sticky;
