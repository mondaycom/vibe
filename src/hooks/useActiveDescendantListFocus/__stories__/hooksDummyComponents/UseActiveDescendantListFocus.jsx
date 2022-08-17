/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import useActiveDescendantListFocus from "../../../useActiveDescendantListFocus";
import Search from "../../../../components/Search/Search";

const UseActiveDescendantListFocus = ({
  focusedElementRef, // the reference for the component that listens to keyboard
  itemsIds,
  isItemSelectable,
  onItemClick,
  focusedElementRole,
  isHorizontalList,
  useDocumentEventListeners
}) => {
  return <div />;
};

UseActiveDescendantListFocus.propTypes = {
  /**
   *  The reference for the component that listens to keyboard and will be naturally focus.
   */
  focusedElementRef: PropTypes.shape({
    current: PropTypes.element
  }).isRequired,
  /**
   * Array of all the ids of the items inside the active descendant list component
   */
  itemsIds: PropTypes.arrayOf(PropTypes.string),
  /**
   * Function which return for a specific Item index if the user can select it or not.
   */
  isItemSelectable: PropTypes.func,
  /**
   * Callback function for clicking on one of the active descendant list items
   */
  onItemClick: PropTypes.func,
  /**
   * The HTML role of the natural focus element
   */
  focusedElementRole: PropTypes.oneOf([
    useActiveDescendantListFocus.roles.APPLICATION,
    useActiveDescendantListFocus.roles.GROUP,
    useActiveDescendantListFocus.roles.COMBOBOX,
    useActiveDescendantListFocus.roles.COMPOSITE,
    useActiveDescendantListFocus.roles.TEXTBOX,
    useActiveDescendantListFocus.roles.MENU
  ]),
  /**
   * Is the layout of the component option's is horizontal or vertical
   */
  isHorizontalList: PropTypes.bool,
  /**
   * Press space when there is a visual focus on one of the list items will not trigger press event
   */
  isIgnoreSpaceAsItemSelection: PropTypes.bool
};

UseActiveDescendantListFocus.defaultProps = {
  itemsIds: [],
  isItemSelectable: _itemIndex => {},
  onItemClick: (_event, _itemIndex) => {},
  focusedElementRole: useActiveDescendantListFocus.roles.GROUP,
  isHorizontalList: false,
  isIgnoreSpaceAsItemSelection: false
};

export default UseActiveDescendantListFocus;
