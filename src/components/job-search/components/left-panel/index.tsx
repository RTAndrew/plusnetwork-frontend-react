import { SettingOutlined } from '@ant-design/icons';
import { Divider, Space, Typography } from 'antd';
import { JobCard } from 'components';
import { useStore } from 'hooks';
import { observer } from 'mobx-react';

import styles from './left-panel.module.scss';

const JobSearchLeftPanel = observer(() => {
  const { SearchStore } = useStore();

  return (
    <div className={styles.root}>
      <div className={styles.searchResult}>
        <Typography.Paragraph type="secondary" strong>
          {SearchStore.getSearchResults?.length} results
        </Typography.Paragraph>

        <Space
          size="small"
          className={styles.filter}
          onClick={() => SearchStore.setIsFilterOpen(true)}
        >
          <Typography.Paragraph type="secondary" strong>
            Filter
          </Typography.Paragraph>
          <SettingOutlined />
        </Space>
      </div>

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
