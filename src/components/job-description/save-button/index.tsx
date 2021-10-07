import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import clsx from 'clsx';
import { useStore } from 'hooks';
import { observer } from 'mobx-react';

import styles from './save-button.module.scss';
import { SaveButtonProps } from './save-button.types';

const SaveButton = ({ id }: SaveButtonProps) => {
  const { JobsStore } = useStore();

  const onClick = () => {
    JobsStore.saveJob(id);
  };

  const isActive = JobsStore.savedJobs?.includes(id);

  return (
    <Tooltip title={`${isActive ? 'Unsave job' : 'Save Job'}`} placement="top">
      <div className={clsx(styles.button, isActive && styles.isActive)} onClick={onClick}>
        {isActive ? <HeartFilled /> : <HeartOutlined />}
      </div>
    </Tooltip>
  );
};

export default observer(SaveButton);
