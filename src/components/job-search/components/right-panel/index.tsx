import {
  DollarOutlined,
  EnvironmentOutlined,
  FileOutlined,
  FolderOpenOutlined,
  HeartOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { Button, Space, Typography } from 'antd';
import { ElipseDivider } from 'components';

import styles from './right-panel.module.scss';
import { JobBriefing } from './right-panel.types';

const JobSearchRightPanel = () => {
  const jobBriefings: JobBriefing[] = [
    { icon: <DollarOutlined />, label: '30k - 45k EUR' },
    { icon: <FileOutlined />, label: 'Internship' },
    { icon: <FolderOpenOutlined />, label: 'Contract' },
    { icon: <EnvironmentOutlined />, label: 'Hybrid' },
  ];

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <img
          className={styles.companyLogo}
          src="https://image.pngaaa.com/339/5468339-middle.png"
          alt=""
        />
        <div className={styles.mainInfo}>
          <Typography.Title className={styles.role} level={3}>
            Mid Frontend Software Engineer
          </Typography.Title>
          <Space split={<ElipseDivider />}>
            <div>Canon</div>
            <div>Munich, Germany</div>
            <div className={styles.time}>2hr ago</div>
          </Space>
        </div>
      </div>

      <Space className={styles.jobBriefingList} direction="vertical">
        {jobBriefings.map((v) => (
          <div className={styles.jobBriefing}>
            {v.icon}
            <Typography.Paragraph type="secondary" strong>
              {v.label}
            </Typography.Paragraph>
          </div>
        ))}
      </Space>

      <Space className={styles.applySection} size="large">
        <Button size="large" type="primary">
          Apply
        </Button>
        <Button type="text" shape="circle" icon={<HeartOutlined />} />
        <Button type="text" shape="circle" icon={<ShareAltOutlined />} />
      </Space>

      <Typography.Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis veniam illum delectus
        enim, culpa blanditiis eaque sunt incidunt earum nulla vel. Excepturi vero placeat rem
        similique! Praesentium temporibus necessitatibus molestias? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Corporis veniam illum delectus enim, culpa blanditiis eaque
        sunt incidunt earum nulla vel. Excepturi vero placeat rem similique! Praesentium temporibus
        necessitatibus molestias?
      </Typography.Paragraph>
    </div>
  );
};

export default JobSearchRightPanel;
