import type { NextPage } from 'next';
import Head from 'next/head';
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
      </TemplateDashboard>
    </div>
  );
};

export default Dashboard;
