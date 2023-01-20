import React from "react";
import styled from "styled-components";

const Button = ({ outline, text }) => {
  return <StyledButton outline={outline}>{text}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  border: none;
  outline: none;
  background: ${(props) => (props.outline ? "none" : "#f2aa3c")};
  border-radius: 6px;
  padding: 10px 16px;

  border: ${(props) => (props.outline ? "1px solid #B6B7B7" : "none")};

  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 160%;
  color: #050300;
  &:hover {
    transform: scale(0.8);
  }
`;
