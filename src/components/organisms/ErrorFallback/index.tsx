import { FallbackProps } from 'react-error-boundary';

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className="w=full flex h-screen items-center justify-center">
      <div className="mockup-code">
        <div className="flex flex-col items-center justify-center space-y-6">
          <p className="text-bold w-full text-center text-2xl text-error">
            Something went wrong:
          </p>
          <pre>{error.message}</pre>
          <button className="btn btn-info" onClick={resetErrorBoundary}>
            Try again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorFallback;
