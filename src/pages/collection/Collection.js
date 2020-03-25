import React from "react";
import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

// import {} from "../../redux/shop/shopSelectors"
// import CollectionItem from "../../components/collectionItem/CollectionItem";

import "./collection.styles.scss";

const Collection = ({ match }) => {
  return (
    <div className='category'>
      <h2>Collection {match.params.collectionId} page</h2>
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({});

export default connect()(Collection);
