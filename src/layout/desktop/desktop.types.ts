import { ReactNode } from 'react';

export interface DesktopLayoutProps {
  leftPanel: ReactNode;
  rightPanel: ReactNode;
  leftPanelSize?: number;
  rightPanelSize?: number;
}
