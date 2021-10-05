import { HTMLAttributes, ReactNode } from 'react';

export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement['className']> {
  label: string;
  title?: string;
  icon: ReactNode;
}
