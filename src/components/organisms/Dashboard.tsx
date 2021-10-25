import Image from "next/image";
import bgImage from "public/images/bg-image.jpg";

const Dashboard = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
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
