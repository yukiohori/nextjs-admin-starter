export type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props) => {
  return (
    <div className="fixed z-50 left-0 top-0 w-screen overflow-hidden">
      <div className="bg-gray-700 w-full p-4 text-white relative">
        {children}
      </div>
    </div>
  );
};

export default Header;
