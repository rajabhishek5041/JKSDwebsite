import React from 'react'

function HRConsulting() {
  return (
    <div className='bg-[#08528e] w-full sm:h-screen flex h-auto'>
        <div className='w-full text-white sm:text-start text-center px-2 sm:pt-20 pt-14 lg:pl-[100px]'>
        
        <h1 className='sm:text-5xl  text-orange font-philosopher  text-3xl lg:font-bold lg:text-6xl '>HR Consulting</h1>
       <p className='text-sm sm:text-lg mt-10 sm:w-[80%] text-white lg:text-3xl '>Delivering innovative, tailored HR solutions to optimize talent and elevate workplace culture.</p>
       <p className='text-sm sm:text-lg mt-10 sm:w-[90%] text-white lg:text-xl '>At JKSD, our HR Consulting services are designed to empower businesses with strategic solutions. From talent management to employee engagement, we help you build a thriving workplace, ensuring your organization’s success in today’s dynamic environment.</p>
       <div className='mt-10 font-normal text-lg lg:text-xl '>
        <li>Recruitment Service</li>
        <li>Corporate Training</li>
        <li>HR Excellence</li>
       </div >
       <button className='text-lg font-light h-10 w-32 lg:w-40  bg-orange rounded-lg text-black mt-10 mb-10 '>Explore More</button>
        </div>
        
        <div className=' w-full sm:w-1/2 h-screen hidden sm:block mr-20'>
            <img className='w-full sm:w-[1300px] h-full' src=".\Images\181bce80e971df855219b69e4b4969cb.jpg" alt="" />
        </div>
    </div>
  )
}

export default HRConsulting