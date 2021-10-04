import { computed, observable } from 'mobx';
import { ICompany, IJob } from 'types';

import JobsStore from './jobs';

interface Company extends ICompany {
  jobs: ReadonlyArray<Exclude<IJob, 'company'>>;
}

class CompaniesS {
  @observable private jobs = JobsStore.getJobs;

  @computed
  get getCompanies() {
    return this.jobs?.reduce((acc, current) => {
      const companyName = current.company.name;

      if (acc[companyName] === undefined) {
        return {
          ...acc,
          [companyName]: {
            ...current.company,
            jobs: [current],
          },
        };
      }

      return {
        ...acc,
        [companyName]: {
          ...acc[companyName],
          jobs: [...acc[companyName].jobs, current],
        },
      };
    }, {} as Record<string, Company>);
  }

  getCompanyByName = (name: string) => {
    return this.getCompanies?.[name];
  };
}

const ComanpiesStore = new CompaniesS();

export default ComanpiesStore;
