import { Divider, Space } from 'antd';

import { Routes } from '../../../../constants';
import Menu from './menu';
import { MenuProps } from './menu/menu.types';
import styles from './settings-menu.module.scss';

const SettingsMenu = () => {
  const menuItems: MenuProps[] = [
    {
      name: 'Account',
      route: Routes.SettingsAccounts,
    },
    {
      name: 'Applied Jobs',
      route: Routes.SettingsAppliedJobs,
    },
    {
      name: 'Saved jobs',
      route: Routes.SettingsSavedJobs,
    },
  ];

  return (
    <Space className={styles.root} direction="vertical" split={<Divider style={{ margin: 0 }} />}>
      {menuItems.map((m) => (
        <Menu {...m} />
      ))}
    </Space>
  );
};

export default SettingsMenu;
