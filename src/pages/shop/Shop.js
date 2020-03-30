import React from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { fetchCollectionsAsync } from "../../redux/shop/shopActions";
import { selectIsFetching, selectIsCollectionsLoaded } from "../../redux/shop/shopSelectors";

import CollectionOverviewContainer from "../../components/collectionsOverview/CollectionsOverviewContainer";

import WithSpinner from "../../components/withSpinner/WithSpinner";
import Collection from "../collection/Collection";

const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionsAsync();
  }

  render() {
    const { match, isCollectionLoaded } = this.props;
    return (
      <div>
        <Route exact path={match.path} component={CollectionOverviewContainer} />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => <CollectionWithSpinner isLoading={!isCollectionLoaded} {...props} />}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
  isCollectionLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => {
  return {
    fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
