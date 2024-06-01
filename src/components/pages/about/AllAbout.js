'use client'
import Image from 'next/image'
import React, { useState } from 'react'

import HeaderSection from './HeaderSection'
import HeroSection from './HeroSection'
import OurSpecialitySection from './OurSpecialitySection'
import WhyUsSection from './WhyUsSection'
import CSRSection from './CSRSection'
import Footer from '@/components/common/Footer'
import { Navbar } from '@/components/sections/navbar'
import CommonNav from '@/components/common/CommonNav'

const AllAbout = () => {
  return (
    <div>
      {/* <Navbar className="top-2" /> */}
      <CommonNav />
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
