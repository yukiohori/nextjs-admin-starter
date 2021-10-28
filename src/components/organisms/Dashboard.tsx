import Image from "next/image";
import { Button } from "src/components/atoms/Button";
import bgImage from "public/images/bg-image.jpg";

type Props = {
  signInWithGithub: () => void;
};

const Dashboard = ({ signInWithGithub }: Props) => {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center">
      <div className="z-10 p-4 bg-gray-600 border rounded">
        <h1 className="text-center mb-4 font-bold">LOGIN</h1>
        <Button
          label="GitHubでログイン"
          textFormat="text-gray-white font-bold"
          borderFormat="rounded-md border-2 border-white"
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
