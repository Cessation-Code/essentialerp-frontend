import React from 'react'
import Navbar from '../components/dashboard/Navbar'
import Sidebar from '../components/dashboard/Sidebar'

const Layout = ({children}) => {
  return (
    <div className='flex '>
      <Sidebar/>

      <div className='w-full relative'>
        <Navbar/>
        <div className='overflow-y-auto ml-80 mt-24'>
        {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
