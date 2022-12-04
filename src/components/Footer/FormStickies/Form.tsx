import React, { useRef } from "react";
import { useAppDispatch, useAppSelector } from "src/redux/app/hooks";
import { actualCategories } from "src/redux/features/categoriesSlice";
import { addStickysActioncreator } from "src/redux/features/stickiesSlice";
import { popupsState } from "src/redux/features/popupSlice";
import useFormFunctions from "./utils/useFormFunctions";
import { FormStyled } from "./FormStyled";
import ActionButton from "src/components/Buttons/ActionButton/ActionButton";

const Form = () => {
  const f = useFormFunctions();
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector(actualCategories);
  //
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);

  const {
    newSticky: { opened },
  } = useAppSelector(popupsState);
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
    <div className="downFixed" onClick={f.handleMinimize}>
      <ActionButton iconName="expand" />
    </div>
  ) : (
    <>
      <FormStyled onSubmit={(e) => addNewSticky(e)}>
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
          <div className="minimizeButton formShape" onClick={f.handleMinimize}>
            <ActionButton iconName="minimize" />
          </div>

          <button type="submit" className="submitButton">
            Crear sticky
          </button>
        </div>
      </FormStyled>
    </>
  );
};

export default Form;
