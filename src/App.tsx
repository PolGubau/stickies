import "src/App.css";
import Header from "src/components/Header/Header";
import StickiesList from "src/components/StickiesList/StickiesList";
import { useKeyPress } from "./hooks/useKeyPress";
import OptionsAside from "./components/Footer/OptionsAside/OptionsAside";
import Settings from "./components/PopUps/Settings/Settings";
import { useAppSelector } from "./redux/app/hooks";
import { popupsState } from "./redux/features/popupSlice";
import ButtonsLeft from "./components/Footer/ButtonsLeft/ButtonsLeft";
import NewCategory from "./components/PopUps/NewCategory/NewCategory";

const App = () => {
  useKeyPress(["C", "N"], () => {});
  const popups = useAppSelector(popupsState);

  return (
    <>
      {/* {Popups} */}
      {popups.settings.opened && <Settings />}
      {popups.newCategory.opened && <NewCategory />}

      {/* Layout */}
      <main className="main">
        <Header />
        <section className="stickiesList">
          <StickiesList />
        </section>
        <section className="footerSection">
          <ButtonsLeft />

          <OptionsAside />
        </section>
      </main>
    </>
  );
};

export default App;
