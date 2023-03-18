import React, { useContext } from "react";
import { AppContext } from "../../../GlobalContext/AppContext";
import styled from "styled-components";
import Slider from "react-slick";
import Arrow from "./Arrow";

const Project = ({ title, arrayImg, link, descriptionEn, descriptionEs }) => {
  const { state } = useContext(AppContext);
  const darkTheme = state.darkTheme;
  const defaultLanguage = state.language;

  const width = window.screen.width;

  const settings = {
    dots: true,
    infinite: true,
    prevArrow: <Arrow to="prev" darkTheme={darkTheme} />,
    nextArrow: <Arrow to="next" darkTheme={darkTheme} />,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <h3>
        <i>{title}</i>
      </h3>
      <p>{defaultLanguage === "EN" ? descriptionEn : descriptionEs}</p>
      <Slider {...settings}>
        {arrayImg.map((element, i) => {
          return (
            <div key={i}>
              <Img src={element} alt="img" />
            </div>
          );
        })}
      </Slider>
      <Frame>
        <iframe
          width={width >= 700 ? "560" : "300"}
          height={width >= 700 ? "315" : "180"}
          src={link}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Frame>
    </Container>
  );
};

export default Project;

const Img = styled.img`
  height: 230px;
  @media screen and (max-width: 950px) {
    height: 120px;
  }
`;

const Frame = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  h3 {
    font-size: 20px;
    margin: 10px;
  }
  p {
    font-size: 20px;
  }
  @media screen and (max-width: 950px) {
    h3 {
      font-size: 18px;
      margin: 5px;
    }
    p {
      font-size: 15px;
    }
  }
`;
