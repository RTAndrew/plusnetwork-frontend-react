import { HTMLAttributes } from 'react';

export interface PictureProps extends HTMLAttributes<HTMLDivElement['className']> {
  src: string;
  size?: 'small' | 'large';
}
