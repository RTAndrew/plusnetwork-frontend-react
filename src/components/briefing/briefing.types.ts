import { HTMLAttributes, ReactNode } from 'react';

export interface IBriefing {
  label: string;
  icon: ReactNode;
}
export interface BriefingProps extends HTMLAttributes<HTMLDivElement['className']> {
  brief: ReadonlyArray<IBriefing>;
}
