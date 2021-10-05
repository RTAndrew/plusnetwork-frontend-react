import { action, computed, observable } from 'mobx';
import * as R from 'remeda';

import JobsStore from './jobs';

interface SalaryRange {
  min: number;
  max: number;
}

class SearchS {
  @observable private searchQuery = '';
  @observable private activeJobId = '';
  /** It opens the filter modal */
  @observable public isFilterOpen = false;
  @observable private jobs = JobsStore.getJobs;

  // filter queries
  @observable public salaryRangeQuery = 0;
  @observable public jobTypeQuery: string[] = [];
  @observable public industryQuery: string[] = [];
  @observable public workingModeQuery: string[] = [];
  @observable public jobLocationQuery: string[] = [];

  @computed
  get getActiveJobId() {
    return this.activeJobId;
  }

  @computed
  get getSearchResults() {
    if (this.jobs === null) return null;

    // Search for the query filters first
    // and searchQuery secondly
    const filterSearch = this.jobs.flatMap((j) => {
      const isSalaryInRange = j.salary.max >= this.salaryRangeQuery;

      // Verify if there is actually queries for jobType or jobIndustry
      // If there is none, fallback to true because there is no query
      const isWithinJobIndustry =
        this.industryQuery.length > 0 ? this.industryQuery.includes(j.company.industry) : true;

      const isWithinJobType =
        this.jobTypeQuery.length > 0 ? this.jobTypeQuery.includes(j.jobType) : true;

      const isWithinJobPresence =
        this.workingModeQuery.length > 0 ? this.workingModeQuery.includes(j.presence) : true;

      const isWithinJobLocation =
        this.jobLocationQuery.length > 0 ? this.jobLocationQuery.includes(j.location) : true;

      // assert only once
      const isWithinJobSearch =
        isWithinJobType && isWithinJobIndustry && isWithinJobPresence && isWithinJobLocation;

      if (isSalaryInRange && isWithinJobSearch) return j;

      return [];
    });

    if (this.searchQuery === '') return filterSearch;

    const filteredByRole = filterSearch.filter((i) =>
      i.role.toLowerCase().includes(this.searchQuery.toLowerCase()),
    );
    const filteredByCompanyName = filterSearch.filter((i) =>
      i.company.name.toLowerCase().includes(this.searchQuery.toLowerCase()),
    );

    return filteredByRole.length > 0 ? filteredByRole : filteredByCompanyName;
  }

  @computed
  get getIndustries() {
    return R.pipe(
      this.jobs ?? [],
      R.map((x) => x.company.industry),
      R.uniq(),
    );
  }

  @computed
  get getJobTypes() {
    return R.pipe(
      this.jobs ?? [],
      R.map((x) => x.jobType),
      R.uniq(),
    );
  }

  @computed
  get getAllWorkingMode() {
    return R.pipe(
      this.jobs ?? [],
      R.map((x) => x.presence),
      R.uniq(),
    );
  }

  @computed
  get getJobLocations() {
    return R.pipe(
      this.jobs ?? [],
      R.map((x) => x.location),
      R.uniq(),
      R.take(7),
    );
  }

  @computed
  get getSalaryRange() {
    return (this.jobs ?? []).reduce(
      (acc, curr, idx) => {
        const min = curr.salary.min;
        const max = curr.salary.max;

        if (idx === 0)
          return {
            min: min,
            max: max,
          };

        return {
          min: min < acc.min ? min : acc.min,
          max: max > acc.max ? max : acc.max,
        };
      },
      { min: 0, max: 0 } as SalaryRange,
    );
  }

  @action resetAllFilterQueries() {
    this.jobTypeQuery = [];
    this.industryQuery = [];
    this.salaryRangeQuery = 0;
    this.workingModeQuery = [];
    this.jobLocationQuery = [];
  }

  @action setSearchQuery(query: string) {
    this.searchQuery = query;
  }

  @action setIndustryQuery(queries: string[]) {
    this.industryQuery = queries;
  }

  @action setJobTypeQuery(queries: string[]) {
    this.jobTypeQuery = queries;
  }

  @action setSalaryRange(value: number) {
    this.salaryRangeQuery = value;
  }

  @action setWorkingMode(queries: string[]) {
    this.workingModeQuery = queries;
  }

  @action setJobLocation(queries: string[]) {
    this.jobLocationQuery = queries;
  }

  @action setActiveJobId(id: string) {
    this.activeJobId = id;
  }

  @action setIsFilterOpen(value: boolean) {
    this.isFilterOpen = value;
  }

  getJobById(id: string) {
    return this.jobs?.filter((j) => j.id === id)[0];
  }
}

const SearchStore = new SearchS();

export default SearchStore;
