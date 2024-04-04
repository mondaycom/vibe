import React, { FC } from "react";
import { Flex, Skeleton } from "../../../components";
import "./Dialog.stories.scss";

export interface ExampleContent {
  rowsCount?: number;
}
export const ExampleContent: FC<ExampleContent> = ({ rowsCount = 3 }) => {
  const children = Array.from({ length: rowsCount }, (_value, index: number) => (
    <Flex key={index} gap={Flex.gaps.SMALL} style={{ width: "100%" }}>
      <Skeleton type={Skeleton.types.CIRCLE} width={20} height={20} />
      <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.TEXT.SMALL} fullWidth />
    </Flex>
  ));
  return (
    <Flex
      direction={Flex.directions.COLUMN}
      align={Flex.align.START}
      gap={Flex.gaps.SMALL}
      className="monday-storybook-dialog_content-example"
    >
      <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.TEXT.H1} fullWidth />
      {children}
    </Flex>
  );
};
