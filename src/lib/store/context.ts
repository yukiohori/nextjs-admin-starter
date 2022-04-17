import { createContext, Dispatch } from 'react';

import { Action, State } from '@/lib/interfaces';

const Context = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({
  state: { isLoading: false },
  dispatch: () => {},
});

export default Context;
