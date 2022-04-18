import type { NextPage } from 'next';
import Head from 'next/head';

import NewsList from '@/components/organisms/NewsList';
import TempDashboard from '@/components/templates/TempDashboard';

const Dashboard: NextPage = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>Notification | NAS</title>
        <meta name="description" content="NextJS ADMIN STARTER" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TempDashboard>
        <NewsList />
      </TempDashboard>
    </div>
  );
};

export default Dashboard;
