import React from "react";
import styled from "styled-components";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { IconContext } from "react-icons";
import contact from "../assets/contact-img.png";
const Contact = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2>
          Say hello at <span>talk@campustalktive.com</span>
        </h2>
        <img src={contact} alt="contact" />
        <div className="btns">
          <button className="contact">
            <IconContext.Provider value={{ color: "#191102", size: "20px" }}>
              <div className="cta__navbar-items-icons">
                <AiFillInstagram />
                <AiFillTwitterCircle />
                <FaTiktok />
                <AiFillLinkedin />
              </div>
            </IconContext.Provider>
            <span>@campustalkative</span>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.div`
  margin: 189px 20px;
  @media screen and (max-width: 650px) {
    margin: 18px 20px;
  }
  .container {
    max-width: 1240px;
    margin: auto;
    h2 {
      font-family: "Sora";
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 140%;
      color: #050300;
      span {
        color: #f2aa3c;
      }
      @media screen and (max-width: 650px) {
        font-size: 24px;
        line-height: 140%;
      }
    }
    .contact {
      border: none;
      display: flex;
      align-items: center;
      gap: 19px;
      @media screen and (max-width: 650px) {
        gap: 16px;
      }
      padding: 18px 29px;
      background: rgba(255, 230, 192, 0.4);
      border: 1px solid #ffe6c0;
      border-radius: 30px;
      margin-right: -30px;
      @media screen and (max-width: 650px) {
        margin-right: 0;
        margin-top: 28px;
      }
      span {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 150%;
        color: #191102;
        @media screen and (max-width: 650px) {
          font-size: 16px;
          line-height: 160%;
        }
      }
      .cta__navbar-items-icons {
        display: flex;
        gap: 15px;
        @media screen and (max-width: 650px) {
          gap: 10px;
        }
      }
    }
    .btns {
      display: flex;
      justify-content: flex-end;
      @media screen and (max-width: 650px) {
        justify-content: center;
      }
    }
    img {
      width: 100%;
      margin-bottom: -100px;
      margin-top: -40px;
    }
  }
`;
