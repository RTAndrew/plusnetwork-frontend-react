import { Button, Checkbox, Divider, Slider, Space, Typography } from 'antd';
import { useStore } from 'hooks';
import { observer } from 'mobx-react';
import { useState } from 'react';
import { kNumberFormatter } from 'utils';

import styles from './filter-modal.module.scss';
import SectionWrapper from './section-wrapper';

const FilterModal = () => {
  const { SearchStore } = useStore();

  const [jobTypes, setJobTypes] = useState<string[]>(SearchStore.jobTypeQuery);
  const [salaryRange, setSalaryRange] = useState(SearchStore.salaryRangeQuery);
  const [industries, setIndustries] = useState<string[]>(SearchStore.industryQuery);
  const [workingMode, setWorkingMode] = useState<string[]>(SearchStore.workingModeQuery);
  const [jobLocation, setJobLocation] = useState<string[]>(SearchStore.jobLocationQuery);

  const marks = {
    [String(SearchStore.getSalaryRange.min)]: kNumberFormatter(SearchStore.getSalaryRange.min),
    [String(SearchStore.getSalaryRange.max)]: {
      style: {
        color: '#0096B0',
      },
      label: <strong>{kNumberFormatter(SearchStore.getSalaryRange.max)}</strong>,
    },
  };

  const onClear = () => {
    setJobTypes([]);
    setIndustries([]);
    setWorkingMode([]);
    setSalaryRange(0);
    setJobLocation([]);

    SearchStore.resetAllFilterQueries();
  };

  const onSave = () => {
    SearchStore.setJobTypeQuery(jobTypes);
    SearchStore.setIndustryQuery(industries);
    SearchStore.setSalaryRange(salaryRange);
    SearchStore.setWorkingMode(workingMode);
    SearchStore.setJobLocation(jobLocation);
  };

  return (
    <div className={styles.root}>
      <Typography.Title level={3} className={styles.header}>
        Get the job that fits you
      </Typography.Title>

      <Space size="large" direction="vertical" className={styles.section}>
        <SectionWrapper title="Salary Range">
          <Slider
            included
            step={1000}
            marks={marks}
            defaultValue={salaryRange}
            min={SearchStore.getSalaryRange.min}
            max={SearchStore.getSalaryRange.max}
            onAfterChange={(value) => setSalaryRange(value)}
          />
        </SectionWrapper>

        <SectionWrapper title="Industries">
          <Checkbox.Group
            defaultValue={industries}
            className={styles.checkboxGroup}
            options={SearchStore.getIndustries}
            onChange={(e) => setIndustries(e as unknown as string[])}
          />
        </SectionWrapper>

        <SectionWrapper title="Job Types">
          <Checkbox.Group
            defaultValue={jobTypes}
            className={styles.checkboxGroup}
            options={SearchStore.getJobTypes}
            onChange={(e) => setJobTypes(e as unknown as string[])}
          />
        </SectionWrapper>

        <SectionWrapper title="Working mode">
          <Checkbox.Group
            defaultValue={workingMode}
            className={styles.checkboxGroup}
            options={SearchStore.getAllWorkingMode}
            onChange={(e) => setWorkingMode(e as unknown as string[])}
          />
        </SectionWrapper>

        <SectionWrapper title="Location">
          <Checkbox.Group
            defaultValue={jobLocation}
            className={styles.checkboxGroup}
            options={SearchStore.getJobLocations}
            onChange={(e) => setJobLocation(e as unknown as string[])}
          />
        </SectionWrapper>
      </Space>

      <Divider />
      <div className={styles.footer}>
        <Button size="large" type="default" onClick={onClear}>
          Reset
        </Button>

        <Button size="large" type="primary" onClick={onSave}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default observer(FilterModal);
