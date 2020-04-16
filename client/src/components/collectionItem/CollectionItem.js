import React from "react";
import { connect } from "react-redux";

import CustomButton from "../customButton/CustomButton";
import { addItem } from "../../redux/cart/cartActions";
import { CollectionItemContainer, Image, CollectionFooter, Name, Price } from "./collectionItem.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <Image className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <CollectionFooter>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </CollectionFooter>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to Cart
      </CustomButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
