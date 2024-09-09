import React from 'react'
import ImageSlider from './ImageSlider'
import CounterWrapper from './CounterWrapper'
import TrendingCourses from './TrendingCourses'
import Review from './Review'
import HiringPartners from './HiringPartners'
import Type from './Type'
import Adviser from './Adviser'


import Biocourses from './Biocourses'

import Services from './Services'


function Home() {
  return (
    <div>
      <div className='bg-backgound'>
      <ImageSlider />
      <Type />

      <CounterWrapper />
      <Services />

      <div className='bg-indigo-950'>
      <TrendingCourses/>
      </div>
      <Review/>
     <HiringPartners />
      <Adviser />
      <Biocourses/>
      </div>
    </div>
  )
}

export default Home
