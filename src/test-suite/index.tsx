import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ConfigProvider } from 'antd';
import en_US from 'antd/lib/locale/en_US';
import { FC } from 'react';

import { TCustomRender } from './test-suite.types';

const AllTheProviders: FC = ({ children }) => {
  return <ConfigProvider locale={en_US}>{children}</ConfigProvider>;
};

const customRender: TCustomRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';
export * from './utils';
export { userEvent };

// override render method
export { customRender as render };
