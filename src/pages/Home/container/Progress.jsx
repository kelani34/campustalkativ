import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import earth from "../../../assets/earth.png";
import earthSM from "../../../assets/earth-sm.png";
import line from "../../../assets/line.png";
import impact from "../../../assets/impact.png";
const Progress = () => {
  return (
    <Wrapper id="growth">
      <div className="container">
        <div className="content">
          <div>
            <h2>OUR PROGRESS</h2>
            <h3>
              <span>We are here </span>and our numbers within the community is
              growing
            </h3>
          </div>
          <div>
            <span className="counter">
              <CountUp duration={5} start={4700} end={4782} />
              <h2>Members and counting</h2>
            </span>
          </div>
          <img src={impact} alt="imact" />
        </div>
        <div className="img-box">
          <img src={line} className="line" alt="line" />
          <img src={earth} className="earth" alt="earth" />
          <img src={earthSM} className="earth-sm" alt="earth" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Progress;

const Wrapper = styled.div`
overflow: hidden;
  max-width: 1140px;
  margin: auto;
  .container {
    display: flex;
    margin: 20px;
    position: relative;
    @media screen and (max-width: 650px) {
      flex-direction: column-reverse;
    }
    .content {
      margin: 70px 0;
      @media screen and (max-width: 650px) {
        margin: 22px 0;
      }
    }
    h2 {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;
      color: #8c5a0d;
      @media screen and (max-width: 650px) {
        font-size: 12px;
        line-height: 19px;
      }
    }
    h3 {
      max-width: 502px;
      font-family: "Sora";
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 140%;
      color: #050300;
      max-width: 502px;
      span {
        color: #f2aa3c;
      }

      @media screen and (max-width: 650px) {
        font-size: 20px;
        line-height: 28px;
      }
    }
  }
  .counter {
    display: block;
    align-items: center;
    font-family: "Sora";
    font-style: normal;
    font-weight: 700;
    font-size: 78px;
    line-height: 140%;
    text-align: center;
    color: #050300;

    @media screen and (max-width: 650px) {
      font-size: 50px;
      line-height: 70px;
      align-items: flex-start;
      text-align: left;
      margin-bottom: 34px;
    }
  }
  .line {
    position: absolute;
    left: 140px;
    @media screen and (max-width: 650px) {
      display: none;
    }
  }
  .earth {
    margin-left: -100px;
    margin-top: 25px;
    /* width: 100%; */
    /* width: 771px; */
    @media screen and (max-width: 650px) {
      display: none;
    }
  }
  .earth-sm {
    display: none;
    @media screen and (max-width: 650px) {
      display: block;
      margin-left: -20px;
      margin-top: 0;
    }
  }
  img {
    @media screen and (max-width: 650px) {
      width: 100%;
    }
  }
`;
