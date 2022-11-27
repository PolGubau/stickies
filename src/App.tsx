import Form from "src/components/form/Form";
import StickiesList from "src/components/StickiesList/StickiesList";
import "src/App.css";
import Header from "./components/Header/Header";

const App = () => (
  <>
    <main className="main">
      <Header />
      <section className="stickiesList">
        <StickiesList />
      </section>
      <section className="formSection">
        <Form />
      </section>
    </main>
  </>
);

export default App;
