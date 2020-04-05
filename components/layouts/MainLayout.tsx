import { FC } from 'react';
import Head from 'next/head';
import { Snackbar } from '../ui';

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
      <Snackbar />
      <div className={`${bgColor}`}>{children}</div>
    </>
  );
};

export default MainLayout;
