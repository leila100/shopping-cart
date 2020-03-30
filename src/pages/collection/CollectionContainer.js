import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionsLoaded } from "../../redux/shop/shopSelectors";
import WithSpinner from "../../components/withSpinner/WithSpinner";
import Collection from "./Collection";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

// compose allow to chain multiple HOCs
const CollectionContainer = compose(connect(mapStateToProps), WithSpinner)(Collection);

export default CollectionContainer;
