/**
 * Mock API calls by wrapping the result in appropriate format
 * that is consumed by the application
 * @param data an array of any kind
 */
export const makeGetRequest = (data: ReadonlyArray<any>) => {
  return {
    parsedBody: {
      results: data,
      info: {
        seed: 'codechallenge',
        version: 1.0,
        results: data.length,
        page: 1,
      },
      error: null,
    },
  };
};

/**
 * Mock Http requests when testings service functions
 * @param data any kind of array
 */
export const makeHttpRequest = (data: ReadonlyArray<any>) => {
  return {
    results: data,
    info: {
      seed: 'codechallenge',
      version: 1.0,
      results: data.length,
      page: 1,
    },
    error: null,
  };
};
