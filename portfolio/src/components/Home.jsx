import React from "react";
import SirinImg from "../assets/SirinImg.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {

  return (
    <div
      name="Accueil"
      className="h-full w-full bg-gradient-to-b from-black via-black to-gray-800 pt-16 md:pt-80 lg:pt-52  "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center gap-6 h-full px-6 md:flex-row">
        <div className="flex flex-col justify-center h-full px-4">
          <h2 className="text-4xl sm:text-6xl text-white font-bold pt-8">
            Je suis Développeur,
            
          </h2>
          <span className="text-red-500 font-bold text-4xl md:text-5xl">
              <Typewriter
                words={['JavaScript', 'React', 'Tailwind']}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          <p className="text-gray-400 py-4 text-xl max-w-lg">
            Diplomé d'un titre RNCP de niveau 5 (bac +2), je suis à la
            recherche d'une première expérience pro, CDI CDD STAGE. Hâte de
            faire équipe avec vous !
          </p>

          <div>
            <Link to="Portfolio" smooth duration={500} className="group text-white flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 w-fit rounded-2xl hover:cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div>
            <img
              className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mx-auto w-96 md:w-full h-96 md:h-full "
              src={SirinImg}
              alt="sirin-pic"
            />
          </div>
      </div>
    </div>
  );
};

export default Home;
