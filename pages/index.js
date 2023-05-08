import React from "react"
import SVG from 'react-svg';
import Logo from "../components/landing";


export default function Home() {
  return (

    // heres the background colour thats white 
    <div className="relative bg-white">

      {/* here's the diagonal object giving at the top */}
      <div
        className="z-0 absolute -top-56 bottom-96 h-[500px] inset-0 bg-[#7622FF] opacity-30 transform -skew-y-[10deg]">
      </div>

      <div className='flex flex-row px-5 pt-5 items-center'>
        <div className='basis-1/5 z-50 text-center'>
         <a className='text-lg font-semibold text-white'>Essential</a>
          <a className='text-xl font-semibold text-[#022568]'>ERP</a>
        </div>

        <div className='basis-3/5 z-50'>
          <div className='flex flex-row px-28 font-bold text-black text-center'>
            <div className='basis-1/4'>Home</div>
            <div className='basis-1/4'>About Us</div>
            <div className='basis-1/4'>Services</div>
            <div className='basis-1/4'>Pricing</div>
          </div>
        </div>

        <div className='basis-1/5 font-semibold text-center z-50'>
          <button className='rounded-xl bg-[#6C63FF] text-white px-7 py-3'>Contact Us</button>
        </div>
      </div>
      
      <div className='flex flex-row pt-24 justify-center text-4xl text-black font-bold'>
        <div className='text-center z-50'>
          Take Control of your<br/>Business
        </div>
      </div>

      <div className='flex flex-row pt-20 justify-center text-lg text-black font-medium'>
        <div className='text-center z-50'>
          EssentialERP is the world's best free open<br/>source Enterprise Resource Planning<br/>Solution
        </div>
      </div>

      <div className='flex flex-row justify-center gap-4 pt-6 font-medium'>
        <button className='rounded-xl bg-[#6C63FF] text-white px-7 py-1'>GET STARTED</button>
        <button className='rounded-xl bg-[#C4D7F8] text-[#6C63FF] px-7 py-1'>LEARN MORE</button>
      </div>

      <div className='flex flex-row justify-center'>
        <Logo />
      </div>

      <div className='flex flex-row justify-center gap-4 pt-6 font-medium text-center'>
        <div>
          <div className="text-[#6C63FF]">Why Choose Us?</div>
          <br/>
          <div className="font-bold text-xl">OUR SYSTEM IS COMPLETE, FLEXIBLE AND ROBUST<br/><br/></div>
          <div className="">Designed for both Simplicity and Power<br/>Everything your business needs in one space</div>
        </div>  
      <div/>


      </div>
    </div>

    
  )
}
