import React from "react";
import OhMyFood from "../assets/portfolio/ohmyfood.png";
import Groupomania from "../assets/portfolio/groupomania.png";
import TodoList from "../assets/portfolio/todolist.webp";
import Kanap from "../assets/portfolio/kanap.png";

const Portfolio = () => {
  return (
    <div
      name="Portfolio"
      className="h-full w-full bg-gradient-to-b from-black via-black to-gray-800 py-12"
    >
      <div className="text-white max-w-screen-lg mx-auto flex flex-col gap-12 pt-28 pb-16 px-8">
        <h2 className="font-bold text-4xl sm:text-6xl border-solid border-gray-500 border-b-4 w-40 pb-2 sm:w-64">
          Portfolio
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="border-4 border-cyan-500 border-b-blue-500 rounded-2xl">
            <div>
              <img
                className="rounded-t-xl h-40 w-full object-cover"
                src={OhMyFood}
                alt="folio-pic"
              />
            </div>

            <div className="flex flex-row justify-center items-center py-4 gap-32 text-2xl bg-gray-700 rounded-b-xl">
              <a
                href="https://sirinaktas.github.io/OhMyFood/"
                target="_blank"
                rel="noreferrer"
              >
                <p className="cursor-pointer hover:scale-110 duration-200">
                  Demo
                </p>
              </a>
              <a
                href="https://github.com/SirinAKTAS/OhMyFood"
                target="_blank"
                rel="noreferrer"
              >
                <p className="cursor-pointer hover:scale-110 duration-200">
                  Code
                </p>
              </a>
            </div>
          </div>

          <div className="border-4 border-cyan-500 border-b-blue-500 rounded-2xl">
            <div>
              <img
                className="rounded-t-xl h-40 w-full"
                src={Groupomania}
                alt="folio-pic"
              />
            </div>

            <div className="flex flex-row justify-center items-center py-4 gap-32 text-2xl bg-gray-700 rounded-b-xl">
              <a
                href="https://github.com/SirinAKTAS/p7_groupomania"
                target="_blank"
                rel="noreferrer"
              >
                <p className="cursor-pointer hover:scale-110 duration-200">
                  Code
                </p>
              </a>
            </div>
          </div>

          <div className="border-4 border-cyan-500 border-b-blue-500 rounded-2xl">
            <div>
              <img
                className="rounded-t-xl h-40 w-full object-cover"
                src={TodoList}
                alt="folio-pic"
              />
            </div>

            <div className="flex flex-row justify-center items-center py-4 gap-32 text-2xl bg-gray-700 rounded-b-xl">
              <a
                href="https://sirinaktas.github.io/todo_list/"
                target="_blank"
                rel="noreferrer"
              >
                <p className="cursor-pointer hover:scale-110 duration-200">
                  Demo
                </p>
              </a>
              <a
                href="https://github.com/SirinAKTAS/todo_list"
                target="_blank"
                rel="noreferrer"
              >
                <p className="cursor-pointer hover:scale-110 duration-200">
                  Code
                </p>
              </a>
            </div>
          </div>

          <div className="border-4 border-cyan-500 border-b-blue-500 rounded-2xl">
            <div>
              <img
                className="rounded-t-xl h-40 w-full object-cover"
                src={Kanap}
                alt="folio-pic"
              />
            </div>

            <div className="flex flex-row justify-center items-center py-4 gap-32 text-2xl bg-gray-700 rounded-b-xl">
              <a
                href="https://github.com/SirinAKTAS/p5_kanap"
                target="_blank"
                rel="noreferrer"
              >
                <p className="cursor-pointer hover:scale-110 duration-200">
                  Code
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
