import { Typography } from 'antd';
import React, { FC } from 'react';

import styles from './section-wrapper.module.scss';
import { SectionWrapperProps } from './section-wrapper.types';

const SectionWrapper: FC<SectionWrapperProps> = ({ title, children }) => {
  return (
    <>
      <Typography.Title level={5} className={styles.header}>
        {title}
      </Typography.Title>

      {children}
    </>
  );
};

export default SectionWrapper;
