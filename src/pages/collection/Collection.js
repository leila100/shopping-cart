import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shopSelectors";
import CollectionItem from "../../components/collectionItem/CollectionItem";

import "./collection.styles.scss";

const Collection = ({ match, collection }) => {
  return (
    <div className='collection-page'>
      {collection.items.map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
