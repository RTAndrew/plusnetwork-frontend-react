import { CompanyDescription, JobDescription } from 'components';
import { Route, Switch } from 'react-router';

import styles from './right-panel.module.scss';

const JobSearchRightPanel = () => {
  return (
    <div className={styles.root}>
      <Switch>
        <Route path="/jobs/:id" component={JobDescription} />
        <Route path="/companies/:id" component={CompanyDescription} />
      </Switch>
    </div>
  );
};

export default JobSearchRightPanel;
