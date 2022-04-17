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
    default:
      return state;
  }
};
