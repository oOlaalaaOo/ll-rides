import MainLayout from '../components/layouts/MainLayout';
import { NextPage } from 'next';
import Router from 'next/router';

const Index: NextPage<any> = () => {
  return (
    <>
      <MainLayout bgColor='bg-secondary'>
        <div className='p-4'>
          <ul className='flex float-right'>
            <li className='mr-6'>
              <a
                className='text-blue-500 hover:text-blue-800'
                href='#'
                onClick={() => Router.push('/auth/login')}
              >
                LOGIN
              </a>
            </li>
            <li className='mr-6'>
              <a
                className='text-blue-500 hover:text-blue-800'
                href='#'
                onClick={() => Router.push('/auth/register')}
              >
                REGISTER
              </a>
            </li>
          </ul>
          <div className='clear-right'></div>
        </div>
        <div className='flex flex-col items-center justify-center mt-8 px-8 text-center'>
          <img
            src='/images/logo.png'
            alt='ll-rides'
            className='w-1/2 sm:w-1/2 md:w-2/5 lg:w-2/5 xl:w-1/4'
          />
          <h1 style={{ fontSize: '28pt' }}>Been in a beautiful place?</h1>
          <p>
            Please share it to us, for sure we would love to see what you have
            experienced there.
          </p>
          <h1>Brought to you by LL RIDES</h1>
        </div>
      </MainLayout>
    </>
  );
};

export default Index;
