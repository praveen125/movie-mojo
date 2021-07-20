import React from "react";
import * as RiIcons from "react-icons/ri";
import PropTypes from "prop-types";

const Collapsable = ({ show, showSubItems }) => (
  <div onClick={showSubItems} aria-hidden="true">
    {show ? <RiIcons.RiArrowUpSLine /> : <RiIcons.RiArrowDownSLine />}
  </div>
);

Collapsable.propTypes = {
  show: PropTypes.bool.isRequired,
  showSubItems: PropTypes.func.isRequired,
};

export default Collapsable;
