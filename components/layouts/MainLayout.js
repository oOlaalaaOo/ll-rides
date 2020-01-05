import React from 'react'
import Button from '../ui/inputs/Button'
import Head from 'next/head'

const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <title>LL Rides</title>
      </Head>
      <div className="w-full h-16 pt-4 pl-3 pr-3">
        <div className="flex flex-wrap">
          <div className="w-1/4">
            <span className="text-xl">LL Rides</span>
          </div>
          <div className="w-1/4"></div>
          <div className="w-1/2 text-right">
            <Button className="btn-default text-sm border-0 shadow-none bg-white">HOME</Button>
            <Button className="btn-default text-sm border-0 shadow-none bg-white">ABOUT</Button>
            <Button className="btn-default text-sm border-0 shadow-none bg-white">SERVICES</Button>
            <Button className="btn-default text-sm border-0 shadow-none bg-white">SIGN IN</Button>
            <Button className="btn-default text-sm border-0 shadow-none bg-white">REGISTER</Button>
          </div>
        </div>
      </div>
      <div className="container" style={{marginTop: '15px', marginLeft: '50px', marginRight: '50px'}}>
        {children}
      </div>
    </React.Fragment>
  )
}

export default MainLayout
