export type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props) => {
  return (
    <div className="fixed left-0 top-0 z-50 w-screen overflow-hidden">
      <div className="relative w-full bg-gray-700 p-4 text-white">
        {children}
      </div>
    </div>
  );
};

export default Header;
