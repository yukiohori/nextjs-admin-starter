import type { NextPage } from 'next';
import Head from 'next/head';

import Editor from '@/components/atoms/Editor';
import TempDashboard from '@/components/templates/TempDashboard';

const Blog: NextPage = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>Blog | NAS</title>
        <meta name="description" content="NextJS ADMIN STARTER" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TempDashboard>
        <Editor />
      </TempDashboard>
    </div>
  );
};

export default Blog;
