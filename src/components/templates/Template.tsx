import Footer from "src/components/organisms/Footer";
import bgImage from "public/images/bg-image.jpg";

type Props = {
  children: React.ReactNode;
};

const Template = ({ children }: Props) => {
  return (
    <>
      <main
        style={{ backgroundImage: `url(${bgImage.src})` }}
        className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      >
        {children}
      </main>
      <Footer>
        <a
          href="https://github.com/yukiohori"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by YUKI OHORI
        </a>
      </Footer>
    </>
  );
};

export default Template;
