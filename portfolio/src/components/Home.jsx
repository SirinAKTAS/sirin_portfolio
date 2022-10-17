import React from "react";
import SirinImg from "../assets/SirinImg.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {

  return (
    <div
      name="Acceuil"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 py-8"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 md:flex-row">
        <div className="flex flex-col justify-center h-full px-4">
          <h2 className="text-4xl sm:text-7xl text-white font-bold pt-8">
            Je suis Développeur Front-end
          </h2>
          <p className="text-gray-600 py-4 text-xl max-w-lg">
            Diplomé d'un titre RNCP de niveau 5 (back +2), je suis à la
            recherche d'une première expérience pro, CDI CDD STAGE. Hâte de
            faire équipe avec vous !
          </p>

          <div>
            <button className="group text-white flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 w-fit rounded-2xl">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </button>
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
