import React from "react";
import { withRouter } from "react-router-dom";

import { MenuItemContainer, BackgroundImage, Content, Title, SubTitle } from "./menuItem.styles";

const MenuItem = ({ title, imageUrl, size, match, history, linkUrl }) => {
  const large = size === "large" ? true : false;
  return (
    <MenuItemContainer large={large} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <BackgroundImage className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <Content className='content'>
        <Title>{title.toUpperCase()}</Title>
        <SubTitle>SHOP NOW</SubTitle>
      </Content>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
