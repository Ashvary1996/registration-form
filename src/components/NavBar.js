import React from "react";

import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <div className="navbar d-flex justify-content-evenly .bg-success">
        <Link to="/registration-form"> Registration Form </Link>
        <Link to="/display-user"> Display Users </Link>
      </div>
    </>
  );
}

export default NavBar;
