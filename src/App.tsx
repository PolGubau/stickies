import "src/App.css";
import Form from "./components/form/Form";
import Header from "src/components/Header/Header";
import StickiesList from "src/components/StickiesList/StickiesList";

const Hero = () => {
  return (
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
};

export default Hero;
