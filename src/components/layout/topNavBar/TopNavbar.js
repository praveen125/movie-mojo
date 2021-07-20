import React from "react";
// import { Link } from "react-router-dom";
// import * as GoIcons from "react-icons/go";
import Logo from "./Logo3.jpg";

const TopNavbar = () => (
  <div className="Navbar">
    <div className="leftSide">
      <img src={Logo} height="48px" width="72px" alt="MM-logo" />
    </div>
    <div className="rightSide">
      <div className="iconStyle">
        {/* <Link to="/login" className="login">
          <GoIcons.GoSignIn style={{ paddingRight: 5 }} />
          Login
        </Link> */}
      </div>
    </div>
  </div>
);

export default TopNavbar;
