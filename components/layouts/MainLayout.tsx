import { FC } from 'react';
import Head from 'next/head';

type Props = {
  children: any;
  title?: string;
  bgColor?: string;
};

const MainLayout: FC<Props> = ({
  children,
  title = 'LL Rides',
  bgColor = 'bg-primary',
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={`${bgColor}`}>{children}</div>
    </>
  );
};

export default MainLayout;
