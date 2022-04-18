import '@/styles/global.css';

import { AppProps } from 'next/app';
import { useReducer } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Loading from '@/components/molecules/Loading';
import ErrorFallback from '@/components/organisms/ErrorFallback';
import Context from '@/lib/store/context';
import { reducer } from '@/lib/store/reducer';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const initialState = { isLoading: false, isSilence: false };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Component {...pageProps} />
        <Loading />
      </ErrorBoundary>
    </Context.Provider>
  );
};

export default MyApp;
