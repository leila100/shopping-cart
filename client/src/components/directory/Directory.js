import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectSections } from "../../redux/directory/directorySelectors";
import MenuItem from "../menu-item/menuItem";
import { DirectoryContainer } from "./directory.styles";

const Directory = ({ sections }) => {
  return (
    <DirectoryContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem {...otherSectionProps} key={id} />
      ))}
    </DirectoryContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectSections
});

export default connect(mapStateToProps)(Directory);
