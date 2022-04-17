import { useContext } from 'react';

import Spinner from '@/components/atoms/Spinner';
import Context from '@/lib/store/context';

const Loading = () => {
  const { state } = useContext(Context);
  if (!state.isLoading) return <></>;
  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-black/40">
      <Spinner />
    </div>
  );
};

export default Loading;
