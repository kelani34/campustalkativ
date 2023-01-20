import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <img src={logo} alt="logo" />

        <span>&copy; 2023. All rights reserved.</span>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  height: 120px;
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 22px;
    margin: 40px;
    span {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;
      color: #191102;
    }
    @media screen and (max-width: 650px) {
      flex-direction: column;
    }
  }
`;
