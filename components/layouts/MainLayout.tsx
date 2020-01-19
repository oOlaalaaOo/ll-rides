import * as React from 'react'
import Head from 'next/head'
import { Layout } from 'antd'
const { Footer, Content } = Layout

type Props = {
  children: any;
  title?: string;
}

const MainLayout: React.FC<Props> = ({ children, title = 'LL Rides' }) => {

  return (
    <React.Fragment>
      <Layout>
        <Head>
          <title>{title}</title>
        </Head>
        <Content>
          {children}
        </Content>
        <Footer></Footer>
      </Layout>
    </React.Fragment>
  )
}

export default MainLayout
