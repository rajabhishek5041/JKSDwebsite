
import React from 'react'
import ServiceHead from './ServiceHead'
import TrainingP from './TrainingP'
import WebDev from './WebDev'
import DigitalMarketing from './DigitalMarketing'
import IoT from './IoT'
import HRConsulting from './HRConsulting'
import HomeAutomation from './HomeAutomation'

function Services() {
  return (
    <>
      <div>
        <ServiceHead />
      </div>
      <div className='flex flex-col lg:flex-row '>
        <div className='p-6 sm:p-10 md:p-16 lg:p-20 w-full lg:w-1/2'>
          <div className='text-xs sm:text-sm md:text-base lg:text-lg'>
            S e r v i c e s
          </div>
          <div className='text-3xl sm:text-4xl md:text-5xl font-semibold'>
            <h1>
              Unlocking{' '}
              <span className='bg-gradient-to-r from-[#FF5733] to-[#FFBD33] bg-clip-text text-transparent'>
                Brilliance!
              </span>{' '}
              <hr className='border-none' />
              One Step at a Time
            </h1>
          </div>
          <div className='text-wrap py-6 sm:py-10 md:py-12 lg:py-16 text-sm sm:text-base md:text-lg'>
            <p>
            At JKSD, we offer a wide range of services designed to drive innovation and efficiency across multiple industries. Our expertise includes website development, home automation, HR consulting, digital marketing, IoT solutions, and innovative lab setups. Whether you are looking to enhance your digital presence, automate your home, or create cutting-edge technological spaces, our team is equipped to deliver customized solutions that align with your goals. Let JKSD be your partner in success, as we help you navigate the challenges of today's dynamic business environment.
            </p>
          </div>
          <button className='bg-orange h-10 w-24 sm:w-28 md:w-32 rounded-xl rounded-r-full text-sm sm:text-base md:text-lg font-normal font-sans'>
            Know More
          </button>
        </div>
        <div className='w-full lg:w-1/2 flex justify-center items-center h-[400px] sm:h-[500px] lg:h-[600px]'>
          <img
            className='h-[280px] sm:h-[360px] md:h-[420px] lg:h-[460px]'
            src='./Images/services(1).jpg'
            alt='Service'
          />
        </div>
      </div>
     
    
      <TrainingP/>
      <WebDev/>
      <DigitalMarketing/>
      <IoT/>
      <HRConsulting/>
      <HomeAutomation/>
    </>
  );
}

export default Services;
