import { Space, Typography } from 'antd';
import { ElipseDivider } from 'components';

import styles from './job-card.module.scss';

const JobCard = () => {
  return (
    <div className={styles.root}>
      <img
        className={styles.companyLogo}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png"
        alt=""
      />
      <div className={styles.details}>
        <Typography.Title level={5}> Frontend Role (Remote) </Typography.Title>
        <Space split={<ElipseDivider />}>
          <Typography.Paragraph> Dell </Typography.Paragraph>
          <Typography.Paragraph> Senegal, Dakar </Typography.Paragraph>
        </Space>
        <div className={styles.footer}>
          <Typography.Paragraph type="secondary"> 2hr ago </Typography.Paragraph>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
