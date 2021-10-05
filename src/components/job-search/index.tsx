import { Container, Modal, SearchResult } from 'components';
import { useStore } from 'hooks';
import { observer } from 'mobx-react';

import FilterModal from './components/filter-modal';
import JobSearchLeftPanel from './components/left-panel';
import JobSearchRightPanel from './components/right-panel';
import styles from './job-search.module.scss';

const JobSearch = () => {
  const { SearchStore } = useStore();

  return (
    <>
      <SearchResult />
      <Container className={styles.root}>
        <JobSearchLeftPanel /> <JobSearchRightPanel />
      </Container>

      <Modal
        destroyOnClose
        visible={SearchStore.isFilterOpen}
        openModal={() => SearchStore.setIsFilterOpen(true)}
        closeModal={() => SearchStore.setIsFilterOpen(false)}
      >
        <FilterModal />
      </Modal>
    </>
  );
};

export default observer(JobSearch);
