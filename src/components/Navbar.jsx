import React from "react";

const Navbar = (props) => {
  return (
    <>
      <div>Navbar</div>

      {props.children}
    </>
  );
};

export default Navbar;
