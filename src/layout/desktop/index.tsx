import { Container } from 'components';

import styles from './desktop.module.scss';
import { DesktopLayoutProps } from './desktop.types';

const DesktopLayout = ({
  leftPanel,
  rightPanel,
  leftPanelSize = 35,
  rightPanelSize = 100,
}: DesktopLayoutProps) => {
  return (
    <Container className={styles.root}>
      <div className={styles.leftPanel} style={{ width: `${leftPanelSize}%` }}>
        {leftPanel}
      </div>
      <div className={styles.rightPanel} style={{ width: `${rightPanelSize}%` }}>
        {rightPanel}
      </div>
    </Container>
  );
};

export default DesktopLayout;
