import { Typography } from 'antd';
import clsx from 'clsx';
import { useHistory, useLocation } from 'react-router';

import styles from './menu.module.scss';
import { MenuProps } from './menu.types';

const Menu = ({ name, route }: MenuProps) => {
  const history = useHistory();
  const { pathname } = useLocation();

  const isActive = pathname === route;

  const onRoute = () => {
    history.push(route);
  };

  return (
    <div className={clsx(styles.root, isActive && styles.isActive)} onClick={onRoute}>
      <Typography.Paragraph> {name} </Typography.Paragraph>
    </div>
  );
};

export default Menu;
