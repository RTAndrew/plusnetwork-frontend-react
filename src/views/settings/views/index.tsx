import { Route, Switch } from 'react-router';

import { Routes } from '../../../constants';
import AccountView from './account';
import AppliedJobs from './applied-jobs';
import SavedJobs from './saved-jobs';

const SettingsGatewayViews = () => {
  return (
    <Switch>
      <Route exact path={Routes.SettingsAccounts} component={AccountView} />
      <Route path={Routes.SettingsAppliedJobs} component={AppliedJobs} />
      <Route path={Routes.SettingsSavedJobs} component={SavedJobs} />
    </Switch>
  );
};

export default SettingsGatewayViews;
