import { Modal } from 'components';
import { useStore } from 'hooks';
import { DesktopLayout } from 'layout';
import { observer } from 'mobx-react';

import FilterModal from './components/filter-modal';
import JobSearchLeftPanel from './components/left-panel';
import JobSearchRightPanel from './components/right-panel';

const JobView = () => {
  const { SearchStore } = useStore();

  return (
    <>
      <DesktopLayout
        leftPanel={<JobSearchLeftPanel />}
        leftPanelSize={40}
        rightPanelSize={60}
        rightPanel={<JobSearchRightPanel />}
      />

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

export default observer(JobView);
