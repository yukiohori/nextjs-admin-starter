import type { NextPage } from 'next';
import Head from 'next/head';
import SideMenu from 'src/components/molecules/SideMenu';
import TemplateDashboard from 'src/components/templates/TemplateDashboard';

const Dashboard: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NextJS ADMIN STARTER</title>
        <meta name="description" content="NextJS ADMIN STARTER" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TemplateDashboard>
        <div className="flex space-x-4 py-20 px-6">
          <div className="hidden w-full lg:block lg:w-1/4">
            <SideMenu />
          </div>
          <div className="w-full lg:w-3/4">
            <div className="flex w-full flex-col space-y-4 rounded bg-gray-600 p-4 text-white">
              <div className="mockup-phone">
                <div className="camera"></div>
                <div className="display">
                  <div className="phone-1 artboard artboard-demo">Hi.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TemplateDashboard>
    </div>
  );
};

export default Dashboard;
