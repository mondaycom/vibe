/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useCallback, useRef } from "react";
import cx from "classnames";
import Flex from "../../../components/Flex/Flex";
import Search from "../../../components/Search/Search";
import useActiveDescendantListFocus from "../index";
import UseActiveDescendantListFocus from "./hooksDummyComponents/UseActiveDescendantListFocus";
import { overviewInteractionSuite } from "../__tests__/useActiveDescendantListFocus.interactions";
import styles from "./useActiveDescendantListFocus.module.scss";

export default {
  title: "Hooks/useActiveDescendantListFocus",
  component: UseActiveDescendantListFocus
};

export const Overview = {
  render: () => {
    const focusedElementRef = useRef(null);
    const itemsIds = ["id-1", "id-2", "id-3"];
    const isItemSelectable = useCallback(() => true, []);

    const onItemClick = useCallback(() => {
      alert("clicked");
    }, []);

    const { focusedElementProps, visualFocusItemId } = useActiveDescendantListFocus({
      focusedElementRef,
      focusedElementRole: useActiveDescendantListFocus.roles.COMBOBOX,
      itemsIds,
      onItemClick,
      isItemSelectable,
      isHorizontalList: false,
      isIgnoreSpaceAsItemSelection: true
    });

    return (
      <Flex direction={Flex.directions.COLUMN}>
        <Search
          ref={focusedElementRef}
          role={focusedElementProps.role}
          currentAriaResultId={focusedElementProps["aria-activedescendant"]}
        />
        <ul>
          <li
            onClick={onItemClick}
            className={cx({
              [styles.visualFocus]: visualFocusItemId === "id-1"
            })}
            id="id-1"
            key="id-1"
          >
            Item 1
          </li>
          <li
            onClick={onItemClick}
            className={cx({
              [styles.visualFocus]: visualFocusItemId === "id-2"
            })}
            id="id-2"
            key="id-2"
          >
            Item 2
          </li>
          <li
            onClick={onItemClick}
            className={cx({
              [styles.visualFocus]: visualFocusItemId === "id-3"
            })}
            id="id-3"
            key="id-3"
          >
            Item 3
          </li>
        </ul>
      </Flex>
    );
  },

  name: "Overview",
  play: overviewInteractionSuite
};
