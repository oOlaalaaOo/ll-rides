import React from 'react'
import App from 'next/app'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import { firebaseCloudMessaging } from '../services/pushNotificationService'
import '../assets/app.less'
import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class MyApp extends App<any> {
  static async getInitialProps(appContext: any) {
    const appProps = await App.getInitialProps(appContext)

    return { ...appProps }
  }

  componentDidMount() {
    firebaseCloudMessaging.init()
  }

  render() {
    const { Component, pageProps, store } = this.props

    return (
      <>
        <Head>
          <link rel="stylesheet" type="text/css" href="/nprogress.css" />
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    )
  }
}

export default withRedux(initStore)(MyApp)
