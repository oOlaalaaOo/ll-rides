import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';
import { firebaseCloudMessaging } from '../services/pushNotificationService';
import '../styles/index.css';
import '@fortawesome/fontawesome-free/css/all.css';
import NProgress from 'nprogress';
import Router from 'next/router';

const isProd = process.env.NODE_ENV === 'production';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

class MyApp extends App<any> {
  componentDidMount() {
    if (isProd) {
      firebaseCloudMessaging.init();
    }
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

export default withRedux(initStore)(MyApp);
