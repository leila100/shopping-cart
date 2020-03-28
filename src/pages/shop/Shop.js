import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { firestore, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shopActions";

import CollectionsOverview from "../../components/collectionsOverview/CollectionsOverview";
import Collection from "../collection/Collection";

class Shop extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      this.props.updateCollections(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <Route exact path={match.path} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCollections: collections => dispatch(updateCollections(collections))
  };
};

export default connect(null, mapDispatchToProps)(Shop);
