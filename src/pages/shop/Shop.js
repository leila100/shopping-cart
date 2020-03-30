import React from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { fetchCollectionsAsync } from "../../redux/shop/shopActions";
import { selectIsFetching, selectErrorMessage } from "../../redux/shop/shopSelectors";

import WithSpinner from "../../components/withSpinner/WithSpinner";
import CollectionsOverview from "../../components/collectionsOverview/CollectionsOverview";
import Collection from "../collection/Collection";

const CollectionWithSpinner = WithSpinner(Collection);
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

class Shop extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionsAsync();
  }

  render() {
    const { match, isLoading } = this.props;
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

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
  errorMessage: selectErrorMessage
});

const mapDispatchToProps = dispatch => {
  return {
    fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
