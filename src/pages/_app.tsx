import '@/styles/global.css';

import { AppProps } from 'next/app';
import { useReducer } from 'react';

import Loading from '@/components/molecules/Loading';
import Context from '@/lib/store/context';
import { reducer } from '@/lib/store/reducer';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const initialState = { isLoading: false };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
      <Loading />
    </Context.Provider>
  );
};

export default MyApp;
