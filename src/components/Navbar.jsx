import React from "react";
import styled from "styled-components";
import logo from "../assets/app_logo.png";
import logo169 from "../assets/logo169.png";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { IconContext } from "react-icons";
import Button from "../shared/Button";

const Navbar = (props) => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="cta__navbar-img-container__large">
            <img src={logo} alt="logo" />
          </div>
          <div className="cta__navbar-img-container__small">
            <img src={logo169} alt="logo" />
          </div>
          <div className="cta__navbar-items-container">
            <IconContext.Provider value={{ color: "#666056", size: "18px" }}>
              <div className="cta__navbar-items-icons">
                <AiFillInstagram />
                <AiFillTwitterCircle />
                <FaTiktok />
                <AiFillLinkedin />
              </div>
            </IconContext.Provider>
            <div className="cta__navbar-items-btn">
              <Button text="Join community" />
            </div>
          </div>
        </div>
      </Wrapper>

      {props.children}
    </>
  );
};

export default Navbar;

const Wrapper = styled.div`
  max-width: 1128px;
  margin: 20px auto;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 24px;

    .cta__navbar-img-container__large {
      @media screen and (max-width: 650px) {
        display: none;
      }
    }
    .cta__navbar-img-container__small {
      display: none;
      @media screen and (max-width: 650px) {
        display: block;
      }
    }
  }
  .cta__navbar-img-container {
    margin-right: 30px;
  }
  .cta__navbar-items-container {
    display: flex;
    align-items: center;

    .cta__navbar-items-icons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 23px;
      @media screen and (max-width: 650px) {
        gap: 15px;
      }
    }
    .cta__navbar-items-btn {
      margin-left: 51px;

      @media screen and (max-width: 650px) {
        display: none;
      }
    }
  }
`;
