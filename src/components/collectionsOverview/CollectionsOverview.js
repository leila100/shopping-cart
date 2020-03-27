import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collectionPreview/CollectionPreview";
import { selectCollectionsArr } from "../../redux/shop/shopSelectors";
import { CollectionOverviewContainer } from "./collectionsOverview.styles";

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsArr
});

export default connect(mapStateToProps)(CollectionsOverview);
