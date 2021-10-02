import '@testing-library/jest-dom';

import { jest } from '@jest/globals';

jest.setTimeout(30000);

global.fetch = jest.fn();

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };
