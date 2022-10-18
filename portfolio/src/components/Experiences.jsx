import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import SASS from "../assets/sass.png";
import JAVASCRIPT from "../assets/javascript.png";
import REACT from "../assets/react.png";
import TAILWIND from "../assets/tailwind.png";
import NODE from "../assets/node.png";
import GITHUB from "../assets/github.png";

const Experiences = () => {
  const Exp = [
    {
      id: 1,
      src: HTML,
      name: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: CSS,
      name: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: SASS,
      name: "SASS",
      style: "shadow-pink-500",
    },
    {
      id: 4,
      src: JAVASCRIPT,
      name: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: REACT,
      name: "REACT",
      style: "shadow-cyan-500",
    },
    {
      id: 6,
      src: TAILWIND,
      name: "TAILWIND",
      style: "shadow-teal-500",
    },
    {
      id: 7,
      src: NODE,
      name: "NODE",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: GITHUB,
      name: "GITHUB",
      style: "shadow-white",
    },
  ];

  return (
    <div
      name="Expériences"
      className="h-full w-full bg-gradient-to-b from-gray-800 via-gray-800 to-black py-8 md:pt-28 lg:pt-0"
    >
      <div className="text-white max-w-screen-lg mx-auto flex flex-col gap-12 pt-28 pb-16 px-8">
        <h2 className="font-bold text-4xl sm:text-6xl border-solid border-gray-500 border-b-4 w-56 pb-2 sm:w-96">
          Experiences
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {Exp.map(({ id, src, name, style }) => (
            <div
              key={id}
              className={`shadow-md rounded-lg flex flex-col gap-4 pt-2 items-center cursor-pointer hover:scale-105 duration-300 ${style}`}
            >
              <div>
                <img src={src} alt="html-logo" className="h-24" />
              </div>
              <div>{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
