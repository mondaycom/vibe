import PropTypes from "prop-types";
import Flex from "../../../components/Flex/Flex";
import classes from "./story-description.module.scss";

export const StoryDescription = ({ description, children, vertical }) => (
  <Flex
    vertical={vertical}
    horizontalSpacingSize={Flex.horizontalSpacingSizes.MEDIUM}
    verticalSpacingSize={Flex.verticalSpacingSizes.MEDIUM}
    verticalPosition={Flex.verticalPositions.CENTER}
  >
    <Flex
      className={classes["description"]}
      style={{ width: "100px" }}
      horizontalPosition={Flex.horizontalPositions.CENTER}
      verticalPosition={Flex.verticalPositions.CENTER}
    >
      {description}
    </Flex>
    {children}
  </Flex>
);

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
