import type { NextPage } from 'next';
import Head from 'next/head';

import InfoIcon from '@/components/atoms/Icon/InfoIcon';
import TempDashboard from '@/components/templates/TempDashboard';

const Dashboard: NextPage = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>Dashboard | NAS</title>
        <meta name="description" content="NextJS ADMIN STARTER" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TempDashboard>
        <div className="alert alert-info shadow-lg">
          <div>
            <InfoIcon />
            <span>News List CRUD done.</span>
          </div>
        </div>
      </TempDashboard>
    </div>
  );
};

export default Dashboard;
