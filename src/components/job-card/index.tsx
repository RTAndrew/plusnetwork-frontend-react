import { Space, Typography } from 'antd';
import clsx from 'clsx';
import { ElipseDivider } from 'components';
import { formatDistance } from 'date-fns';
import { useStore } from 'hooks';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router';
import { firstLetterUpperCase } from 'utils';

import { Routes } from '../../constants';
import styles from './job-card.module.scss';
import { JobCardProps } from './job-card.types';

const JobCard = ({ job }: JobCardProps) => {
  let history = useHistory();
  const { SearchStore } = useStore();

  const { company, role, createdAt, location, id } = job;
  const isActive = SearchStore.getActiveJobId === id;

  const onClick = () => {
    SearchStore.setActiveJobId(id);
    history.push(`${Routes.Jobs}/${id}`);
  };

  console.log(isActive);

  return (
    <div onClick={onClick} className={clsx(styles.root, isActive && styles.active)}>
      <img className={styles.companyLogo} src={`${company.picture}${company.name}`} alt="" />
      <div className={styles.details}>
        <Typography.Paragraph className={styles.role}>{role}</Typography.Paragraph>
        <Space split={<ElipseDivider />}>
          <Typography.Paragraph>
            {firstLetterUpperCase(company.name.split('.')[0])}
          </Typography.Paragraph>
          <Typography.Paragraph> {location} </Typography.Paragraph>
        </Space>
        <div className={styles.footer}>
          <Typography.Paragraph type="secondary">
            {formatDistance(new Date(createdAt.split('T')[0]), new Date(), { addSuffix: true })}
          </Typography.Paragraph>
        </div>
      </div>
    </div>
  );
};

export default observer(JobCard);
