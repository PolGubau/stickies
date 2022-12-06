import { FiMaximize2, FiMinimize2 } from "react-icons/fi";
import { MdDelete, MdOutlineCreateNewFolder } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaList } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";

import styled from "styled-components";
import { colors } from "src/styles/theme";
export const ExpandButtonStyled = styled.button`
  background-color: ${colors.gray.dark};
  color: ${colors.gray.light};
  border-radius: 20px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 20px;
  :hover {
    transform: scale(0.95);
    background-color: ${colors.black.dark};
    cursor: pointer;
  }
`;
const ActionButton = ({ iconName = "default" }) => {
  return (
    <ExpandButtonStyled>
      {iconName === "delete" && <MdDelete />}
      {iconName === "expand" && <FiMaximize2 />}
      {iconName === "minimize" && <FiMinimize2 />}
      {iconName === "settings" && <IoMdSettings />}
      {iconName === "list" && <FaList />}
      {iconName === "grid" && <BsFillGridFill />}
      {iconName === "newCategory" && <MdOutlineCreateNewFolder />}
    </ExpandButtonStyled>
  );
};

export default ActionButton;
