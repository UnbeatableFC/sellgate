import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { Outlet } from 'react-router'

const UserLayout = () => {
  return (
    <div>
        <Header />
          <main>
            {<Outlet />}
          </main>
        <Footer />
    </div>
  )
}

export default UserLayout