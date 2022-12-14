import React from "react";
import OhMyFood from "../assets/portfolio/ohmyfood.png";
import Groupomania from "../assets/portfolio/groupomania.png";
import TodoList from "../assets/portfolio/todolist.webp";
import Kanap from "../assets/portfolio/kanap.png";
import Netflix from "../assets/portfolio/netflix.webp";

const Portfolio = () => {
  return (
    <div
      name="Portfolio"
      className="h-full w-full bg-gradient-to-b from-black via-black to-gray-800 pt-6 md:pt-28 lg:pt-0"
    >
      <div className="text-white max-w-screen-lg mx-auto flex flex-col gap-12 pt-28 pb-16 px-8">
        <h2 className="font-bold text-4xl sm:text-6xl border-solid border-gray-500 border-b-4 w-40 pb-2 sm:w-64">
          Portfolio
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="shadow-lg shadow-gray-500 rounded-2xl">
            <div>
              <img
                className="rounded-t-xl h-40 w-full object-cover"
                src={Netflix}
                alt="folio-pic"
              />
            </div>

            <div className="flex flex-row justify-center items-center py-2 gap-20 lg:gap-32 text-2xl bg-gray-700 rounded-b-xl">
              <a
                href="https://sirflix.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <p className="cursor-pointer hover:scale-110 duration-200">
                  Demo
                </p>
              </a>
              <a
                href="https://github.com/SirinAKTAS/netflix-clone"
                target="_blank"
                rel="noreferrer"
              >
                <p className="cursor-pointer hover:scale-110 duration-200">
                  Code
                </p>
              </a>
            </div>
          </div>
          <p className="flex flex-col justify-center items-center pb-4 rounded-b-lg">
            Clone visuel de netflix en utilisant l'api -The Movie Database-,
            utilisation de javascript et de reactJs avec du css simple.
            J'ajouterais des fonctionnalit??s au fur et ?? mesures, comme par
            exemple avoir la possibilit?? de naviguer dans les films.
          </p>

          <div className="shadow-lg shadow-gray-500 rounded-2xl">
            <div>
              <img
                className="rounded-t-xl h-40 w-full object-cover"
                src={OhMyFood}
                alt="folio-pic"
              />
            </div>

            <div className="flex flex-row justify-center items-center py-2 gap-20 lg:gap-32 text-2xl bg-gray-700 rounded-b-xl">
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
          <p className="flex flex-col justify-center items-center pb-4 rounded-b-lg">
            Transformation d'une maquette en HTML/CSS avec Sass pour le
            restaurant ohMyFood.
          </p>

          <div className="shadow-lg shadow-gray-500 rounded-2xl">
            <div>
              <img
                className="rounded-t-xl h-40 w-full"
                src={Groupomania}
                alt="folio-pic"
              />
            </div>

            <div className="flex flex-row justify-center items-center py-2 text-2xl bg-gray-700 rounded-b-xl">
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
          <p className="flex flex-col justify-center items-center rounded-b-lg px-2">
            R??seau social from scratch avec du front (React, Tailwind) et du
            back(nodeJs, express et mongodb) pour la soci??t?? Groupomania. Le
            projet consiste ?? construire un r??seau social interne pour les
            employ??s de Groupomania. Le but de cet outil est de faciliter les
            interactions entre coll??gues. Sachant que c'est une version MVP on
            peut pour le moment publier un post (texte avec ou sans images ou
            images avec ou sans text) et liker les autres posts
          </p>

          <div className="shadow-lg shadow-gray-500 rounded-2xl">
            <div>
              <img
                className="rounded-t-xl h-40 w-full object-cover"
                src={TodoList}
                alt="folio-pic"
              />
            </div>

            <div className="flex flex-row justify-center items-center py-2 gap-20 lg:gap-32 text-2xl bg-gray-700 rounded-b-xl">
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
          <p className="flex flex-col justify-center items-center rounded-b-lg px-2">
            TodoList basique avec du javascript, utilisation du localStorage
            pour stocker les donn??es en local. Le visuel n'a pas encore ??t??
            faite
          </p>

          <div className="shadow-lg shadow-gray-500 rounded-2xl">
            <div>
              <img
                className="rounded-t-xl h-40 w-full object-cover"
                src={Kanap}
                alt="folio-pic"
              />
            </div>

            <div className="flex flex-row justify-center items-center py-4 text-2xl bg-gray-700 rounded-b-xl">
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
          <p className="flex flex-col justify-center items-center rounded-b-lg px-2">
            Kanap proposent la vente de canap??s. J'ai d?? r??alis?? l'affichage
            dynamique des produits sur les diff??rentes pages depuis l'API. Ajout
            des produits dans le localStorage puis on r??cup??re les produits du
            localStorage pour les afficher sur la page panier. Sur la page
            panier on peut modifier la quantit?? ainsi que supprimer un article,
            la quantit?? et le prix est calcul?? automatiquement gr??ce ?? des
            fonctions en javascript.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
