import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Collapsable from "./Collapsable";

const MenuItem = ({ item, i }) => {
  const [show, setShow] = useState(false);

  const showSubItems = () => item.items && setShow(!show);
  return (
    <div key={i}>
      <Link className="sidebar-link" to={item.path}>
        <div>
          {item.icon}
          <span className="sidebar-label">{item.title}</span>
        </div>
        <div>
          {item.items && item.items.length && (
            <Collapsable show={show} showSubItems={showSubItems} />
          )}
        </div>
      </Link>
      <div style={{ paddingLeft: "10px" }}>
        {show &&
          item.items &&
          item.items.length &&
          item.items.map((subitem, i) => <MenuItem item={subitem} i={i} />)}
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.array,
};

export default MenuItem;
