import React from "react";
import { withRouter } from "react-router-dom";

import "./menuItem.styles.scss";

const MenuItem = ({ title, imageUrl, size, match, history }) => {
  return (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${title}`)}>
      <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
