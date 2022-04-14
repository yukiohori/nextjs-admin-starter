import { ReactNode } from 'react';

export type Props = {
  styleFormat?: string;
  rounded: boolean;
  children: ReactNode;
  onClick?: () => void | null;
};

export const Icon = ({
  rounded = true,
  children,
  styleFormat = 'w-8',
  onClick,
}: Props) => {
  return (
    <div
      onClick={onClick}
      className={`p-1 ${rounded ? 'rounded-full' : ''} ${styleFormat} ${
        onClick && 'cursor-pointer'
      }`}
    >
      {children}
    </div>
  );
};
