import MainLayout from '../../components/layouts/MainLayout';
import { NextPage } from 'next';
import withAuth from '../../components/hoc/withAuth';
import useSocketIOListener from '../../hooks/useSocketIOListener';
import { useState, useEffect } from 'react';

const Dashboard: NextPage<any> = () => {
  const [dummy, setDummy] = useState(0);
  const eventData = useSocketIOListener('testEvent');

  useEffect(() => {
    if (eventData) {
      console.log(eventData);
      setDummy(dummy + 1);
    }
  }, [eventData]);

  return (
    <MainLayout>
      <div>
        <h1>Dashboard {dummy}</h1>
      </div>
    </MainLayout>
  );
};

export default withAuth(Dashboard);
