import React from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'

export default function AuthenticatedLayout({children}){
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
