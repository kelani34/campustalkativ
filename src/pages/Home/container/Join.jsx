import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide2 from "../../../assets/slide2.jpg";
import slide3 from "../../../assets/slide3.jpg";
import slide4 from "../../../assets/slide4.jpg";
import slide5 from "../../../assets/slide5.jpg";
import slide6 from "../../../assets/slide6.jpg";
import slide7 from "../../../assets/slide7.jpg";
import slide8 from "../../../assets/slide8.jpg";
import slide9 from "../../../assets/slide9.jpg";
import Button from "../../../shared/Button";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { Link } from "react-router-dom";

const Join = () => {
  const slides = [
    { img: slide2 },
    { img: slide3 },
    { img: slide4 },
    { img: slide5 },
    { img: slide6 },
    { img: slide7 },
    { img: slide8 },
    { img: slide9 },
  ];
  return (
    <Wrapper>
      <Slider autoplay={5} infinite={true}>
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide.img} />
          </div>
        ))}
      </Slider>
      <div className="btn">
        <Link to="/join-us">
          <Button text="Be a part of this community" />
        </Link>
      </div>
    </Wrapper>
  );
};

export default Join;

const Wrapper = styled.div`
  max-width: 900px;
  /* height: 500px; */
  margin: 89px auto;
  display: flex;
  flex-direction: column;
  .btn {
    display: flex;
    justify-content: center;
    margin-top: 90px;
  }
  .slider {
    height: 600px;
  }
  @media screen and (max-width: 768px) {
    .slider {
      height: 600px;
    }
  }
  @media screen and (max-width: 480px) {
    .slider {
      height: 400px;
    }
  }
  img {
    height: 100%;
    width: 100%;
  }
`;
