import { Typography } from 'antd';
import React from 'react';

import styles from './settings-header.module.scss';
import { SettingsHeaderProps } from './settings-header.types';

const SettingsHeader = ({ title, label }: SettingsHeaderProps) => {
  return (
    <div className={styles.root}>
      <Typography.Title level={3}> {title} </Typography.Title>
      {label && <Typography.Paragraph type="secondary"> {label} </Typography.Paragraph>}
    </div>
  );
};

export default SettingsHeader;
