import React from 'react';
import { NextPage, NextPageContext } from 'next';
import nextCookies from 'next-cookies';
import authApi from '../../api/authApi';

const withAuth = (Page: NextPage<any>) => {
  return class extends React.Component {
    static async getInitialProps(ctx: NextPageContext) {
      const { accessToken } = nextCookies(ctx);
      const res = ctx && ctx.res;

      if (!accessToken || accessToken === '') {
        if (res) {
          res.writeHead(301, {
            Location: '/auth/login'
          });

          res.end();
        }
      }

      try {
        const xAuthUser = accessToken && (await authApi.user(accessToken));

        const authUser = xAuthUser && xAuthUser.user;

        const pageProps =
          Page.getInitialProps && (await Page.getInitialProps(ctx));

        return { ...pageProps, authUser };
      } catch (err) {
        if (res) {
          res.writeHead(301, {
            Location: '/auth/login'
          });

          res.end();
        }
      }
    }

    render() {
      return <Page {...this.props} />;
    }
  };
};

export default withAuth;
