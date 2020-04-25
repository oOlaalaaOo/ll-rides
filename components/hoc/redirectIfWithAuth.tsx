import React from 'react';
import { NextPage, NextPageContext } from 'next';
import nextCookies from 'next-cookies';

const redirectIfWithAuth = (Page: NextPage<any>) => {
  return class extends React.Component {
    static async getInitialProps(ctx: NextPageContext) {
      const { accessToken } = nextCookies(ctx);
      const res = ctx && ctx.res;

      if (accessToken) {
        if (res) {
          res.writeHead(200, {
            Location: '/user/dashboard',
          });

          res.end();
        }
      }

      const pageProps =
        Page.getInitialProps && (await Page.getInitialProps(ctx));

      return { ...pageProps };
    }

    render() {
      return <Page {...this.props} />;
    }
  };
};

export default redirectIfWithAuth;
