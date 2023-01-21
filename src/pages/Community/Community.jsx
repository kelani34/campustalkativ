import React from "react";
import styled from "styled-components";
import community from "../../assets/community.png";
import Contact from "../../components/Contact";
import { RiWhatsappFill } from "react-icons/ri";
import { BsTelegram } from "react-icons/bs";
import { motion } from "framer-motion";
const Community = () => {
  return (
    <Wrapper exit={{ opacity: 0 }}>
      <div className="containerr">
        <div>
          <img className="img" src={community} alt="Community" />
        </div>
        <h1>Join our community with ease</h1>
        <p>
          Our community exist on any of these two platforms. Whatsapp community
          and Telegram channel. You can join either of them and enjoy the same
          benefits.
        </p>
        <div className="join-btns">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <RiWhatsappFill />
            CT Whatsapp community
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <BsTelegram />
            CT Telegram channel
          </motion.button>
        </div>
      </div>

      <Contact />
    </Wrapper>
  );
};

export default Community;

const Wrapper = styled(motion.div)`
  max-width: 1240px;
  margin: auto;
  .containerr {
    margin: 113px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 650px) {
      margin: 43px 20px;
    }
    h1 {
      font-family: "Sora";
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 140%;
      text-align: center;
      color: #050300;
      @media screen and (max-width: 650px) {
        font-size: 24px;
        line-height: 140%;
      }
    }
    p {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 160%;
      text-align: center;
      color: #3f392c;
      max-width: 861px;
      @media screen and (max-width: 650px) {
        font-size: 14px;
        line-height: 160%;
      }
    }
    .join-btns {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;
      margin-top: 43px;
      button {
        background: rgba(255, 230, 192, 0.4);
        border: 1px solid #ffe6c0;
        border-radius: 30px;
        padding: 18px 29px;
        display: flex;
        gap: 17px;
        align-items: center;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 150%;
        color: #191102;
        @media screen and (max-width: 650px) {
          font-size: 14px;
          line-height: 160%;
        }
      }
    }

    .img {
      /* width: 100%; */
      animation: spin 10s linear infinite;
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
  }
`;