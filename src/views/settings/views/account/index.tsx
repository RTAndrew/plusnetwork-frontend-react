import { Space, Typography } from 'antd';
import React from 'react';
import { uuid } from 'utils';
import SettingsHeader from 'views/settings/components/settings-header';

import { profileImage } from '../../../../constants';
import styles from './account.module.scss';
import { UserInformation } from './account.types';

const AccountView = () => {
  const userInformation: UserInformation[] = [
    {
      label: 'Email',
      description: 'asYongo@africaunited.com',
    },
    {
      label: 'Gender',
      description: 'Female',
    },
    {
      label: 'Age',
      description: '28 years old',
    },
    {
      label: 'Phone',
      description: '938-368-0237',
    },
    {
      label: 'Country',
      description: 'Wakanda',
    },
  ];

  return (
    <div>
      <SettingsHeader title="About" />

      <img src={profileImage} alt="" className={styles.profileImage} />
      <Typography.Title level={5} className={styles.userName}>
        Mafuta ya Nzoyi
      </Typography.Title>

      <div className={styles.userInformation}>
        {userInformation.map((i) => (
          <Space key={uuid()}>
            <Typography.Title level={5} type="secondary">
              {i.label}:
            </Typography.Title>
            <Typography.Title level={5}> {i.description} </Typography.Title>
          </Space>
        ))}
      </div>
    </div>
  );
};

export default AccountView;
