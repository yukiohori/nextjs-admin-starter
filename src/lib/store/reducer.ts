import { Action, State } from '@/lib/interfaces';

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'START_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'STOP_LOADING':
      return {
        ...state,
        isLoading: false,
      };
    case 'START_SILENCE':
      return {
        ...state,
        isSilence: true,
      };
    case 'STOP_SILENCE':
      return {
        ...state,
        isSilence: false,
      };
    default:
      return state;
  }
};
