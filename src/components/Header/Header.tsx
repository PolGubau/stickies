import Categories from "./Categories/Categories";
import "./HeaderStyled.css";
const Header = () => {
  return (
    <section className="containerHeader">
      <h1 className="title">Stickies</h1>
      <Categories />
    </section>
  );
};

export default Header;
