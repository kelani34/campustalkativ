import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import Button from "../shared/Button";
import { country_list } from "../constants/data";

const Form = () => {
  return (
    <Wrapper exit={{ opacity: 0 }}>
      <div className="container flex flex-col items-center max-w-[900px] m-auto">
        <div className="m-[40px] content">
          <div>
            <img src={logo} alt="campustalkative" />
          </div>
          <div>
            <h2>CampusTalktive Application Form</h2>
            <p className="max-w-[545px]">
              Fill the form to apply to the community and we will get back to
              you as soon as possible. This will take a couple of minutes.
            </p>
          </div>
        </div>
        <div>
          <form>
            <div className="flex w-full gap-5 ">
              <div className="w-[50%]">
                <input
                  className="mb-4 w-full box-border border-2 border-solid border-[#CDD2D5] rounded p-2 outline-none "
                  placeholder="First Name"
                  id="firstname"
                />
              </div>
              <div className="w-[50%]">
                <input
                  className="mb-4 w-full box-border border-2 border-solid border-[#CDD2D5] rounded p-2 outline-none "
                  placeholder="Last Name"
                  id="lastname"
                />
              </div>
            </div>
            <div>
              <input
                className="mb-4 w-full box-border border-2 border-solid border-[#CDD2D5] rounded p-2 outline-none "
                placeholder="Email Address"
                id="email"
              />
            </div>
            <div>
              <select className="mb-4 w-full box-border border-2 border-solid border-[#CDD2D5] rounded p-2 outline-none ">
                <option default hidden>
                  Select Country
                </option>
                {country_list.map((country) => (
                  <option key={country}>{country}</option>
                ))}
              </select>
            </div>
            <div>
              <textarea
                placeholder="A short description about you"
                className="mb-4 w-full box-border border-2 border-solid border-[#CDD2D5] rounded p-2 outline-none resize-none"
                id="firstname"
              />
            </div>
            <div>
              <select className="mb-4 w-full box-border border-2 border-solid border-[#CDD2D5] rounded p-2 outline-none ">
                <option default hidden>
                  What path would you like to join?
                </option>
                <option>Tech</option>
                <option>Entertainment</option>
                <option>Corpporate</option>
                <option>Entrepreneurship</option>
              </select>
            </div>
            <div>
              <select className="mb-4 w-full box-border border-2 border-solid border-[#CDD2D5] rounded p-2 outline-none ">
                <option default hidden>
                  How did you hear about us?
                </option>
                <option>Twitter</option>
                <option>Instagram</option>
                <option>facebook</option>
                <option>Youtube</option>
              </select>
            </div>
            <div className="flex justify-center">
              <Button text="Submit Application" />
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled(motion.div)`
  max-width: 1140px;
  margin: auto;
  .container {
    /* background-color: blue; */
    /* height: 100vh; */

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 90px;
    }
    h2 {
      font-size: 42px;
      text-align: center;
      margin-top: 24px;
    }
    p {
      font-size: 24px;
      text-align: center;
      margin-top: 24px;
    }
  }
`;
