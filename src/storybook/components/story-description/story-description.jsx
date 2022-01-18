import { useMemo } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import Flex from "../../../components/Flex/Flex";
import classes from "./story-description.module.scss";

export const StoryDescription = ({ description, children, vertical }) => {
  const direction = useMemo(() => (vertical ? Flex.directions.COLUMN : Flex.directions.ROW), [vertical]);
  return (
    <Flex direction={direction} gap={Flex.gaps.MEDIUM} justify={Flex.justify.START}>
      <Flex
        className={cx(classes.description, { [classes.vertical]: vertical })}
        style={{ width: "100px" }}
        justify={Flex.justify.START}
        align={Flex.align.CENTER}
      >
        {description}
      </Flex>
      {children}
    </Flex>
  );
};

StoryDescription.propTypes = {
  description: PropTypes.string,
  children: PropTypes.element,
  vertical: PropTypes.bool
};

StoryDescription.defaultProps = {
  description: "",
  children: null,
  vertical: false
};
