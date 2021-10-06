import { JobCard } from 'components';
import { useStore } from 'hooks';
import { observer } from 'mobx-react';
import React from 'react';
import SettingsHeader from 'views/settings/components/settings-header';

const AppliedJobs = () => {
  const { JobsStore } = useStore();

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
