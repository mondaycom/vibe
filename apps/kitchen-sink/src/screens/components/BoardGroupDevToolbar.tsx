import { Box, Flex, Text, IconButton, Button } from "@vibe/core";
import { Menu, Update } from "@mondaydotcomorg/icons";
import boardStyles from "./BoardGroup.module.scss";
import styles from "./BoardGroupDevToolbar.module.scss";

/** Sprint-style group affordances shown only for the `dev` product theme. */
export function BoardGroupDevToolbar() {
  return (
    <Flex gap="small" align="center">
      <Flex align="center" gap="xs">
        <Box className={styles.sprintStatusOuter}>
          <Box className={styles.sprintStatusInner} />
        </Box>
        <Text type="text2" color="secondary">
          Jan 5 - 19
        </Text>
      </Flex>

      <Button kind="tertiary" size="xs">
        Capacity
      </Button>

      <Button kind="secondary" size="xs">
        Daily standup
      </Button>

      <Button
        kind="tertiary"
        size="xs"
        leftIcon={Update}
        className={boardStyles.completeBtn}
      >
        Complete
      </Button>

      <IconButton
        icon={Menu}
        size="xs"
        kind="tertiary"
        aria-label="Group options"
      />
    </Flex>
  );
}
