import { ISticky } from "src/Interfaces";
import ClosedSticky from "./ClosedSticky/ClosedSticky";
import OpenedSticky from "./OpenedSticky/OpenedSticky";

//
const Sticky = ({ sticky, opened }: { sticky: ISticky; opened: boolean }) => {
  return (
    <>
      {!opened && <ClosedSticky sticky={sticky} />}
      {opened && <OpenedSticky sticky={sticky} />}
    </>
  );
};

export default Sticky;
