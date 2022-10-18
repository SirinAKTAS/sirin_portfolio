import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <SocialLinks />
      <Home />
      <About />
      <Portfolio />
      <Experiences />
      <Contact />
    </div>
  );
}

export default App;
