import React from "react";

import "./homepage.styles.scss";
import MenuItem from "../../components/menu-item/menuItem";

const Homepage = () => {
  return (
    <div className='homepage'>
      <div className='directory-menu'>
        <MenuItem item='HATS' />
        <MenuItem item='JACKETS' />
        <MenuItem item='SNEAKERS' />
        <MenuItem item='MEN' />
        <MenuItem item='WOMEN' />
      </div>
    </div>
  );
};

export default Homepage;
