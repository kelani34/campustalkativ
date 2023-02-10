import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const Button = ({ outline, text, form }) => {
  return (
    <StyledButton
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      outline={outline}
      form={form}
    >
      {text}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled(motion.button)`
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
  /* &:hover {
    transform: scale(0.8);
  } */
`;
