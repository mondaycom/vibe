/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useCallback, useRef } from "react";
import cx from "classnames";
import Flex from "../../../components/Flex/Flex";
import Search from "../../../components/Search/Search";
import UseActiveDescendantListFocus from "./hooksDummyComponents/UseActiveDescendantListFocus";
import { overviewInteractionSuite } from "../__tests__/useActiveDescendantListFocus.interactions";
import useActiveDescendantListFocus from "../index";
import { Meta, StoryObj } from "@storybook/react";
import styles from "./useActiveDescendantListFocus.module.scss";

type Story = StoryObj<typeof useActiveDescendantListFocus>;

export default {
  title: "Hooks/useActiveDescendantListFocus",
  component: UseActiveDescendantListFocus
} satisfies Meta<typeof useActiveDescendantListFocus>;

export const Overview: Story = {
  render: () => {
    const focusedElementRef = useRef<HTMLInputElement | null>(null);
    const itemsIds: string[] = ["id-1", "id-2", "id-3"];
    const isItemSelectable = useCallback((): boolean => true, []);

    const onItemClick = useCallback((): void => {
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
