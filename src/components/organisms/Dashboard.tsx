import Image from 'next/image';
import bgImage from 'public/images/bg-image.jpg';

type Props = {
  signInWithGithub: () => void;
};

const Dashboard = ({ signInWithGithub }: Props) => {
  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden">
      <div className="z-10 rounded bg-white/50 p-4">
        <h1 className="mb-4 text-center font-bold text-gray-600">LOGIN</h1>
        <button onClick={() => signInWithGithub()} className="btn btn-active">
          LOGIN WITH GITHUB
        </button>
      </div>
      <Image
        src={bgImage}
        alt="Dashboard Background Image"
        layout="fill"
        className="object-cover object-center"
      />
    </div>
  );
};

export default Dashboard;
