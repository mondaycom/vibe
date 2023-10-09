import React, { useMemo } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Flex from '../../helpers/components/Flex/Flex';
import styles from './story-description.module.scss';

const StoryDescription = ({
  description,
  headerStyle,
  children,
  vertical,
  className,
  align,
  justify,
  headerAlign,
  headerJustify,
}) => {
  const direction = useMemo(() => (vertical ? Flex.directions.COLUMN : Flex.directions.ROW), [vertical]);

  return (
    <Flex
      direction={direction}
      gap={Flex.gaps.MEDIUM}
      justify={justify || Flex.justify.START}
      align={align || undefined}
      className={className}
    >
      <Flex
        className={cx(styles.description, { [styles.vertical]: vertical })}
        style={{ width: '120px', ...headerStyle }}
        justify={headerJustify || Flex.justify.START}
        align={headerAlign || Flex.align.CENTER}
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
  vertical: PropTypes.bool,
};

StoryDescription.defaultProps = {
  description: '',
  children: null,
  vertical: false,
};

export default StoryDescription;
