type Props = {
  children: React.ReactNode;
};

const Footer = ({ children }: Props) => {
  return (
    <footer className="fixed left-0 bottom-0 -mt-10 flex h-10 w-full items-center justify-center bg-gray-700 text-white">
      {children}
    </footer>
  );
};

export default Footer;
