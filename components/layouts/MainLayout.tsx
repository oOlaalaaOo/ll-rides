import * as React from 'react';
import Head from 'next/head';
// import { Layout } from 'antd'
// const { Footer, Content } = Layout

type Props = {
  children: any;
  title?: string;
  bgColor?: string;
};

const MainLayout: React.FC<Props> = ({
  children,
  title = 'LL Rides',
  bgColor = 'bg-primary'
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={bgColor}>{children}</div>
    </>
  );
};

export default MainLayout;
