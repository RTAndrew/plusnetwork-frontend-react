import { Typography } from 'antd';
import { CompanyDescription, EmptyState, JobDescription } from 'components';
import { Route, Switch } from 'react-router';

import styles from './right-panel.module.scss';

const JobSearchRightPanel = () => {
  return (
    <>
      <Switch>
        <Route path="/jobs/:id" component={JobDescription} />
        <Route path="/companies/:id" component={CompanyDescription} />

        {/* Fallback Route */}
        <Route path="*">
          <EmptyState
            className={styles.emptyState}
            icon={<Typography.Title level={1}> 🚀 </Typography.Title>}
            title="NO MORE TO UNEMPLOYMENT!"
            label="As a citizen of the universe, you have the right to have the best jobs of the whole world at your mercy. Start applying! 🔥"
          />
        </Route>
      </Switch>
    </>
  );
};

export default JobSearchRightPanel;
