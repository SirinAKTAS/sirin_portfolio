import React from "react";

const About = () => {
  return (
    <div
      name="À propos"
      className="h-screen w-full bg-gradient-to-b from-gray-800 via-gray-800 to-black pt-40 md:pt-0"
    >
      <div className="text-white max-w-screen-lg mx-auto gap-24 flex flex-col justify-center h-full px-6">
        <h2 className="font-bold text-4xl sm:text-6xl border-solid border-gray-500 border-b-4 w-40 pb-2 sm:w-64">
          A propos
        </h2>
        <p className="text-xl w-full">
          Je me présente, je m’appelle Sirin Aktas, j’ai 23 ans et je vis en
          France. Actuellement, je viens de finir une formation de{" "}
          <a
            className="text-purple-500"
            href="https://openclassrooms.com/fr/paths/185-developpeur-web#path-tabs"
          >
            Développeur Web chez OpenClassrooms.
          </a>{" "}
          Par la suite de l’obtention de mon diplôme, je compte réaliser mon
          projet professionnel et personnel, c'est-à-dire qu'avec votre aide
          j'aimerais donner une grande satisfaction à nos clients, en leurs
          proposants des sites web modernes et dynamiques. Je suis disponible dès
          maintenant pour des échanges par message, en appel ou en visio par le
          biais d’un entretien pour un emploi ou un stage en Ile-de-France.
        </p>
      </div>
    </div>
  );
};

export default About;
