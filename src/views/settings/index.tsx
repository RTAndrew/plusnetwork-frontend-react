import { DesktopLayout } from 'layout';

import SettingsMenu from './components/settings-menu';
import SettingsGatewayViews from './views';

const SettingsView = () => {
  return (
    <div>
      <DesktopLayout leftPanel={<SettingsMenu />} rightPanel={<SettingsGatewayViews />} />
    </div>
  );
};

export default SettingsView;
