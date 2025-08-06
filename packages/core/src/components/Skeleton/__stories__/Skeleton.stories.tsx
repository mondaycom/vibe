import React, { useCallback, useState } from "react";
import Skeleton, { type SkeletonProps } from "../Skeleton";
import Avatar from "../../Avatar/Avatar";
import person from "./assets/person.png";
import Button from "../../Button/Button";
import { Reply, ThumbsUp } from "@vibe/icons";
import { Flex } from "../../Flex";
import { Box } from "../../Box";
import { Text } from "../../Text";

export default {
  title: "Components/Skeleton",
  component: Skeleton
};

export const Overview = {
  render: (args: SkeletonProps) => (
    <Flex direction="column" gap="small">
      <Skeleton {...args} />
      <Skeleton {...args} />
      <Skeleton {...args} />
    </Flex>
  ),
  args: {
    size: "h1",
    type: "text"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const Shapes = {
  render: () => (
    <Flex align="end" gap="large">
      <Flex direction="column" align="stretch" gap="large">
        <Skeleton type="circle" />
        <Text type="text1">Circle</Text>
      </Flex>
      <Flex direction="column" align="stretch" gap="large">
        <Skeleton />
        <Text type="text1">Square</Text>
      </Flex>
      <Flex direction="column" align="stretch" gap="large">
        <Skeleton width={112} height={46} />
        <Text type="text1">Rectangle</Text>
      </Flex>
    </Flex>
  )
};

export const TextSkeleton = {
  render: () => (
    <Flex align="end" gap="large">
      <Flex direction="column" align="stretch" gap="large">
        <Skeleton type="text" size="h1" />
        <Text type="text1">H1</Text>
      </Flex>
      <Flex direction="column" align="stretch" gap="large">
        <Skeleton type="text" size="h2" />
        <Text type="text1">H2</Text>
      </Flex>
      <Flex direction="column" align="stretch" gap="large">
        <Skeleton type="text" size="small" />
        <Text type="text1">Paragraph</Text>
      </Flex>
    </Flex>
  ),
  name: "Text"
};

export const ComplexExample = {
  render: () => {
    return (
      <Flex align="stretch" direction="column" gap="small">
        <Flex gap="small">
          <Skeleton type="circle" />
          <Skeleton type="text" width={110} size="small" />
        </Flex>
        <Flex align="stretch" gap="medium">
          <Skeleton />
          <Flex align="stretch" direction="column" gap="small">
            <Skeleton type="text" size="h1" />
            <Skeleton type="text" size="h4" />
            <Skeleton type="text" size="h4" />
            <Skeleton type="text" size="h4" />
            <Skeleton type="text" size="h4" width={82} />
          </Flex>
        </Flex>
      </Flex>
    );
  }
};

export const UpdateInTheSystem = {
  render: () => {
    const [showSkeleton, setShowSkeleton] = useState(false);
    const [showBlock, setShowBlock] = useState(false);
    const [showReload, setShowReload] = useState(true);

    const onClickCallback = useCallback(() => {
      setShowReload(false);
      setShowBlock(false);
      setShowSkeleton(true);

      setTimeout(() => {
        setShowSkeleton(false);
      }, 4000);

      setTimeout(() => {
        setShowBlock(true);
      }, 4000);
    }, []);

    return (
      <Flex direction="column" gap="large" flex="1">
        {showBlock && (
          <Box border>
            <Flex direction="column" align="start" gap="medium" style={{ width: "730px", padding: "16px" }}>
              <Flex gap="small">
                <Avatar src={person} type="img" />
                <Text weight="bold">Julia Martinez</Text>
              </Flex>
              <Text type="text1" element="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </Text>
            </Flex>
            <Flex style={{ marginTop: "var(--space-24)", width: "100%" }}>
              <Button
                style={{
                  flexGrow: 1,
                  flexShrink: 1,
                  borderBottom: "none",
                  borderRight: "none",
                  borderLeft: "none"
                }}
                leftIcon={ThumbsUp}
                kind="secondary"
              >
                Like
              </Button>
              <Button
                style={{
                  flexGrow: 1,
                  flexShrink: 1,
                  borderBottom: "none",
                  borderRight: "none"
                }}
                leftIcon={Reply}
                kind="secondary"
              >
                Reply
              </Button>
            </Flex>
          </Box>
        )}
        {showSkeleton && (
          <Box border>
            <Flex direction="column" align="stretch" gap="medium" style={{ width: "730px", padding: "16px" }}>
              <Flex align="center" gap="small">
                <Skeleton type="circle" width={50} height={50} />
                <Skeleton type="text" size="h5" width={110} />
              </Flex>
              <Flex direction="column" align="stretch" gap="small">
                <Skeleton type="text" size="small" width={655} />
                <Skeleton type="text" size="small" width={680} />
                <Skeleton type="text" size="small" width={670} />
                <Skeleton type="text" size="small" width={675} />
                <Skeleton type="text" size="small" width={400} />
              </Flex>
            </Flex>
            <Flex
              justify="center"
              gap={300}
              style={{ marginTop: "var(--space-24)", width: "100%", paddingBlock: "var(--space-8)" }}
            >
              <Skeleton type="text" size="h2" width={60} />
              <Skeleton type="text" size="h2" width={60} />
            </Flex>
          </Box>
        )}
        <Button kind="secondary" onClick={onClickCallback}>
          {showReload ? "Load update" : "Reload update"}
        </Button>
      </Flex>
    );
  },

  name: "Update in the system"
};
