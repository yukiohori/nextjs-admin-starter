import type { NextPage } from 'next';
import Head from 'next/head';

import TempDashboard from '@/components/templates/TempDashboard';

const Dashboard: NextPage = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>NextJS ADMIN STARTER</title>
        <meta name="description" content="NextJS ADMIN STARTER" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TempDashboard>
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="phone-1 artboard artboard-demo">Hi.</div>
          </div>
        </div>
        <br />
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="phone-1 artboard artboard-demo">Hi.</div>
          </div>
        </div>
        <br />
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="phone-1 artboard artboard-demo">Hi.</div>
          </div>
        </div>
        <br />
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="phone-1 artboard artboard-demo">Hi.</div>
          </div>
        </div>
        <br />
      </TempDashboard>
    </div>
  );
};

export default Dashboard;
