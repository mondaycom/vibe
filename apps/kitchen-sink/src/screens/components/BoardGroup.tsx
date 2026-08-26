import { useState } from "react";
import {
  Box,
  Flex,
  EditableHeading,
  Text,
  IconButton,
  EditableText,
  Avatar,
  Icon,
  Checkbox,
} from "@vibe/core";
import {
  DropdownChevronDown,
  DropdownChevronRight,
  Add,
  AddUpdate,
  Person,
} from "@mondaydotcomorg/icons";
import { boardGridTemplateColumns } from "@/board/gridTemplate";
import { useDocumentColumnResize } from "@/hooks/useDocumentColumnResize";
import { BoardGroupDevToolbar } from "./BoardGroupDevToolbar";
import { BoardGroupFooter } from "./BoardGroupFooter";
import { Group, ColumnWidths, Item } from "./types";
import { StatusCell } from "./StatusCell";
import { GlassAgentTile } from "./GlassAgentTile";
import type { ConfigProductName } from "../productConfig";
import styles from "./BoardGroup.module.scss";

interface BoardGroupProps {
  group: Group;
  columnWidths: ColumnWidths;
  product: ConfigProductName;
  onColumnResize: (columnId: keyof ColumnWidths, newWidth: number) => void;
  onOpenItem?: (item: Item) => void;
}

const ResizeHandle = ({
  onResizeStart,
}: {
  onResizeStart: (e: React.MouseEvent) => void;
}) => (
  <div onMouseDown={onResizeStart} className={styles.resizeHandle}>
    <div className={styles.resizeHandleLine} />
  </div>
);

