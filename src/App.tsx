import { ConfigProvider } from 'antd';
import en_US from 'antd/lib/locale/en_US';
import { Header, withHydrate } from 'components';
import { observer } from 'mobx-react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { JobsView, SettingsView } from 'views';

import { Routes } from './constants';

const App = observer(() => {
  const { path } = useRouteMatch();

  return (
    <>
      <ConfigProvider locale={en_US}>
        <Header />
        <Switch>
          <Route exact path={path} component={JobsView} />
          <Route path={Routes.Jobs} component={JobsView} />
          <Route path={Routes.Companies} component={JobsView} />
          <Route path={Routes.Companies} component={JobsView} />
          <Route path={Routes.Settings} component={SettingsView} />
        </Switch>
      </ConfigProvider>
    </>
  );
});

export default withHydrate(App);
