import React from "react";

import { SHOP_DATA } from "../../shopData";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shopData: SHOP_DATA
    };
  }
  render() {
    return <div>Shop Page!</div>;
  }
}

export default Shop;
