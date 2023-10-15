import React, { forwardRef } from "react";
import cx from "classnames";
import { SubIcon, VibeComponent, VibeComponentProps } from "../../../types";
import styles from "./TableHeaderCell.module.scss";
import Icon from "../../Icon/Icon";
import IconButton from "../../IconButton/IconButton";
import Info from "../../Icon/Icons/components/Info";
import { ButtonType } from "../../Button/ButtonConstants";
import Text from "../../Text/Text";
import Flex from "../../Flex/Flex";
import { getAriaSort, getNextSortState, getSortIcon } from "../Table/tableHelpers";
import Tooltip from "../../Tooltip/Tooltip";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";

export interface ITableHeaderCellProps extends VibeComponentProps {
  title: string;
  icon?: SubIcon;
  infoContent?: string;
  sortState?: "asc" | "desc" | "none";
  onSortClicked?: (direction: "asc" | "desc" | "none") => void;
  sortButtonAriaLabel?: string;
}

const TableHeaderCell: VibeComponent<ITableHeaderCellProps, HTMLDivElement> = forwardRef(
  (
    {
      id,
      className,
      "data-testid": dataTestId,
      title,
      onSortClicked,
      infoContent,
      icon,
      sortState = "none",
      sortButtonAriaLabel = "Sort"
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        id={id}
        className={cx(styles.tableHeaderCell, className)}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TABLE_HEADER_CELL, id)}
        role="columnheader"
        aria-sort={getAriaSort(sortState)}
      >
        <Flex
          direction={Flex.directions.ROW}
          align={Flex.align.CENTER}
          className={styles.tableHeaderCellContent}
          gap={Flex.gaps.XS}
        >
          {icon && <Icon icon={icon} iconLabel="Icon" clickable={false} className={styles.icon} />}
          {
            <Text type={Text.types.TEXT2} weight={Text.weights.MEDIUM} color={Text.colors.SECONDARY}>
              {title}
            </Text>
          }
          {infoContent && (
            <Tooltip content={infoContent} referenceWrapperClassName={styles.infoTooltip}>
              <Icon icon={Info} iconLabel={infoContent} clickable={false} />
            </Tooltip>
          )}
        </Flex>
        {onSortClicked && (
          <Flex direction={Flex.directions.ROW} align={Flex.align.CENTER} className={styles.tableHeaderCellSort}>
            <IconButton
              icon={getSortIcon(sortState)}
              kind={ButtonType.TERTIARY}
              size={IconButton.sizes.XS}
              ariaLabel={sortButtonAriaLabel}
              className={cx(styles.sort, { [styles.asc]: sortState === "asc", [styles.desc]: sortState === "desc" })}
              onClick={() => onSortClicked(getNextSortState(sortState))}
            />
          </Flex>
        )}
      </div>
    );
  }
);

export default TableHeaderCell;
