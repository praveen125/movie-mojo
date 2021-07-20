import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import PropTypes from "prop-types";
import SideBarData from "./SideBarData";
import MenuItem from "./MenuItem";

const SideBar = ({ sidebar, showSidebar }) => (
  <>
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="sidebar-nav" style={{ left: sidebar ? "0" : "-17%" }}>
        <div className="sidebar-wrap">
          {SideBarData.map((item) => (
            <MenuItem item={item} key={item} />
          ))}
        </div>
      </div>
      <div className="nav" style={{ left: sidebar ? "17%" : "0" }}>
        <Link to="#" className="nav-icon">
          {!sidebar ? (
            <FaIcons.FaBars onClick={showSidebar} />
          ) : (
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          )}
        </Link>
      </div>
    </IconContext.Provider>
  </>
);

SideBar.propTypes = {
  sidebar: PropTypes.bool.isRequired,
  showSidebar: PropTypes.func.isRequired,
};

export default SideBar;
