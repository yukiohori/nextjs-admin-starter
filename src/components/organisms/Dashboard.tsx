import Image from 'next/image';
import bgImage from 'public/images/bg-image.jpg';
import { Button } from 'src/components/atoms/Button';

type Props = {
  signInWithGithub: () => void;
};

const Dashboard = ({ signInWithGithub }: Props) => {
  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden">
      <div className="z-10 rounded bg-white bg-opacity-50 p-4">
        <h1 className="mb-4 text-center font-bold text-gray-600">LOGIN</h1>
        <Button
          label="LOGIN WITH GITHUB"
          textFormat="text-gray-600 font-bold"
          borderFormat="rounded-md border-2 border-gray-600"
          onClick={() => signInWithGithub()}
        />
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
