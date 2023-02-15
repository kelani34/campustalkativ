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
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <Link to="/" className="cta__navbar-img-container__large">
            <img src={logo} alt="logo" />
          </Link>
          <Link to="/" className="cta__navbar-img-container__small">
            <img src={logo169} alt="logo" />
          </Link>
          <div className="cta__navbar-items-container">
            <IconContext.Provider value={{ color: "#666056", size: "18px" }}>
              <div className="cta__navbar-items-icons">
                <a
                  href="https://instagram.com/campustalkative"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillInstagram />
                </a>
                <a
                  href="https://twitter.com/campustalkative"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillTwitterCircle />
                </a>
                <a
                  href="https://www.tiktok.com/@campustalkative?_t=8ZDKhEhZNP3&_r=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTiktok />
                </a>
                <a
                  href="https://www.linkedin.com/company/campustalkative/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin />
                </a>
              </div>
            </IconContext.Provider>
            <div className="cta__navbar-items-btn">
              <Link to="/join-us">
                <Button text="Join community" />
              </Link>
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
