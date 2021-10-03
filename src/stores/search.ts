import { action, computed, observable } from 'mobx';

import JobsStore from './jobs';

class SearchS {
  @observable private searchQuery = '';
  @observable private jobs = JobsStore.getJobs;
  @observable private activeJobId = '';

  @computed
  get getActiveJobId() {
    return this.activeJobId;
  }

  @computed
  get getSearchResults() {
    if (this.jobs === null) return null;

    if (this.searchQuery === '') return this.jobs;

    const filteredByRole = this.jobs.filter((i) =>
      i.role.toLowerCase().includes(this.searchQuery.toLowerCase()),
    );
    const filteredByCompanyName = this.jobs.filter((i) =>
      i.company.name.toLowerCase().includes(this.searchQuery.toLowerCase()),
    );

    return filteredByRole.length > 0 ? filteredByRole : filteredByCompanyName;
  }

  @action setSearchQuery(query: string) {
    this.searchQuery = query;
  }

  @action setActiveJobId(id: string) {
    this.activeJobId = id;
  }

  getJobById(id: string) {
    return this.jobs?.filter((j) => j.id === id)[0];
  }
}

const SearchStore = new SearchS();

export default SearchStore;
