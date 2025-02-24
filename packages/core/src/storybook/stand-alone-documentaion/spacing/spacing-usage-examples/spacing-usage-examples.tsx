import React from "react";
import styles from "./spacing-usage-examples.module.scss";
import { Flex, Text } from "../../../../components";
import SpacingWithinComponents from "../assets/SpacingWithinComponents.png";
import SpacingWithinPatterns from "../assets/SpacingWithinPatterns.png";
import SpacingWithinLayouts from "../assets/SpacingWithinLayouts.png";
import { TokenName } from "../spacing-token-name/spacing-token-name";

export const SpacingUsageExamples = () => (
  <Flex direction="column" gap={40} className={styles.container}>
    <Flex gap="large" align="start">
      <img className={styles.img} src={SpacingWithinComponents} alt="Spacing within components" />
      <Flex direction="column" gap="medium" align="start">
        <Text type="text1" weight="medium">
          Spacing within components
        </Text>
        <Text type="text1" maxLines={4}>
          Within components, smaller spacing is used to create a clear visual connection between small elements, while
          ensuring each one remains distinct and easily recognizable.
        </Text>
        <span>
          Use tokens from <TokenName>--space-2</TokenName>
          to
          <span className={styles.tokenName}>--space-16</span>
          for small, compact components.
        </span>
      </Flex>
    </Flex>
    <Flex gap="large" align="start">
      <img className={styles.img} src={SpacingWithinPatterns} alt="Spacing within patterns" />
      <Flex direction="column" gap="medium" align="start">
        <Text type="text1" weight="medium">
          Spacing within patterns
        </Text>
        <Text type="text1" maxLines={4}>
          Within patterns, it is important to keep the spacing consistent. This helps to achieve familiar visual rhythm
          with clear relationships between components, allowing the user to navigate the product with ease.
        </Text>
        <span>
          Use tokens from <span className={styles.tokenName}>--space-4</span> to <TokenName>--space-24</TokenName> for
          small, compact patterns.
        </span>
      </Flex>
    </Flex>
    <Flex gap="large" align="start">
      <img className={styles.img} src={SpacingWithinLayouts} alt="Spacing within layouts" />
      <Flex direction="column" gap="medium" align="start">
        <Text type="text1" weight="medium">
          Spacing within layouts
        </Text>
        <Text type="text1" maxLines={4}>
          Within page layouts, use spacing to create better hierarchy and readability, or draw the user’s attention to
          highly important areas.
        </Text>
        <span>
          Use tokens from <span className={styles.tokenName}>--space-16</span> to
          <TokenName>--space-80</TokenName> for page layout.
        </span>
      </Flex>
    </Flex>
  </Flex>
);
