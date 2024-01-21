import Project1 from "./components/Projects/Project1";
import Project2 from "./components/Projects/Project2";
import Project3 from "./components/Projects/Project3";
import Services from "./components/Services/Services";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>
        <Project1 />
      </section>
      <section>
        <Project2 />
      </section>
      <section>
        <Project3 />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
