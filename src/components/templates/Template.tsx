import bgImage from 'public/images/bg-image.jpg';
import Footer from 'src/components/organisms/Footer';
import { FOOTER_TEXT } from 'src/utils/constants';

type Props = {
  children: React.ReactNode;
};

const Template = ({ children }: Props) => {
  return (
    <>
      <main
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="relative flex h-screen w-full items-center justify-center overflow-hidden"
      >
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
    </>
  );
};

export default Template;
