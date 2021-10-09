import htmlParse from 'html-react-parser';
import { jobDescriptions } from 'mock/job-descriptions';

const JobBody = () => {
  /** Get a random description */
  const idx = Math.floor(Math.random() * (jobDescriptions.length - 0) + 0);

  return <div>{htmlParse(jobDescriptions[idx])}</div>;
};

export default JobBody;
