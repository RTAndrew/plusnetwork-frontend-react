import { Container, SearchResult } from 'components';

import JobSearchLeftPanel from './components/left-panel';
import JobSearchRightPanel from './components/right-panel';
import styles from './job-search.module.scss';

const JobSearch = () => {
  return (
    <>
      <SearchResult />
      <Container className={styles.root}>
        <JobSearchLeftPanel /> <JobSearchRightPanel />
      </Container>
    </>
  );
};

export default JobSearch;
