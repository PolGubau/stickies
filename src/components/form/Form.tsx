import React, { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "src/redux/app/hooks";
import { actualCategories } from "src/redux/features/categoriesSlice";
import { addStickysActioncreator } from "src/redux/features/stickiesSlice";
import "./FormStyles.css";

const Form = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector(actualCategories);
  //
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const [minimized, setMinimized] = useState<boolean>(false);
  //
  const addNewSticky = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newSticky = {
      id: Math.random(),
      title: titleRef.current?.value,
      description: descriptionRef.current?.value,
      category: categoryRef.current?.value,

      createdAt: new Date().toISOString(),
    };
    dispatch(addStickysActioncreator(newSticky));
    //empty the inputs
    titleRef.current!.value = "";
    descriptionRef.current!.value = "";
    categoryRef.current!.value = "";
  };
  const handleMinimize = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMinimized(!minimized);
  };

  return minimized ? (
    <button
      className="expandButton formShape"
      onClick={(e) => handleMinimize(e)}
    >
      +
    </button>
  ) : (
    <>
      <form onSubmit={(e) => addNewSticky(e)} className="form">
        <button className="minimizeButton formShape" onClick={handleMinimize}>
          -
        </button>
        <input
          ref={titleRef}
          type="text"
          name="title"
          required
          placeholder="¿Como se llama este sticky?"
        />
        <textarea
          name="description"
          ref={descriptionRef}
          placeholder="Ponle una bonita descripción"
        />
        <select className="categorySelector" ref={categoryRef}>
          <option hidden={true} value="">
            Ponle una categoría
          </option>
          <option value={""}>Sin categoría</option>
          {categories.map((category: any) => (
            <option value={category.name} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <button type="submit" className="submitButton">
          Crear sticky
        </button>
      </form>
    </>
  );
};

export default Form;
