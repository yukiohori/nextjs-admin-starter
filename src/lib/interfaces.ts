export type State = {
  isLoading: boolean;
  isSilence: boolean;
};

export type Action =
  | { type: 'START_LOADING' }
  | { type: 'STOP_LOADING' }
  | { type: 'START_SILENCE' }
  | { type: 'STOP_SILENCE' };
