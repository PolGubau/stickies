import { FiMaximize2, FiMinimize2 } from "react-icons/fi";
import { MdDelete, MdDone, MdOutlineCreateNewFolder } from "react-icons/md";
import { IoMdSend, IoMdSettings } from "react-icons/io";
import { FaList } from "react-icons/fa";
import { BiLockAlt, BiLockOpenAlt } from "react-icons/bi";
import { BsFillGridFill } from "react-icons/bs";

import styled from "styled-components";
import { colors } from "src/styles/theme";
interface ActionButtonStyledProps {
  disabled?: boolean;
  color: any;
}

export const ExpandButtonStyled = styled.button<ActionButtonStyledProps>`
  background-color: ${(props) =>
    props.disabled ? props.color.normal : props.color.dark};
  color: ${(props) =>
    props.disabled ? colors.gray.dark : colors.white.normal};
  border-radius: 20px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 20px;
  :hover {
    /* transform scale unless its disabled */
    transform: ${(props) => (props.disabled ? "none" : "scale(0.95)")};

    background-color: ${(props) =>
      props.disabled ? colors.gray.normal : colors.black.dark};
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  }
`;
export type iconNameType =
  | "lock"
  | "unlock"
  | "delete"
  | "expand"
  | "minimize"
  | "settings"
  | "list"
  | "done"
  | "grid"
  | "newCategory"
  | "send";
const ActionButton = ({
  iconName = "expand",
  disabled = false,
  type = "button",
  color = colors.gray,
}: {
  iconName?: iconNameType;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  color?: { light: string; normal: string; dark: string };
}) => {
  return (
    <ExpandButtonStyled disabled={disabled} type={type} color={color}>
      {iconName === "lock" && <BiLockAlt />}
      {iconName === "unlock" && <BiLockOpenAlt />}
      {iconName === "delete" && <MdDelete />}
      {iconName === "expand" && <FiMaximize2 />}
      {iconName === "minimize" && <FiMinimize2 />}
      {iconName === "settings" && <IoMdSettings />}
      {iconName === "list" && <FaList />}
      {iconName === "done" && <MdDone />}
      {iconName === "grid" && <BsFillGridFill />}
      {iconName === "send" && <IoMdSend />}
      {iconName === "newCategory" && <MdOutlineCreateNewFolder />}
    </ExpandButtonStyled>
  );
};

export default ActionButton;
