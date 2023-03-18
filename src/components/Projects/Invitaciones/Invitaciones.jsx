import React from "react";
import Project from "../ProjectStructure.jsx/Project";

const arrayImge = [
  "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679179173/Projects/Invitaciones/Inv_01.jpg_kuort9.png",
  "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679179172/Projects/Invitaciones/Inv_02.jpg_hm2bd4.png",
  "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679179171/Projects/Invitaciones/Inv_03.jpg_cd9rvi.png",
  "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679179169/Projects/Invitaciones/Inv_04.jpg_kiivla.png",
  "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679179169/Projects/Invitaciones/Inv_05.jpg_mnbhhz.png",
];

const descriptionEn =
  "I designed a digital invitation system for social events, facilitating communication between the organizer and the participants. I used React as the main technology and deployed it on Vercel.";

const descriptionEs =
  "Diseñé un sistema de invitaciones digitales para eventos sociales, facilitando la comunicación entre el organizador y los participantes. Utilicé como tecnología principal React y el despliegue lo hice en Vercel. ";

const link = "https://www.youtube.com/embed/NzYZQ0nL1Hw";

const Invitaciones = () => {
  return (
    <Project
      title={"Invitaciones Digitales"}
      arrayImg={arrayImge}
      descriptionEn={descriptionEn}
      descriptionEs={descriptionEs}
      link={link}
    />
  );
};

export default Invitaciones;
