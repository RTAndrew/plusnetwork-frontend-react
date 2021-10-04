import clsx from 'clsx';

import styles from './picture.module.scss';
import { PictureProps } from './picture.types';

const Picture = ({ src, size = 'small', className }: PictureProps) => {
  return <img className={clsx(styles.picture, styles[size], className)} src={src} alt="" />;
};

export default Picture;
