import { Divider, Space } from 'antd';
import JobCard from 'components/job-card';

import styles from './left-panel.module.scss';

const JobSearchLeftPanel = () => {
  return (
    <div className={styles.root}>
      <Space
        direction="vertical"
        split={<Divider style={{ margin: 0 }} />}
        style={{ width: '100%' }}
      >
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </Space>
    </div>
  );
};

export default JobSearchLeftPanel;
