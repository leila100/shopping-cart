import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collectionsOverview/CollectionsOverview";
import Collection from "../collection/Collection";

const Shop = ({ match }) => {
  return (
    <div>
      <Route exact path={match.path} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default Shop;
