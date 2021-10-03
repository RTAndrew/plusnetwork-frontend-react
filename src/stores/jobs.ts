import { action, computed, observable } from 'mobx';
import { IJob } from 'types';

class JobS {
  @observable private jobs: IJob[] | null = null;

  @computed
  get getJobs() {
    return this.jobs;
  }

  @action setJobs(jobs: IJob[]) {
    this.jobs = jobs;
  }

  getJobById(id: string) {
    return this.jobs?.filter((j) => j.id === id)[0];
  }
}

const JobsStore = new JobS();

export default JobsStore;
