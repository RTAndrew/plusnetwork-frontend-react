import {
  DollarOutlined,
  EnvironmentOutlined,
  FolderOpenOutlined,
  HeartOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { Button, Space, Tag, Typography } from 'antd';
import { ElipseDivider } from 'components';
import { formatDistance } from 'date-fns';
import { useStore } from 'hooks';
import { useMemo } from 'react';
import { useParams } from 'react-router';
import { firstLetterUpperCase, kNumberFormatter, uuid } from 'utils';

import styles from './job-description.module.scss';
import { JobBriefing } from './job-description.types';

const JobDescription = () => {
  const { id } = useParams<{ id: string }>();
  const { JobsStore } = useStore();

  const job = useMemo(() => {
    return JobsStore.getJobById(id);
  }, [JobsStore, id]);

  const jobBriefings: JobBriefing[] = [
    {
      icon: <DollarOutlined />,
      label: `${kNumberFormatter(job?.salary.min!)} - ${kNumberFormatter(job?.salary.max!)} ${
        job?.salary.currency
      }`,
    },
    // { icon: <FolderOpenOutlined />, label:  },
    { icon: <FolderOpenOutlined />, label: firstLetterUpperCase(job?.jobType ?? '') },
    { icon: <EnvironmentOutlined />, label: firstLetterUpperCase(job?.presence ?? '') },
  ];

  if (!job) return <> Sorry, we could not find the job you are looking for </>;

  const { company, role, createdAt, skills } = job;

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <img className={styles.companyLogo} src={`${company.picture}${company.name}`} alt="" />

        <div className={styles.mainInfo}>
          <Typography.Title className={styles.role} level={3}>
            {role}
          </Typography.Title>
          <Space split={<ElipseDivider />} style={{ flexWrap: 'wrap' }}>
            <div>{firstLetterUpperCase(company.name.split('.')[0])}</div>
            <div>{company.location}</div>
            <div className={styles.time}>
              {formatDistance(new Date(createdAt.split('T')[0]), new Date(), { addSuffix: true })}
            </div>
          </Space>
        </div>
      </div>

      <Space className={styles.jobBriefingList} direction="vertical">
        {jobBriefings
          .filter((v) => v.label)
          .map((v) => (
            <div key={uuid()} className={styles.jobBriefing}>
              {v.icon}
              <Typography.Paragraph type="secondary" strong>
                {v.label}
              </Typography.Paragraph>
            </div>
          ))}
      </Space>

      <Space className={styles.skills}>
        {skills.map((v) => (
          <Tag>{firstLetterUpperCase(v)}</Tag>
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

export default JobDescription;
