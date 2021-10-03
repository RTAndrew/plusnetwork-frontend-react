import { useStore } from 'hooks';
import { observer } from 'mobx-react';
import Jobs from 'mock/generated.json';
import { FC, useCallback, useEffect } from 'react';
import { IJob } from 'types';

/**
 * Hydrates the application with Jobs.
 * If there are no jobs, it will return an error, instead.
 * @param C the wrapped component
 */
const withHydrate = (C: FC) => {
  const Component = () => {
    const { JobsStore } = useStore();

    const fetchJobs = useCallback(async () => {
      try {
        const result = await Promise.resolve<IJob[]>(Jobs);
        JobsStore.setJobs(result);
      } catch (error) {
        console.log(error);
      }
    }, [JobsStore]);

    useEffect(() => {
      fetchJobs();
    }, [fetchJobs]);

    return JobsStore.getJobs ? <C /> : <> Anderson </>;
  };

  return observer(Component);
};

export default withHydrate;
