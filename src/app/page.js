'use client'
import Image from 'next/image'
import { Navbar } from '../components/sections/navbar'
import { HeroParallaxDemo } from '../components/sections/heroparallax'
import { StickyScrollRevealDemo } from '../components/sections/ouredge'
import AboutSection from '@/components/pages/home/AboutSection'
import { DirectionAwareHover } from '@/components/ui/onImageHover'
import HeroSection from '@/components/pages/home/HeroSection'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import StarSVG from '@/components/common/svgIcons/StarSVG'
import BestSection from '@/components/pages/home/BestSection'
import OurProductsSection from '@/components/pages/home/OurProductsSection'
import VideoSection from '@/components/pages/home/VideoSection'
import WhatWeDoSection from '@/components/pages/home/WhatWeDoSection'
import BestSection2 from '@/components/pages/home/BestSection2'
import Testimonial from '@/components/pages/home/Testimonial'
import Footer from '@/components/common/Footer'

export default function Home() {
  return (
    <div className=" text-mondo-700 bg-stone-50 overflow-hidden">
      <Navbar className="top-2" />
      <HeroParallaxDemo />
      {/* <HeroSection /> */}
      <AboutSection />
      <BestSection />
      <OurProductsSection />
      <VideoSection />
      <WhatWeDoSection />
      <BestSection2 />
      <Testimonial />
      <Footer />
    </div>
  )
}
