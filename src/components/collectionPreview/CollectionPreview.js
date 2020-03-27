import React from "react";

import { CollectionPreviewContainer, Title, Preview } from "./collectionPreview.styles";

import CollectionItem from "../collectionItem/CollectionItem";

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <Title>{title.toUpperCase()}</Title>
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

export default CollectionPreview;
