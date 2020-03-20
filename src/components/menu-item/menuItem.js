import React from "react";

import "./menuItem.styles.scss";

const MenuItem = ({ item }) => {
  return (
    <div className='menu-item'>
      <div className='content'>
        <h1 className='title'>{item}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
