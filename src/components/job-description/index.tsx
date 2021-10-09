import {
  DollarOutlined,
  EnvironmentOutlined,
  FolderOpenOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { Space, Tag, Typography } from 'antd';
import { Briefing, ElipseDivider, Picture } from 'components';
import { IBriefing } from 'components/briefing/briefing.types';
import { formatDistance } from 'date-fns';
import { useStore } from 'hooks';
import React, { useMemo } from 'react';
import { useHistory, useParams } from 'react-router';
import { firstLetterUpperCase, kNumberFormatter } from 'utils';

import { Routes } from '../../constants';
import ApplyButton from './apply-button';
import JobBody from './body';
import styles from './job-description.module.scss';
import SaveButton from './save-button';

const JobDescription = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const { JobsStore } = useStore();

  const job = useMemo(() => {
    return JobsStore.getJobById(id);
  }, [JobsStore, id]);

  const onCompanyClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    history.push(`${Routes.Companies}/${company.name}`);
  };

  const jobBriefings: ReadonlyArray<IBriefing> = [
    {
      icon: <DollarOutlined />,
      label: `${kNumberFormatter(job?.salary.min!)} - ${kNumberFormatter(job?.salary.max!)} ${
        job?.salary.currency
      }`,
    },
    { icon: <FolderOpenOutlined />, label: firstLetterUpperCase(job?.jobType ?? '') },
    { icon: <EnvironmentOutlined />, label: firstLetterUpperCase(job?.presence ?? '') },
  ];

  if (!job) return <> Sorry, we could not find the job you are looking for </>;

  const { company, role, createdAt, skills } = job;

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Picture src={`${company.picture}${company.name}`} size="large" />

        <div className={styles.mainInfo}>
          <Typography.Title className={styles.role} level={3}>
            {role}
          </Typography.Title>
          <Space split={<ElipseDivider />} style={{ flexWrap: 'wrap' }}>
            <Typography.Link onClick={onCompanyClick} className={styles.companyName}>
              {firstLetterUpperCase(company.name.split('.')[0])}
            </Typography.Link>
            <div>{company.location}</div>
            <div className={styles.time}>
              {formatDistance(new Date(createdAt.split('T')[0]), new Date(), { addSuffix: true })}
            </div>
          </Space>
        </div>
      </div>

      <Briefing className={styles.jobBriefingList} brief={jobBriefings} />

      <Space className={styles.skills}>
        {skills.map((v) => (
          <Tag>{firstLetterUpperCase(v)}</Tag>
        ))}
      </Space>

      <Space className={styles.applySection} size="large">
        <ApplyButton id={id} />

        <SaveButton id={id} />

        <ShareAltOutlined />
      </Space>

      <JobBody />
    </div>
  );
};

export default JobDescription;
