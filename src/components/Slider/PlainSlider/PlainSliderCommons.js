import PropTypes from "prop-types";

export { COMPONENT_ID } from "../SliderCommons";

// TODO: move to common constants?
export const SIZES_BASIC = Object.freeze({
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
});

export const PlainSliderProps = {
  /**
   * Define a string that labels the current element (Slider)
   */
  ariaLabel: PropTypes.string,
  /**
   * ElementId of Node that have the text needed for labeling the current element (Slider)
   */
  ariaLabeledBy: PropTypes.string,
  /**
   * Custom `class name` to be added to the component-root-node
   */
  className: PropTypes.string,
  /**
   * Custom base of class names for add to component-root and component-internal nodes
   */
  classNameBase: PropTypes.string,
  /**
   * Attribute `id` to be added to the component-root-node
   */
  id: PropTypes.string,
  /**
   * Max range value of the component (Slider)
   */
  max: PropTypes.number,
  /**
   * Min range value of the component (Slider)
   */
  min: PropTypes.number,
  /**
   * Optional onChange callback (for outer trigger or Controlled mode)
   */
  onChange: PropTypes.func,
  /**
   * Size small/medium/large of the component (Slider)
   */
  size: PropTypes.oneOf(Object.values(SIZES_BASIC)),
  /**
   * Current/selected value of the range of the component (Slider)
   */
  value: PropTypes.number,
  /**
   * Default value if value not specified
   */
  valueDefault: PropTypes.number,
  /**
   * Formatter function `value => formattedValue`
   * default formatter return `${value}%`
   */
  valueFormatter: PropTypes.func,
  /**
   * Text/presentation of current/selected value
   */
  valueText: PropTypes.string
};

export const PlainSliderDefaultProps = {
  ariaLabel: undefined,
  ariaLabeledBy: undefined,
  className: "",
  classNameBase: "",
  id: undefined,
  max: 100,
  min: 0,
  onChange: undefined,
  size: SIZES_BASIC.SMALL,
  value: undefined,
  valueDefault: 0,
  valueFormatter: value => `${value}%`,
  valueText: undefined
};

export function calcDimensions(max, min, value) {
  const valuePoints = max - min;
  const dimension = Math.round((value * 100) / valuePoints);
  const position = dimension;
  return { dimension, position };
}
