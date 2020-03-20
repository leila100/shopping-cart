import React from "react";

import "./menuItem.styles.scss";

const MenuItem = ({ item, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`} style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className='content'>
        <h1 className='title'>{item}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
