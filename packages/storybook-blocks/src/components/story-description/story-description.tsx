import React, { FC, useMemo } from 'react';
import cx from 'classnames';
import { ElementContent, withStaticProps } from '../../types';
import { FlexAlign, FlexDirection, FlexGap, FlexJustify } from '../../helpers/components/Flex/FlexConstants';
import Flex from '../../helpers/components/Flex/Flex';
import styles from './story-description.module.scss';

type StoryDescriptionProps = {
  align?: FlexAlign;
  description?: ElementContent;
  children: ElementContent;
  className?: string;
  headerAlign?: FlexAlign;
  headerJustify?: FlexJustify;
  headerStyle?: React.CSSProperties;
  justify?: FlexJustify;
  vertical?: boolean;
};

const StoryDescription: FC<StoryDescriptionProps> & {
  justify?: typeof FlexJustify;
  align?: typeof FlexAlign;
  gaps?: typeof FlexGap;
  directions?: typeof FlexDirection;
} = ({
  description = '',
  headerStyle,
  children,
  vertical = false,
  className,
  align,
  justify = StoryDescription.justify?.START,
  headerAlign,
  headerJustify,
}) => {
  const direction = useMemo(
    () => (vertical ? StoryDescription.directions?.COLUMN : StoryDescription.directions?.ROW),
    [vertical],
  );

  return (
    <Flex
      direction={direction}
      gap={StoryDescription.gaps?.MEDIUM}
      justify={justify}
      align={align || undefined}
      className={className}
    >
      <Flex
        className={cx(styles.description, { [styles.vertical]: vertical })}
        style={{ width: '120px', ...headerStyle }}
        justify={headerJustify}
        align={headerAlign || StoryDescription.align?.CENTER}
      >
        {description}
      </Flex>
      {children}
    </Flex>
  );
};

export default withStaticProps(StoryDescription, {
  justify: FlexJustify,
  align: FlexAlign,
  gaps: FlexGap,
  directions: FlexDirection,
});
