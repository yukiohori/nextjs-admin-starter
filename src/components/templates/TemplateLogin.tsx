import { FOOTER_TEXT } from 'src/utils/constants';

import Footer from '@/components/organisms/Footer';

type Props = {
  children: React.ReactNode;
};

const Template = ({ children }: Props) => {
  return (
    <div className="h-full bg-gray-700/30">
      <main className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        {children}
      </main>
      <Footer>
        <a
          href="https://github.com/yukiohori"
          target="_blank"
          rel="noopener noreferrer"
        >
          {FOOTER_TEXT}
        </a>
      </Footer>
    </div>
  );
};

export default Template;
