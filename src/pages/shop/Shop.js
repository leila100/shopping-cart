import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { firestore, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shopActions";

import WithSpinner from "../../components/withSpinner/WithSpinner";
import CollectionsOverview from "../../components/collectionsOverview/CollectionsOverview";
import Collection from "../collection/Collection";

const CollectionWithSpinner = WithSpinner(Collection);
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

class Shop extends React.Component {
  state = {
    isLoading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      this.props.updateCollections(collectionsMap);
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div>
        <Route
          exact
          path={match.path}
          render={props => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => <CollectionWithSpinner isLoading={isLoading} {...props} />}
        />
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
