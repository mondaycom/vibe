import React from "react";
import Avatar from "../../Avatar/Avatar";
import { Flex } from "../../Flex";
import { Text } from "../../Text";
export const OptionRenderer = ({ src, type, size, name, position }: any) => {
  return (
    <Flex gap="small">
      <Avatar size={size} src={src} type={type} key={name} />
      <Flex gap="xs">
        <Text>{name}</Text>
        <Text color="secondary">{position}</Text>
      </Flex>
    </Flex>
  );
};
