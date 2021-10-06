import { Typography } from 'antd';
import { EmptyState, JobCard } from 'components';
import { useStore } from 'hooks';
import React from 'react';
import SettingsHeader from 'views/settings/components/settings-header';

const SavedJobs = () => {
  const { JobsStore } = useStore();

  if (!JobsStore.savedJobs || JobsStore.savedJobs.length < 1)
    return (
      <EmptyState
        label="You have not saved any job, yet"
        icon={<Typography.Title level={1}> 😞 </Typography.Title>}
      />
    );

  return (
    <div>
      <SettingsHeader
        title="Saved Jobs"
        label={`${JobsStore.savedJobs?.length ?? 0} total saved jobs`}
      />

      {JobsStore.getSavedJobs?.map((j) => (
        <JobCard job={j} />
      ))}
    </div>
  );
};

export default SavedJobs;
