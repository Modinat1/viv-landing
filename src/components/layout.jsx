import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <section className=''>
       <Header/>

        <nav>
            <h1>nav here</h1>
        </nav>

        <div className='bg-[whitesmoke]'>

        <Outlet/>
        </div>
    </section>
  )
}

export default Layout