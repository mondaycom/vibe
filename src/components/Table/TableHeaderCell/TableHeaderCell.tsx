import React, { FC } from "react";
import cx from "classnames";
import { SubIcon, VibeComponentProps } from "../../../types";
import styles from "./TableHeaderCell.module.scss";
import Icon from "../../Icon/Icon";
import IconButton from "../../IconButton/IconButton";
import Info from "../../Icon/Icons/components/Info";
import { ButtonType } from "../../Button/ButtonConstants";
import Text from "../../Text/Text";
import { getAriaSort, getNextSortState, getSortIcon } from "../Table/tableHelpers";

export interface ITableHeaderCellProps extends VibeComponentProps {
  title: string;
  icon?: SubIcon;
  infoContent?: string;
  sortState?: "asc" | "desc" | "none";
  onSortClicked?: (direction: "asc" | "desc" | "none") => void;
}

const TableHeaderCell: FC<ITableHeaderCellProps> = ({
  title,
  onSortClicked,
  infoContent,
  icon,
  sortState = "none"
}) => {
  return (
    <div className={styles.tableHeaderCell} role="columnheader" aria-sort={getAriaSort(sortState)}>
      <div className={styles.tableHeaderCellContent}>
        {icon && <Icon icon={icon} iconLabel="Icon" className={styles.icon} />}
        {
          <Text size="small" color="secondary">
            {title}
          </Text>
        }
        {infoContent && (
          <IconButton
            icon={Info}
            kind={ButtonType.TERTIARY}
            size={IconButton.sizes.XS}
            ariaLabel="Info"
            className={styles.info}
          />
        )}
        {onSortClicked && (
          <React.Fragment>
            <div className={styles.spacer} /> {/* space-between */}
            <IconButton
              icon={getSortIcon(sortState)}
              kind={ButtonType.TERTIARY}
              size={IconButton.sizes.XS}
              ariaLabel="Sort"
              className={cx(styles.sort, { [styles.asc]: sortState === "asc", [styles.desc]: sortState === "desc" })}
              onClick={() => onSortClicked(getNextSortState(sortState))}
            />
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default TableHeaderCell;
