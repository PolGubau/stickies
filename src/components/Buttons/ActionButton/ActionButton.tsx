import { FiMaximize2, FiMinimize2 } from "react-icons/fi";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import styled from "styled-components";
export const ExpandButtonStyled = styled.button`
  background-color: var(--dark-grey);
  color: var(--light-grey);
  border: 1px solid var(--orange-dark);
  border-radius: 20px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 20px;
`;
const ActionButton = ({ iconName = "default", text = "" }) => {
  return (
    <ExpandButtonStyled>
      {iconName === "expand" && <FiMaximize2 />}
      {iconName === "minimize" && <FiMinimize2 />}
      {iconName === "settings" && <IoMdSettings />}
      {iconName === "newCategory" && <MdOutlineCreateNewFolder />}
    </ExpandButtonStyled>
  );
};

export default ActionButton;
