import Link from 'next/link'

const Navbar = () => {
  return (
     <div className='flex flex-row px-5 pt-5 items-center w-full'>

    <div  className='basis-1/5 z-50 text-center'>
      <Link href="/" className='text-lg font-semibold text-white'>Essential</Link>
      <Link href="/"  className='text-xl font-semibold text-[#022568]'>ERP</Link>
    </div>

    <div className='basis-3/5 z-50'>
      <div className='flex flex-row px-28 font-bold text-black text-center'>
        <div className='basis-1/4'>Home</div>
        <div className='basis-1/4'>About Us</div>
        <div className='basis-1/4'>Services</div>
        <Link href={'/contact'} className='basis-1/4'>Contact Us</Link>
      </div>
    </div>

    <div className='basis-1/5 font-semibold text-center z-50'>
      <button className='rounded-xl bg-[#6C63FF] text-white px-7 py-3'>Contact Us</button>
    </div>

  </div>

  )
}

export default Navbar
