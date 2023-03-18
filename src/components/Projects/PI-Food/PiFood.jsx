import React from "react";
import Project from "../ProjectStructure.jsx/Project";

const arrayImge = [
  "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679111118/Projects/PI-FOOD-APP/PI-06_lpobty.png",
  "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679100433/Projects/PI-FOOD-APP/PI-04_aveci9.png",
  "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679100340/Projects/PI-FOOD-APP/PI-02_lwhwn0.png",
  "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679100339/Projects/PI-FOOD-APP/PI-03_nwwup3.png",
  "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679099720/Projects/PI-FOOD-APP/PI-01_vcp7mv.png",
  "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679111115/Projects/PI-FOOD-APP/PI-07_omi0cz.png",
  "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679111113/Projects/PI-FOOD-APP/PI-05_paphaf.png",
];

const descriptionEn =
  "I built this Web-App using React, Redux, Node, Sequelize, and Postgresql. To create it, I had to consume the Spoonacular API. I deployed the Frontend on Vercel and the Backend on Railway. The page allows you to search for recipes and apply filters with different parameters such as diet types, ratings, etc. Additionally, you can add new recipes by filling out a form.";

const descriptionEs =
  "Construí esta Web-App utlizando React, Redux, Node, Sequelize y Postgresql. Para realizarla tuve que consumir la API de Spoonacular. El despliegue del Frontend lo hice en Vercel y el del Backend en Railway. La página permite hacer una busqueda de recetas de comida y aplicar filtros con diferentes parámetros como tipos de dieta, calificación, etc. Además, se pueden agregar nuevas recetas de comida llenando un formulario.";

const link = "https://www.youtube.com/embed/qWa6DmUDcEY";

const PiFood = () => {
  return (
    <Project
      title={"PI-Food"}
      arrayImg={arrayImge}
      descriptionEn={descriptionEn}
      descriptionEs={descriptionEs}
      link={link}
    />
  );
};

export default PiFood;
