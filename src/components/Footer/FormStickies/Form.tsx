import React, { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "src/redux/app/hooks";
import { actualCategories } from "src/redux/features/categoriesSlice";
import { addStickysActioncreator } from "src/redux/features/stickiesSlice";
import { popupsState } from "src/redux/features/popupSlice";
import useFormFunctions from "./utils/useFormFunctions";
import { CheckBoxButton, FormStyled } from "./FormStyled";
import ActionButton from "src/components/Buttons/ActionButton/ActionButton";
import { BsFillLockFill, BsFillUnlockFill } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";

const Form = () => {
  const f = useFormFunctions();
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector(actualCategories);
  //
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const [isStickyPrivate, setIsStickyPrivate] = useState(false);
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
      private: isStickyPrivate,
    };
    dispatch(addStickysActioncreator(newSticky));
    //empty the inputs
    titleRef.current!.value = "";
    descriptionRef.current!.value = "";
    categoryRef.current!.value = "";
  };
  const toggleIsVisible = () => {
    setIsStickyPrivate(!isStickyPrivate);
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
          placeholder="??Como se llama este sticky?"
        />
        <textarea
          name="description"
          ref={descriptionRef}
          placeholder="Escribe una bonita descripci??n"
        />
        <div className="categorySelectorContainer">
          <i className="iconSelect">
            <RiArrowDropDownLine />
          </i>
          <select className="categorySelector" ref={categoryRef}>
            <option hidden={true} value="">
              Ponle una categor??a
            </option>
            <option value={""}>Sin categor??a</option>
            {categories.map((category: any) => (
              <option value={category.name} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <CheckBoxButton clicked={isStickyPrivate} onClick={toggleIsVisible}>
          <p>??Quieres que sea privado?</p>
          {isStickyPrivate ? <BsFillLockFill /> : <BsFillUnlockFill />}
        </CheckBoxButton>
        <div className="buttonsContainer">
          <div className="minimizeButton formShape" onClick={f.handleMinimize}>
            <ActionButton iconName="minimize" />
          </div>

          <button type="submit" className="submitButton">
            Crear sticky
            <BiPlus size={20} />
          </button>
        </div>
      </FormStyled>
    </>
  );
};

export default Form;
