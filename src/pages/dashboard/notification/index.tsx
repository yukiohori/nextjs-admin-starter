import { lightFormat } from 'date-fns';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';

import Spinner from '@/components/atoms/Spinner';
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
        {newsList ? (
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>CREATED</th>
                  <th>TITLE</th>
                  <th>CONTENT</th>
                </tr>
              </thead>
              <tbody>
                {newsList.map((news) => (
                  <tr key={news.id}>
                    <td>
                      {lightFormat(new Date(news.created_at), 'yyyy-MM-dd')}
                    </td>
                    <td>{news.title}</td>
                    <td>{news.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Spinner />
          </div>
        )}
      </TempDashboard>
    </div>
  );
};

export default Dashboard;
