import { ReactNode, useState } from "react";

export type Props = {
  menu: ReactNode;
  subMenu: ReactNode;
};

export const Header = ({ menu, subMenu }: Props) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setIsSubMenuOpen(true)}
      onMouseLeave={() => setIsSubMenuOpen(false)}
      className="fixed left-0 top-0 w-screen overflow-hidden"
    >
      <div className="bg-gray-700 w-full p-4 text-white relative">{menu}</div>
      {isSubMenuOpen && (
        <div className="relative w-screen h-screen overflow-y-auto lg:overflow-hidden">
          <div className="w-full">{subMenu}</div>
          <div
            onMouseEnter={() => setIsSubMenuOpen(false)}
            className="hidden md:block lg:block w-full h-full bg-gray-700 bg-opacity-40"
          />
        </div>
      )}
    </div>
  );
};
