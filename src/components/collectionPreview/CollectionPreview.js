import React from "react";
import { withRouter } from "react-router-dom";

import { CollectionPreviewContainer, Title, Preview } from "./collectionPreview.styles";

import CollectionItem from "../collectionItem/CollectionItem";

const CollectionPreview = ({ title, items, history, match, routeName }) => {
  return (
    <CollectionPreviewContainer>
      <Title onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</Title>
      <Preview>
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </Preview>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
