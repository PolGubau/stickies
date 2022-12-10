import Header from "src/components/Header/Header";
import StickiesList from "src/components/StickiesList/StickiesList";
import { useKeyPress } from "./hooks/useKeyPress";
import ButtonsRight from "./components/Footer/ButtonsRight/ButtonsRight";
import Settings from "./components/PopUps/Settings/Settings";
import { useAppSelector } from "./redux/app/hooks";
import { popupsState } from "./redux/features/popupSlice";
import ButtonsLeft from "src/components/Footer/ButtonsLeft/ButtonsLeft";
import NewCategory from "src/components/PopUps/NewCategory/NewCategory";
import PrivateLoginPopUp from "src/components/PopUps/PrivateLogin/PrivateLoginPopUp";
import { AppStyled } from "./styles/AppStyled";

const App = () => {
  useKeyPress(["C", "N"], () => {});
  const popups = useAppSelector(popupsState);

  return (
    <>
      {/* {Popups} */}
      {popups.settings.opened && <Settings />}
      {popups.newCategory.opened && <NewCategory />}
      {popups.privateLogin.opened && <PrivateLoginPopUp />}

      {/* Layout */}
      <AppStyled>
        <Header />
        <section className="stickiesList">
          <StickiesList />
        </section>
        <section className="footerSection">
          <ButtonsLeft />
          <ButtonsRight />
        </section>
      </AppStyled>
    </>
  );
};

export default App;
