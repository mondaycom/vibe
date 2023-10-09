import React, { useMemo } from 'react';
import cx from 'classnames';
import { FlexAlign, FlexDirection, FlexGap, FlexJustify } from './FlexConstants';
import { getStyle } from '../../utils/typesciptCssModulesHelper';
import { ElementContent, withStaticProps } from '../../../types';
import { VibeComponentProps } from '../../types';
import styles from './Flex.module.scss';

interface FlexProps extends VibeComponentProps {
  style?: object;
  direction?: FlexDirection;
  elementType?: React.ElementType;
  wrap?: boolean;
  children?: ElementContent | Array<ElementContent>;
  justify?: FlexJustify;
  align?: FlexAlign;
  gap?: FlexGap | number;
  ariaLabel?: string;
  tabIndex?: number;
  /** onClick function - MouseEvent */
  onClick?: (event: React.MouseEvent) => void;
  /** element id to describe the counter accordingly */
  ariaLabelledby?: string;
}

const Flex: React.FC<FlexProps> & {
  justify?: typeof FlexJustify;
  align?: typeof FlexAlign;
  gaps?: typeof FlexGap;
  directions?: typeof FlexDirection;
} = ({
  className,
  id,
  elementType = 'div',
  direction = Flex.directions?.ROW,
  wrap = false,
  children,
  justify = Flex.justify?.START,
  align = Flex.align?.CENTER,
  gap = Flex.gaps?.NONE,
  onClick,
  style,
  ariaLabelledby,
  ariaLabel,
  tabIndex,
  'data-testid': dataTestId,
}) => {
  const overrideStyle = useMemo(() => ({ ...style, gap: `${gap}px` }), [style, gap]);
  const onClickProps = useMemo(() => {
    if (onClick) return { elementType, ariaLabelledby };

    return { 'aria-labelledby': ariaLabelledby };
  }, [onClick, elementType, ariaLabelledby]);
  const Element = elementType;

  return (
    <Element
      id={id}
      data-testid={dataTestId}
      {...onClickProps}
      className={cx(
        styles.container,
        getStyle(styles, `direction${direction}`),
        getStyle(styles, `justify${justify}`),
        getStyle(styles, `align${align}`),
        className,
        {
          [styles.wrap]: wrap,
        },
      )}
      tabIndex={tabIndex}
      onClick={onClick}
      style={overrideStyle}
      aria-label={ariaLabel}
    >
      {children}
    </Element>
  );
};

export default withStaticProps(Flex, {
  justify: FlexJustify,
  align: FlexAlign,
  gaps: FlexGap,
  directions: FlexDirection,
});
