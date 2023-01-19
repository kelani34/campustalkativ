import React from "react";
import styled from "styled-components";
import Button from "../../../shared/Button";
import home from "../../../assets/home-img.png";
const Header = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="cta__header-text">
          <h1>
            Join the largest community for youth growth and development in
            Africa
          </h1>
          <div className="cta__header-text_btns">
            <Button text="Join community" />
            <Button outline text="see our growth" />
          </div>
        </div>
        <div className="cta__header-img">
          <img src={home} alt="home" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.section`
  max-width: 1128px;
  margin: auto;
  .container {
    margin: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-family: "Sora";
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 64px;
      text-align: center;
      color: #050300;
      max-width: 921px;
      margin: 32px auto;
      @media screen and (max-width: 650px) {
        font-size: 24px;
        line-height: 36px;
      }
    }
    .cta__header-text {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .cta__header-text_btns {
      display: flex;
      gap: 24px;
      @media screen and (max-width: 650px) {
        flex-direction: column;
        margin-bottom: 64px;
      }
    }
  }
  img {
    width: 100%;
  }
  .cta__header-img {
    display: flex;
    justify-content: center;
  }
`;
