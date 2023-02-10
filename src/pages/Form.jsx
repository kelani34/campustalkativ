import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import Button from "../shared/Button";
import { country_list } from "../constants/data";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [path, setPath] = useState("");
  const [outreach, setOutreach] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.PreventDefault();
    console.log(e);
    navigate("/join/community");
  }

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
          <form onSubmit={handleSubmit} id="form">
            <div className="flex w-full gap-5 ">
              <div className="w-[50%]">
                <input
                  type="text"
                  className="mb-4 w-full box-border border-2 border-solid border-[#CDD2D5] rounded p-2 outline-none "
                  placeholder="First Name"
                  id="firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
              </div>
              <div className="w-[50%]">
                <input
                  type="text"
                  className="mb-4 w-full box-border border-2 border-solid border-[#CDD2D5] rounded p-2 outline-none "
                  placeholder="Last Name"
                  id="lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <input
                type="email"
                className="mb-4 w-full box-border border-2 border-solid border-[#CDD2D5] rounded p-2 outline-none "
                placeholder="Email Address"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <select
                className="mb-4 w-full box-border border-2 border-solid border-[#CDD2D5] rounded p-2 outline-none "
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option default hidden>
                  Select Country
                </option>
                {country_list.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="A short description about you"
                className="mb-4 w-full box-border border-2 border-solid border-[#CDD2D5] rounded p-2 outline-none resize-none"
                id="firstname"
              />
            </div>
            <div>
              <select
                value={path}
                onChange={(e) => setPath(e.target.value)}
                className="mb-4 w-full box-border border-2 border-solid border-[#CDD2D5] rounded p-2 outline-none "
              >
                <option default hidden>
                  What path would you like to join?
                </option>
                <option value="tech">Tech</option>
                <option value="entertainment">Entertainment</option>
                <option value="corporate">Corporate</option>
                <option value="entrepreneurship">Entrepreneurship</option>
              </select>
            </div>
            <div>
              <select
                value={outreach}
                onChange={(e) => setOutreach(e.target.value)}
                className="mb-4 w-full box-border border-2 border-solid border-[#CDD2D5] rounded p-2 outline-none "
              >
                <option default hidden>
                  How did you hear about us?
                </option>
                <option value="twitter">Twitter</option>
                <option value="instagram">Instagram</option>
                <option value="facebook">Facebook</option>
                <option value="youtube">Youtube</option>
              </select>
            </div>
            <div className="flex justify-center">
              <Button text="Submit Application" form="form" />
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
