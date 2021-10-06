import { CheckCircleFilled } from '@ant-design/icons';
import { Button } from 'antd';
import { useStore } from 'hooks';
import { observer } from 'mobx-react';
import { useState } from 'react';

import styles from './apply-button.module.scss';
import { ApplyButtonProps } from './apply-button.types';

const ApplyButton = ({ id }: ApplyButtonProps) => {
  const { JobsStore } = useStore();

  const [loading, setLoading] = useState(false);

  const onJobApplication = async () => {
    try {
      setLoading(true);
      // fake a promise for loading purpose
      await new Promise((res) => setTimeout(res, 1500));
      await JobsStore.applyToJob(id);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (JobsStore.appliedJobs?.includes(id))
    return (
      <div className={styles.alreadyApplied}>
        <CheckCircleFilled /> Already applied
      </div>
    );

  return (
    <Button loading={loading} size="large" type="primary" onClick={onJobApplication}>
      Apply
    </Button>
  );
};

export default observer(ApplyButton);
