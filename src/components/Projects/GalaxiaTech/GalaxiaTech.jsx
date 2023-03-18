import React from "react";
import Project from "../ProjectStructure.jsx/Project";

const arrayImge = [
  "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679176093/Projects/Galaxia%20Tech/GT-01_pkvyif.png",
  "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679176090/Projects/Galaxia%20Tech/GT-02_wf8ugb.png",
  "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679176088/Projects/Galaxia%20Tech/GT-03_s7rumu.png",
  "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679176088/Projects/Galaxia%20Tech/GT-04_uisgom.png",
  "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679176089/Projects/Galaxia%20Tech/GT-05_svlfdr.png",
  "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679176090/Projects/Galaxia%20Tech/GT-06_g4h0yz.png",
  "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679176090/Projects/Galaxia%20Tech/GT-07_flvpa7.png",
  "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679176091/Projects/Galaxia%20Tech/GT-08_jmxbvd.png",
  "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679176091/Projects/Galaxia%20Tech/GT-09_tmuhny.png",
  "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679176091/Projects/Galaxia%20Tech/GT-10_da7zf4.png",
  "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679176092/Projects/Galaxia%20Tech/GT-11_rxemsc.png",
];

const descriptionEn =
  "Galaxia Tech is an e-commerce site developed with React, Redux, MongoDB, and Express.js. It implements authentication technology from Auth0, as well as Bootstrap and NodeMailer, among others. It features Paypal as the payment gateway. The Frontend was deployed on Vercel, the Backend on Railway, and it uses MongoDB Atlas as the database.";

const descriptionEs =
  "Galaxia Tech es un e-commerce desarrollado con React, Redux, MongoDB y Express.js. Implementa la tecnología de autenticación de Auth0, Bootstrap, NodeMailer, entre otras. Cuenta con la pasarela de pagos de Paypal. El Frontend fue desplegado en Vercel, el Backend en Railway y utiliza MongoDB Atlas como base de datos.";

const link = "https://www.youtube.com/embed/ZZ3cGofeQOA";

const GalaxiaTech = () => {
  return (
    <Project
      title={"Galaxia Tech"}
      arrayImg={arrayImge}
      descriptionEn={descriptionEn}
      descriptionEs={descriptionEs}
      link={link}
    />
  );
};

export default GalaxiaTech;
