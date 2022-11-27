import { ISticky } from "src/Interfaces";
import "./StickyStyles.css";
import { useAppDispatch } from "src/redux/app/hooks";
import { removeStickysActioncreator } from "src/redux/features/stickiesSlice";
const Sticky = ({ sticky }: { sticky: ISticky }) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    console.log("delete sticky");
    dispatch(removeStickysActioncreator(sticky.id));
  };

  return (
    <div className="StickyContainer">
      <h2 className="sticky">{sticky.title}</h2>
      <p>{sticky.description}</p>
      {sticky.category && <p>{sticky.category}</p>}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Sticky;
