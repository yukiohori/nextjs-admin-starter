import Image from 'next/image';
import { ReactNode } from 'react';

export type Props = {
  src: string;
  alt: string;
  backgroundColor?: string;
  textFormat?: string;
  borderFormat?: string;
  reverse?: boolean;
  children: ReactNode;
};

export const VerticalCard = ({
  children,
  src,
  alt,
  backgroundColor = 'bg-transparent',
  textFormat = 'text-gray-600',
  borderFormat = 'rounded-none',
  reverse = false,
}: Props) => {
  const reverseClass = reverse
    ? 'flex-col-reverse space-y-4 space-y-reverse'
    : 'flex-col space-y-4';
  return (
    <div
      className={`container mx-auto p-4 flex ${reverseClass} ${backgroundColor} ${textFormat} ${borderFormat}`}
    >
      <div className=" text-center text-gray-800">{children}</div>
      <div className="relative mb-4 h-64 w-full md:h-80 lg:h-96">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          className="rounded object-cover object-center"
        />
      </div>
    </div>
  );
};
