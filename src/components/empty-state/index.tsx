import { Typography } from 'antd';
import clsx from 'clsx';

import styles from './empty-state.module.scss';
import { EmptyStateProps } from './empty-state.types';

const EmptyState = ({ title, label, icon, className }: EmptyStateProps) => {
  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.wrapper}>
        <span className={styles.icon}> {icon} </span>

        <div className={styles.body}>
          {title && <Typography.Title level={3}> {title} </Typography.Title>}
          <Typography.Paragraph type="secondary" className={styles.label}>
            {label}
          </Typography.Paragraph>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
