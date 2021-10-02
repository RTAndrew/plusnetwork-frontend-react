export type APIResponse<T> = {
  results?: ReadonlyArray<T>;
  info?: {
    seed: string;
    version: string;
    results: number;
    page: number;
  };
  error?: string;
};

export * from './user';
