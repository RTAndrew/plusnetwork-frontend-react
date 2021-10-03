import { HTMLAttributes } from 'react';

import styles from './elipse-divider.module.scss';

const ElipseDivider = ({ ...rest }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={styles.root} {...rest} />;
};

export default ElipseDivider;
