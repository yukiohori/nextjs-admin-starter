import { ReactNode } from 'react';

export type Props = {
  size: '1' | '2' | '4';
  color: string;
  children: ReactNode;
};

export const Divider = ({ color = 'gray', children, size = '1' }: Props) => {
  return (
    <div
      className={`grid grid-cols-1 divide-y- divide-y${
        size === '1' ? '' : `-${size}`
      } divide-${color}-500`}
    >
      {children}
    </div>
  );
};
