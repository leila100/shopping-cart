import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collectionPreview/CollectionPreview";
import { selectCollectionsArr } from "../../redux/shop/shopSelectors";

import "./collectionOverview.styles.scss";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className='collection-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsArr
});

export default connect(mapStateToProps)(CollectionsOverview);
