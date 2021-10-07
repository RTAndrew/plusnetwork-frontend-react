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

  @action async saveJob(job: string) {
    if (this.savedJobs?.includes(job)) this.savedJobs = this.savedJobs.filter((s) => s !== job);
    else this.savedJobs = [...(this.savedJobs ?? []), job];

    await this.saveSavedJobsToLocalStorage();
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

  /**
   * Persist the saved jobs into LocalStorage
   */
  @action async saveSavedJobsToLocalStorage() {
    try {
      window.localStorage.setItem(LocalStorageKeys.SavedJobs, JSON.stringify(this.savedJobs));
    } catch (error) {
      throw new Error(error as string);
    }
  }

  /** Hydrate the applied jobs saved in from LocalStorage */
  @action async hydrateAppliedJobsFromLocalStorage() {
    try {
      const result = window.localStorage.getItem(LocalStorageKeys.AppliedJobs);
      if (!result) return;

      this.appliedJobs = JSON.parse(result);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  /** Hydrate the saved jobs saved in from LocalStorage */
  @action async hydrateSavedJobsFromLocalStorage() {
    try {
      const result = window.localStorage.getItem(LocalStorageKeys.SavedJobs);
      if (!result) return;

      this.savedJobs = JSON.parse(result);
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
