import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';

import NewsList from '@/components/organisms/NewsList';
import TempDashboard from '@/components/templates/TempDashboard';
import useNews from '@/hooks/useNews';

const Dashboard: NextPage = () => {
  const { newsList, fetchNewsList } = useNews();

  useEffect(() => {
    fetchNewsList();
  }, []);

  return (
    <div className="h-screen">
      <Head>
        <title>NextJS ADMIN STARTER</title>
        <meta name="description" content="NextJS ADMIN STARTER" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TempDashboard>
        <NewsList newsList={newsList} />
      </TempDashboard>
    </div>
  );
};

export default Dashboard;
