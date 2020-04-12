import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shopActions";

import CollectionOverviewContainer from "../../components/collectionsOverview/CollectionsOverviewContainer";
import CollectionContainer from "../collection/CollectionContainer";

class Shop extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <Route exact path={match.path} component={CollectionOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionContainer} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  };
};

export default connect(null, mapDispatchToProps)(Shop);
