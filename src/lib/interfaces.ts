export type State = {
  isLoading: boolean;
};

export type Action = { type: 'START_LOADING' } | { type: 'STOP_LOADING' };
