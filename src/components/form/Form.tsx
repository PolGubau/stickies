import React, { useRef } from "react";
import { useAppDispatch, useAppSelector } from "src/redux/app/hooks";
import { actualCategories } from "src/redux/features/categoriesSlice";
import { addStickysActioncreator } from "src/redux/features/stickiesSlice";
import "./FormStyles.css";
import { FiMaximize2, FiMinimize2 } from "react-icons/fi";
import { formOptions } from "src/redux/features/formSlice";
import useFormFunctions from "./utils/useFormFunctions";

const Form = () => {
  const f = useFormFunctions();
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector(actualCategories);
  //
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);

  const { opened } = useAppSelector(formOptions);
  //
  const addNewSticky = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newSticky = {
      title: titleRef.current?.value,
      description: descriptionRef.current?.value,
      category: categoryRef.current?.value,
    };
    dispatch(addStickysActioncreator(newSticky));
    //empty the inputs
    titleRef.current!.value = "";
    descriptionRef.current!.value = "";
    categoryRef.current!.value = "";
  };

  return !opened ? (
    <button
      className="expandButton formShape downFixed"
      onClick={f.handleMinimize}
    >
      <FiMaximize2 />
    </button>
  ) : (
    <>
      <form onSubmit={(e) => addNewSticky(e)} className="form">
        <h2 className="formTitle">Crea un Sticky</h2>
        <input
          ref={titleRef}
          type="text"
          name="title"
          autoFocus
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
        <div className="buttonsContainer">
          <button
            className="minimizeButton formShape"
            onClick={f.handleMinimize}
          >
            <FiMinimize2 />
          </button>
          <button type="submit" className="submitButton">
            Crear sticky
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
