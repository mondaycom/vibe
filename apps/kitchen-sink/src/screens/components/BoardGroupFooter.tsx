import { Box, Flex, AvatarGroup, Avatar } from "@vibe/core";
import type { ColumnWidths } from "./types";
import { boardFooterDataColumnsTemplate } from "@/board/gridTemplate";
import styles from "./BoardGroup.module.scss";

interface BoardGroupFooterProps {
  gridTemplate: string;
  columnWidths: ColumnWidths;
}

export function BoardGroupFooter({
  gridTemplate,
  columnWidths,
}: BoardGroupFooterProps) {
  const footerDataColumns = boardFooterDataColumnsTemplate(columnWidths);

  return (
    <Box
      className={styles.footerSpacer}
      style={{ gridTemplateColumns: gridTemplate }}
    >
      <Box className={styles.footerSpacerInner} />

      <Box
        className={styles.footer}
        style={{
          gridColumn: "3 / -1",
          gridTemplateColumns: footerDataColumns,
        }}
      >
        <Flex justify="center" align="center" className={styles.footerCell}>
          <AvatarGroup
            counterProps={{
              color: "dark",
            }}
            size="xs"
            type="img"
            max={2}
          >
            <Avatar
              type="img"
              src="https://picsum.photos/id/1/200"
              aria-label="Julia Martinez"
            />
            <Avatar
              type="img"
              src="https://picsum.photos/id/2/200"
              aria-label="Sophia Johnson"
            />
            <Avatar
              type="img"
              src="https://picsum.photos/id/3/200"
              aria-label="Marco DiAngelo"
            />
            <Avatar
              type="img"
              src="https://picsum.photos/id/4/200"
              aria-label="Liam Caldwell"
            />
            <Avatar
              type="img"
              src="https://picsum.photos/id/5/200"
              aria-label="Julia Martinez"
            />
          </AvatarGroup>
        </Flex>

        <Flex
          justify="center"
          align="center"
          className={`${styles.footerCell} ${styles.footerCellPadded}`}
        >
          <Flex className={styles.barTrack}>
            <Box
              className={`${styles.barSeg} ${styles.barSeg30} ${styles.barSegColorDone}`}
            />
            <Box
              className={`${styles.barSeg} ${styles.barSeg40} ${styles.barSegColorWorking}`}
            />
            <Box
              className={`${styles.barSeg} ${styles.barSeg30} ${styles.barSegColorStuck}`}
            />
          </Flex>
        </Flex>

        <Flex
          justify="center"
          align="center"
          className={`${styles.footerCell} ${styles.footerCellPadded}`}
        >
          <Flex className={styles.barTrack}>
            <Box
              className={`${styles.barSeg} ${styles.barSeg50} ${styles.barSegColorDarkBlue}`}
            />
            <Box
              className={`${styles.barSeg} ${styles.barSeg20} ${styles.barSegColorPurple}`}
            />
            <Box
              className={`${styles.barSeg} ${styles.barSeg30} ${styles.barSegColorGray}`}
            />
          </Flex>
        </Flex>

        <Box className={styles.footerCell} />

        <Box />
      </Box>
    </Box>
  );
}
