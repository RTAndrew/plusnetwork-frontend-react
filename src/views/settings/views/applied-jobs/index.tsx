import { Typography } from 'antd';
import { EmptyState, JobCard } from 'components';
import { useStore } from 'hooks';
import { observer } from 'mobx-react';
import React from 'react';
import SettingsHeader from 'views/settings/components/settings-header';

const AppliedJobs = () => {
  const { JobsStore } = useStore();

  if (!JobsStore.appliedJobs || JobsStore.appliedJobs.length < 1)
    return (
      <EmptyState
        label="You have not applied to any job, yet!"
        icon={<Typography.Title level={1}> 😞 </Typography.Title>}
      />
    );

  return (
    <div>
      <SettingsHeader
        title="Applied Jobs"
        label={`${JobsStore.appliedJobs?.length} total applied jobs`}
      />

      {JobsStore.getAppliedJobs?.map((j) => (
        <JobCard job={j} />
      ))}
    </div>
  );
};

export default observer(AppliedJobs);
