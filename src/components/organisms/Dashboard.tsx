import Image from "next/image";
import { Button } from "src/components/atoms/Button";
import bgImage from "public/images/bg-image.jpg";

type Props = {
  signInWithGithub: () => void;
};

const Dashboard = ({ signInWithGithub }: Props) => {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center">
      <div className="z-10 p-4 bg-white bg-opacity-50 rounded">
        <h1 className="text-center mb-4 font-bold text-gray-600">LOGIN</h1>
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
