import React from "react";
import styled from "styled-components";
import company from "../../../assets/company.png";
const Company = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2>Collaboration and growth</h2>
        <p>
          We believe that a strong community must strive on the backbone of good
          partnership and collaboration. So far we are proud to have the support
          and partnership of these organisations, who share our zeal to continue
          to develop and build the youths of the future
        </p>
        <div className="cta__partnership-containers">
          <div className="max-w-[150px]">
            <img src={company} alt="company" />
          </div>
          {/* <img src={company} alt="company" />
          <img src={company} alt="company" />
          <img src={company} alt="company" />
          <img src={company} alt="company" className="sm" />
          <img src={company} alt="company" className="sm" /> */}
        </div>
      </div>
    </Wrapper>
  );
};

export default Company;

const Wrapper = styled.div`
  max-width: 1128px;
  margin: auto;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin: 24px; */
    h2 {
      font-family: "Sora";
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 45px;
      text-align: center;
      color: #050300;
      margin-bottom: 16px;
      @media screen and (max-width: 650px) {
        font-size: 20px;
        line-height: 28px;
      }
    }
    p {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 29px;
      text-align: center;
      color: #3f392c;
      max-width: 861px;
      @media screen and (max-width: 650px) {
        font-size: 14px;
        line-height: 22px;
      }
    }
    .cta__partnership-containers {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 48px;
      margin: 38px 0;

      .sm {
        @media screen and (max-width: 650px) {
          display: none;
        }
      }
      img {
        @media screen and (max-width: 650px) {
          width: 48px;
        }
      }
      @media screen and (max-width: 650px) {
        gap: 38px;
      }
    }
  }
`;
