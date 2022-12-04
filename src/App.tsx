import "src/App.css";
import FormStickies from "./components/Footer/FormStickies/Form";
import Header from "src/components/Header/Header";
import StickiesList from "src/components/StickiesList/StickiesList";
import { useKeyPress } from "./hooks/useKeyPress";
import OptionsAside from "./components/Footer/OptionsAside/OptionsAside";
import ActionButton from "./components/Buttons/ActionButton/ActionButton";

const App = () => {
  useKeyPress(["C", "A"], () => {});
  return (
    <>
      <main className="main">
        <Header />
        <section className="stickiesList">
          <StickiesList />
        </section>
        <section className="footerSection">
          <div>
            <ActionButton iconName="newCategory" />
            <FormStickies />
          </div>
          <OptionsAside />
        </section>
      </main>
    </>
  );
};

export default App;
