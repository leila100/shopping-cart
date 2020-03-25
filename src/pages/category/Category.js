import React from "react";
import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

// import {} from "../../redux/shop/shopSelectors"
// import CollectionItem from "../../components/collectionItem/CollectionItem";

import "./category.styles.scss";

const Category = ({ match }) => {
  return (
    <div className='category'>
      <h2>Category page</h2>
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({});

export default connect()(Category);
