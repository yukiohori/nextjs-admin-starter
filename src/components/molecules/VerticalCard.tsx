import Image from "next/image";
import { ReactNode } from "react";

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
  backgroundColor = "bg-transparent",
  textFormat = "text-gray-600",
  borderFormat = "rounded-none",
  reverse = false,
}: Props) => {
  const reverseClass = reverse
    ? "flex-col-reverse space-y-4 space-y-reverse"
    : "flex-col space-y-4";
  return (
    <div
      className={`container mx-auto p-4 flex ${reverseClass} ${backgroundColor} ${textFormat} ${borderFormat}`}
    >
      <div className=" text-gray-800 text-center">{children}</div>
      <div className="w-full h-64 md:h-80 lg:h-96 relative mb-4">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          className="object-cover object-center rounded"
        />
      </div>
    </div>
  );
};
