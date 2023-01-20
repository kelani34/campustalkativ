import React from "react";
import styled from "styled-components";
import largeImage from "../../../assets/large-image.png";
import halfImage from "../../../assets/half-image.png";
import lShape from "../../../assets/l-shape.png";
import slShape from "../../../assets/sl-shape.png";
import smallImage from "../../../assets/small-image.png";
import Button from "../../../shared/Button";

const Join = () => {
  return (
    <Wrapper>
      <div className="container">
        <img src={halfImage} alt="" className="half-img" />
        <img src={largeImage} alt="" className="full-img" />
        <img src={slShape} alt="" className="sl-img" />{" "}
        <img src={smallImage} alt="" className="small-img" />
        <img src={lShape} alt="" className="img" />
        <div className="btn">
          <Button text="Be a part of this community" />
        </div>
        <div className="sm-btn">
          <Button text="Be a part of this community" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Join;

const Wrapper = styled.div`
  max-width: 1400px;
  height: 500px;
  margin: 89px auto;
  /* overflow-x: hidden; */
  .container {
    display: flex;
    justify-content: space-between;
    position: relative;
    gap: 148px;

    @media screen and (max-width: 650px) {
      gap: 0;
      justify-content: flex-end;
      flex-direction: column;
      margin-left: 20px;
    }
    .sm-btn {
      display: none;
      @media screen and (max-width: 650px) {
        display: flex;
        justify-content: center;
        margin-top: 64px;
        margin-left: 60px;
        margin-right: 20px;
      }
    }
    .sl-img {
      display: none;
      @media screen and (max-width: 650px) {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
    .small-img {
      display: none;
      @media screen and (max-width: 650px) {
        display: block;
        height: 456px;
        margin-left: 64px;
      }
    }
    .img {
      position: absolute;
      left: 450px;
      @media screen and (max-width: 650px) {
        display: none;
      }
    }
    .btn {
      position: absolute;
      top: 515px;
      left: 980px;
      width: 282px;
      @media screen and (max-width: 650px) {
        display: none;
        position: relative;
        top: 0;
        left: 0;
      }
    }
    .half-img {
      @media screen and (max-width: 650px) {
        display: none;
      }
    }
    .full-img {
      @media screen and (max-width: 650px) {
        display: none;
      }
    }
  }
`;
