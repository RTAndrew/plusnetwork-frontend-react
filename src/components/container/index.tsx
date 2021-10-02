import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

import styles from './container.module.scss';

const Container: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...rest }) => {
  return (
    <div className={clsx(styles.root, className)} {...rest}>
      {children}
    </div>
  );
};

export default Container;
