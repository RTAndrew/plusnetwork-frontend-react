export interface Salary {
  min: string;
  max: string;
  currency: string;
}

export type TPresence = 'remote' | 'hybrid' | 'on-site';
export type TJobType = 'full-time' | 'part-time' | 'temporary' | 'volunteer' | 'internship';

export interface Company {
  picture: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  employees: string;
  industry: string;
}

export interface IJob {
  id: string;
  role: string;
  jobType: TJobType;
  presence: TPresence;
  salary: Salary;
  createdAt: string;
  location: string;
  description: string;
  skills: string[];
  company: Company;
}
