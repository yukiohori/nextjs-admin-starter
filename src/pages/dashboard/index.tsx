import type { NextPage } from "next";
import Head from "next/head";
import TemplateDashboard from "src/components/templates/TemplateDashboard";
import SideMenu from "src/components/molecules/SideMenu";

const Dashboard: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NextJS ADMIN STARTER</title>
        <meta name="description" content="NextJS ADMIN STARTER" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TemplateDashboard>
        <div className="flex py-20 px-6 space-x-4">
          <div className="hidden lg:block w-full lg:w-1/4">
            <SideMenu />
          </div>
          <div className="w-full lg:w-3/4">
            <div className="w-full flex flex-col space-y-4 text-white bg-gray-600 rounded p-4"></div>
          </div>
        </div>
      </TemplateDashboard>
    </div>
  );
};

export default Dashboard;
