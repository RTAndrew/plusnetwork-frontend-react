import { useTitle } from 'ahooks';
import { Loading } from 'components';
import { useStore } from 'hooks';
import { observer } from 'mobx-react';
import Jobs from 'mock/generated.json';
import { FC, useCallback, useEffect, useState } from 'react';
import { IJob } from 'types';

/**
 * Hydrates the application with Jobs.
 * If there are no jobs, it will return an error, instead.
 * @param C the wrapped component
 */
const withHydrate = (C: FC) => {
  const Component = () => {
    const { JobsStore } = useStore();
    useTitle('Plus Network by Rtandrew Paul');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchJobs = useCallback(async () => {
      try {
        setLoading(true);

        // fake a promise for loading purpose
        await new Promise((res) => setTimeout(res, 500));

        const result = await Promise.resolve(Jobs as unknown as IJob[]);
        JobsStore.setJobs(result);

        // Hydrate Application
        await JobsStore.hydrateAppliedJobsFromLocalStorage();
        await JobsStore.hydrateSavedJobsFromLocalStorage();
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }, [JobsStore]);

    useEffect(() => {
      fetchJobs();
    }, [fetchJobs]);

    if (error) return <> Oops, we had an internal problem! Refresh the page, plz. </>;
    if (loading || (!loading && !error && !JobsStore.getJobs)) return <Loading />;

    return <C />;
  };

  return observer(Component);
};

export default withHydrate;
