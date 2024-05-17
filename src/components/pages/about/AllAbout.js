'use client'
import Image from 'next/image'
import React, { useState } from 'react'

import HeaderSection from './HeaderSection'
import HeroSection from './HeroSection'
import OurSpecialitySection from './OurSpecialitySection'
import WhyUsSection from './WhyUsSection'
import CSRSection from './CSRSection'
import Footer from '@/components/common/Footer'

const AllAbout = () => {
  return (
    <div>
      {/* Header  */}
      <HeaderSection />
      <HeroSection />
      <OurSpecialitySection />
      <WhyUsSection />
      <CSRSection />
      <Footer />
    </div>
  )
}

export default AllAbout
