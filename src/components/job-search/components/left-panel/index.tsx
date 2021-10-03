import { Divider, Space } from 'antd';
import JobCard from 'components/job-card';
import { useStore } from 'hooks';
import { observer } from 'mobx-react';

import styles from './left-panel.module.scss';

const JobSearchLeftPanel = observer(() => {
  const { JobsStore } = useStore();

  return (
    <div className={styles.root}>
      <Space
        direction="vertical"
        split={<Divider style={{ margin: 0 }} />}
        style={{ width: '100%', gap: 0 }}
      >
        {JobsStore.getJobs?.map((v) => (
          <JobCard key={v.id} job={v} />
        ))}
      </Space>
    </div>
  );
});

export default JobSearchLeftPanel;
