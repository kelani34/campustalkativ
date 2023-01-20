import React from "react";
import styled from "styled-components";
import community from "../../assets/community.png";
import Contact from "../../components/Contact";

const Community = () => {
  return (
    <Wrapper>
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
      </div>
      <div className="join-btns">
        <button>CT Whatsapp community</button>
        <button>CT Telegram channel</button>
      </div>
      <Contact />
    </Wrapper>
  );
};

export default Community;

const Wrapper = styled.div`
  max-width: 1240px;
  margin: auto;
  .containerr {
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-family: "Sora";
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 140%;
      /* or 67px */

      text-align: center;

      /* Grey/10 */

      color: #050300;
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
    }
    .join-btns {
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
