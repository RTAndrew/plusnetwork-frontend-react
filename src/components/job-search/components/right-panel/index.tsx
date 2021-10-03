import { JobDescription } from 'components';
import { Route, Switch } from 'react-router';

const JobSearchRightPanel = () => {
  return (
    <Switch>
      <Route path="/jobs/:id" component={JobDescription} />
    </Switch>
  );
};

export default JobSearchRightPanel;
