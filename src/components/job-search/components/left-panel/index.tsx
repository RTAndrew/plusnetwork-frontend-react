import { Divider, Space } from 'antd';
import { JobCard } from 'components';
import { useStore } from 'hooks';
import { observer } from 'mobx-react';

import styles from './left-panel.module.scss';

const JobSearchLeftPanel = observer(() => {
  const { SearchStore } = useStore();

  return (
    <div className={styles.root}>
      <Space
        direction="vertical"
        style={{ width: '100%', gap: 0 }}
        split={<Divider style={{ margin: 0 }} />}
      >
        {SearchStore.getSearchResults?.map((v) => (
          <JobCard key={v.id} job={v} />
        ))}
      </Space>
    </div>
  );
});

export default JobSearchLeftPanel;
