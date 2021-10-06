import { LocalStorageKeys } from 'constants/local-storage';
import { action, computed, observable } from 'mobx';
import { IJob } from 'types';

class JobS {
  @observable private jobs: IJob[] | null = null;
  @observable public savedJobs: string[] | null = null;
  @observable public appliedJobs: string[] | null = null;

  @computed
  get getJobs() {
    return this.jobs;
  }

  @computed
  get getAppliedJobs() {
    return this.jobs?.flatMap((j) => {
      if (this.appliedJobs?.includes(j.id)) return [j];
      return [];
    });
  }

  @computed
  get getSavedJobs() {
    return this.jobs?.flatMap((j) => {
      if (this.savedJobs?.includes(j.id)) return [j];
      return [];
    });
  }

  @action setJobs(jobs: IJob[]) {
    this.jobs = jobs;
  }

  @action setAppliedJobs(jobs: string[]) {
    this.appliedJobs = jobs;
  }

  @action async applyToJob(job: string) {
    if (this.appliedJobs?.includes(job)) return;

    this.appliedJobs = [...(this.appliedJobs ?? []), job];
    await this.saveAppliedJobsToLocalStorage();
  }

  /**
   * Persist the applied jobs into LocalStorage
   */
  @action async saveAppliedJobsToLocalStorage() {
    try {
      window.localStorage.setItem(LocalStorageKeys.AppliedJobs, JSON.stringify(this.appliedJobs));
    } catch (error) {
      throw new Error(error as string);
    }
  }

  /** Hydrate the storage the applied jobs
   *  saved in from LocalStorage.
   */
  @action async hydrateAppliedJobsFromLocalStorage() {
    try {
      const result = window.localStorage.getItem(LocalStorageKeys.AppliedJobs);
      if (!result) return;
      this.appliedJobs = JSON.parse(result);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  @action setSavedJobs(jobs: string[]) {
    this.savedJobs = jobs;
  }

  getJobById(id: string) {
    return this.jobs?.filter((j) => j.id === id)[0];
  }
}

const JobsStore = new JobS();

export default JobsStore;
