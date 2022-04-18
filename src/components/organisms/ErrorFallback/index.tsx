import { FallbackProps } from 'react-error-boundary';

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className="w=full flex h-screen flex-col items-center justify-center space-y-4">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button className="btn" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  );
};

export default ErrorFallback;
