import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shopSelectors";
import CollectionItem from "../../components/collectionItem/CollectionItem";
import { CollectionContainer, Title, Items } from "./collection.styles";

const Collection = ({ match, collection }) => {
  const { title, items } = collection;
  return (
    <CollectionContainer>
      <Title>{title}</Title>
      <Items>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} className='collection-item' />
        ))}
      </Items>
    </CollectionContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
