import { useState } from "react";
import styles from "./BoardHeader.module.scss";
import { InviteBoardModal } from "./InviteBoardModal";
import {
  Box,
  Flex,
  Button,
  IconButton,
  AvatarGroup,
  Avatar,
  EditableHeading,
  SplitButton,
  MenuItem,
  Menu as VibeMenu,
  MenuButton,
  MenuDivider,
  Divider
} from "@vibe/core";
import {
  Add,
  DropdownChevronDown,
  Edit,
  Robot,
  API,
  Search,
  Person,
  Filter,
  Sort,
  Hide,
  Group,
  Menu
} from "@mondaydotcomorg/icons";
import { DEMO_AVATAR_1, DEMO_AVATAR_2 } from "@/demo/demoPeople";
import { BOARD_VIEWS, isVibeAppView, type BoardViewId } from "../board/boardViews";

interface BoardHeaderProps {
  activeViewId: BoardViewId;
  onViewChange: (viewId: BoardViewId) => void;
  onNewItem?: () => void;
}

export const BoardHeader: React.FC<BoardHeaderProps> = ({ activeViewId, onViewChange, onNewItem }) => {
  const activeView = BOARD_VIEWS.find(view => view.id === activeViewId) ?? BOARD_VIEWS[0];
  const triggerIcon = activeView.icon;
  const [inviteOpen, setInviteOpen] = useState(false);

  return (
    <Box paddingBottom="medium" className={styles.root}>
      {/* Top Row: Title and Top Actions */}
      <Flex className={styles.titleRow} justify="space-between" align="center">
        {/* Title Area */}
        <Flex className={styles.cluster} align="center" gap="small">
          <EditableHeading type="h2" value="Marketing campaign" className={styles.boardTitle} />
          <IconButton icon={DropdownChevronDown} size="small" aria-label="Board options" />
        </Flex>

        {/* Top Right Actions */}
        <Flex align="center" gap="small">
          <Button kind="tertiary" size="small" leftIcon={API}>
            Integrate
          </Button>
          <Button kind="tertiary" size="small" leftIcon={Robot}>
            Automate
          </Button>

          <Divider direction="vertical" className={styles.dividerShort} />

          <AvatarGroup size="small" max={3}>
            <Avatar key="a1" type="img" src={DEMO_AVATAR_1} aria-label="User 1" />
            <Avatar key="a2" type="img" src={DEMO_AVATAR_2} aria-label="User 2" />
            <Avatar key="a3" type="text" text="EF" aria-label="Guest" />
          </AvatarGroup>

          <Button kind="secondary" size="small" onClick={() => setInviteOpen(true)}>
            Invite / 1
          </Button>
          <IconButton icon={Menu} size="small" aria-label="More options" />
        </Flex>
      </Flex>

      {/* Bottom Row: Toolbar */}
      <Flex justify="space-between" align="center">
        <Flex gap="small" align="center">
          {/* Main Table View Dropdown */}
          <MenuButton
            id="board-views-menu"
            aria-label="Board views"
            closeMenuOnItemClick
            triggerElement={({ className: _menuButtonClass, ...triggerProps }) => (
              <Button
                {...triggerProps}
                className={styles.viewMenuButton}
                kind="secondary"
                size="small"
                leftIcon={triggerIcon}
                rightIcon={DropdownChevronDown}
              >
                {activeView.label}
              </Button>
            )}
          >
            <VibeMenu id="board-views-menu-list" size="small" focusItemIndexOnMount={0} aria-label="Board views">
              {BOARD_VIEWS.map(view => (
                <MenuItem
                  key={view.id}
                  title={view.label}
                  icon={view.icon}
                  selected={view.id === activeViewId}
                  onClick={() => onViewChange(view.id)}
                />
              ))}
              <MenuDivider />
              <MenuItem title="Add new view" icon={Add} />
            </VibeMenu>
          </MenuButton>

          {isVibeAppView(activeViewId) ? (
            <>
              <Button kind="primary" size="small">
                Publish
              </Button>
              <Button kind="tertiary" size="small" leftIcon={Edit}>
                Edit
              </Button>
            </>
          ) : (
            <>
              <Divider direction="vertical" className={styles.dividerTall} />

              <SplitButton
                size="small"
                kind="primary"
                onClick={onNewItem}
                secondaryDialogContent={
                  <VibeMenu>
                    <MenuItem title="Secondary action" />
                  </VibeMenu>
                }
              >
                New Item
              </SplitButton>

              <Button kind="tertiary" size="small" leftIcon={Search}>
                Search
              </Button>
              <Button kind="tertiary" size="small" leftIcon={Person}>
                Person
              </Button>
              <Button kind="tertiary" size="small" leftIcon={Filter}>
                Filter
              </Button>
              <Button kind="tertiary" size="small" leftIcon={Sort}>
                Sort
              </Button>
              <Button kind="tertiary" size="small" leftIcon={Hide}>
                Hide
              </Button>
              <Button kind="tertiary" size="small" leftIcon={Group}>
                Group By
              </Button>
              <IconButton icon={Menu} size="small" aria-label="More tools" />
            </>
          )}
        </Flex>

        {/* Collapse Chevron */}
        <IconButton icon={DropdownChevronDown} size="small" aria-label="Collapse header" />
      </Flex>
      <InviteBoardModal open={inviteOpen} onClose={() => setInviteOpen(false)} />
    </Box>
  );
};
