import { RenderOptions, RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';

export type TCustomRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => RenderResult;