export const BoardGroup: React.FC<BoardGroupProps> = ({
  group,
  columnWidths,
  onColumnResize,
  product,
  onOpenItem,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedItemIds, setSelectedItemIds] = useState<string[]>([]);

  const gridTemplate = boardGridTemplateColumns(columnWidths);
  const startResize = useDocumentColumnResize(columnWidths, onColumnResize);

  const allSelected =
    group.items.length > 0 && selectedItemIds.length === group.items.length;
  const isIndeterminate =
    selectedItemIds.length > 0 && selectedItemIds.length < group.items.length;

  const handleHeaderCheckboxChange = () => {
    if (allSelected) {
      setSelectedItemIds([]);
    } else {
      setSelectedItemIds(group.items.map((item) => item.id));
    }
  };

  const handleItemCheckboxChange = (itemId: string) => {
    if (selectedItemIds.includes(itemId)) {
      setSelectedItemIds(selectedItemIds.filter((id) => id !== itemId));
    } else {
      setSelectedItemIds([...selectedItemIds, itemId]);
    }
  };

  return (
    <Box marginBottom="large">
      <Flex align="center" className={styles.headerRow}>
        <Flex
          className={`${styles.titleRow} ${styles.groupTitle}`}
          align="center"
          style={{ color: group.color }}
        >
          <IconButton
            size="small"
            kind="tertiary"
            aria-label={isCollapsed ? "Expand group" : "Collapse group"}
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? DropdownChevronRight : DropdownChevronDown}
          />
          <EditableHeading type="h3" value={group.title} />
        </Flex>

        {product === "dev" && <BoardGroupDevToolbar />}
      </Flex>

      {!isCollapsed && (
        <Box>
          <Box
            className={styles.gridHeader}
            style={{ gridTemplateColumns: gridTemplate }}
          >
            <Flex
              justify="center"
              align="center"
              className={styles.cellCheckboxHead}
            >
              <Box
                className={`${styles.stripe} ${styles.stripeHeader}`}
                style={{
                  backgroundColor: group.color,
                }}
              />
              <Checkbox
                id={`${group.id}-select-all`}
                separateLabel={true}
                checked={allSelected}
                indeterminate={isIndeterminate}
                onChange={handleHeaderCheckboxChange}
                aria-label="Select all items in this group"
              />
            </Flex>

            <Flex
              align="center"
              className={`${styles.colHead} ${styles.colHeadTask}`}
            >
              <Text type="text2" color="secondary">
                Task
              </Text>
              <ResizeHandle onResizeStart={startResize("task")} />
            </Flex>

            <Flex justify="center" align="center" className={styles.colHead}>
              <Text type="text2" color="secondary">
                Owner
              </Text>
              <ResizeHandle onResizeStart={startResize("owner")} />
            </Flex>

            <Flex justify="center" align="center" className={styles.colHead}>
              <Text type="text2" color="secondary">
                Status
              </Text>
              <ResizeHandle onResizeStart={startResize("status")} />
            </Flex>

            <Flex justify="center" align="center" className={styles.colHead}>
              <Text type="text2" color="secondary">
                Priority
              </Text>
              <ResizeHandle onResizeStart={startResize("priority")} />
            </Flex>

            <Flex justify="center" align="center" className={styles.colHead}>
              <Text type="text2" color="secondary">
                ETA
              </Text>
              <ResizeHandle onResizeStart={startResize("eta")} />
            </Flex>

            <Flex
              justify="center"
              align="center"
              className={`${styles.colHead} ${styles.colHeadAdd}`}
            >
              <Icon icon={Add} iconSize={16} />
            </Flex>
          </Box>

          {group.items.map((item) => (
            <Box
              key={item.id}
              className={styles.row}
              style={{ gridTemplateColumns: gridTemplate }}
            >
              <Flex
                justify="center"
                align="center"
                className={styles.cellCheckbox}
              >
                <Box
                  className={`${styles.stripe} ${styles.stripeRow}`}
                  style={{
                    backgroundColor: group.color,
                  }}
                />
                <Checkbox
                  id={`${group.id}-item-${item.id}`}
                  separateLabel={true}
                  checked={selectedItemIds.includes(item.id)}
                  onChange={() => handleItemCheckboxChange(item.id)}
                  aria-label={`Select ${item.name}`}
                />
              </Flex>

              <Flex
                align="center"
                justify="space-between"
                className={styles.cellTask}
              >
                <EditableText value={item.name} type="text2" />
                <div
                  className={styles.taskActions}
                  onClick={() => onOpenItem?.(item)}
                  role={onOpenItem ? "button" : undefined}
                  tabIndex={onOpenItem ? 0 : undefined}
                  aria-label={onOpenItem ? `Open ${item.name}` : undefined}
                  onKeyDown={(e: React.KeyboardEvent) => {
                    if (onOpenItem && (e.key === "Enter" || e.key === " ")) {
                      e.preventDefault();
                      onOpenItem(item);
                    }
                  }}
                >
                  <Icon
                    icon={AddUpdate}
                    iconSize={24}
                    className={styles.taskActionsIcon}
                  />
                </div>
              </Flex>

              <Flex
                justify="center"
                align="center"
                className={styles.cellStandard}
              >
                <div className={styles.ownerStack}>
                  {item.agents?.map((variant, idx) => (
                    <span
                      key={`agent-${idx}`}
                      className={styles.ownerStackItem}
                      style={{ zIndex: idx + 1 }}
                    >
                      <GlassAgentTile
                        variant={variant}
                        size={24}
                        ariaLabel={`Agent ${variant}`}
                      />
                    </span>
                  ))}
                  {item.person ? (
                    <span
                      className={styles.ownerStackItem}
                      style={{ zIndex: (item.agents?.length ?? 0) + 1 }}
                    >
                      <Avatar
                        size="small"
                        type="img"
                        src={item.person}
                        aria-label={item.personName ?? "Assigned"}
                      />
                    </span>
                  ) : (
                    <span
                      className={styles.ownerStackItem}
                      style={{ zIndex: (item.agents?.length ?? 0) + 1 }}
                    >
                      <div
                        className={styles.unassignedAvatar}
                        aria-label="Unassigned"
                      >
                        <Icon icon={Person} iconSize={16} />
                      </div>
                    </span>
                  )}
                </div>
              </Flex>

              <Box className={styles.cellStandard}>
                <StatusCell status={item.status} />
              </Box>

              <Box className={styles.cellStandard}>
                <StatusCell status={item.priority} />
              </Box>

              <Flex
                justify="center"
                align="center"
                className={styles.cellStandard}
              >
                <Text type="text2">{item.date}</Text>
              </Flex>

              <Box className={styles.cellEmpty} />
            </Box>
          ))}

          <Flex align="center" className={styles.addRow}>
            <Flex
              justify="center"
              align="center"
              className={styles.addRowCheck}
            >
              <Box
                className={`${styles.stripe} ${styles.stripeAdd}`}
                style={{
                  backgroundColor: group.color,
                  opacity: 0.3,
                }}
              />
              <Checkbox
                id={`${group.id}-add-row-checkbox`}
                separateLabel={true}
                disabled
                aria-label="Add item (disabled)"
              />
            </Flex>
            <Box className={styles.addItem}>
              <EditableText value="+ Add item" type="text2" />
            </Box>
          </Flex>

          <BoardGroupFooter
            gridTemplate={gridTemplate}
            columnWidths={columnWidths}
          />
        </Box>
      )}
    </Box>
  );
};
