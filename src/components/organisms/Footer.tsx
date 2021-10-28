type Props = {
  children: React.ReactNode;
};

const Footer = ({ children }: Props) => {
  return (
    <footer className="fixed left-0 w-full bottom-0 h-10 -mt-10 flex justify-center items-center bg-gray-700 text-white">
      {children}
    </footer>
  );
};

export default Footer;
