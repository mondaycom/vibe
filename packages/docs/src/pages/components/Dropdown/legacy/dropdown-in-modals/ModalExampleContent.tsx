import React, { type FC } from "react";
import { Flex, Skeleton } from "@vibe/core";

const ModalExampleContent: FC = () => {
  const children = Array.from({ length: 2 }, (_value, index: number) => (
    <Flex key={index} gap="small" style={{ width: "100%" }}>
      <Skeleton type={Skeleton.types.CIRCLE} width={30} height={30} />
      <Skeleton type={Skeleton.types.TEXT} fullWidth />
    </Flex>
  ));
  return (
    <Flex direction="column" align="start" gap="small">
      <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.TEXT.H1} fullWidth />
      {children}
    </Flex>
  );
};

export default ModalExampleContent;
