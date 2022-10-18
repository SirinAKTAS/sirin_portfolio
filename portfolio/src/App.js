import About from "./components/About";
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
    </div>
  );
}

export default App;
