import { ICompany } from './company';
import { ISalary } from './salary';

export type TPresence = 'remote' | 'hybrid' | 'on-site';
export type TJobType = 'full-time' | 'part-time' | 'temporary' | 'volunteer' | 'internship';

export interface IJob {
  id: string;
  role: string;
  jobType: TJobType;
  presence: TPresence;
  salary: ISalary;
  createdAt: string;
  location: string;
  description: string;
  skills: string[];
  company: ICompany;
}
