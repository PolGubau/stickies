import Categories from "./Categories/Categories";
import { HeaderStyled } from "./HeaderStyled";
const Header = () => {
  return (
    <HeaderStyled>
      <h1 className="title">Stickies</h1>
      <Categories />
    </HeaderStyled>
  );
};

export default Header;
