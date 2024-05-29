import React from 'react'

import HeaderSection from './HeaderSection'
import MainSection from './MainSection'
import Footer from '@/components/common/Footer'
import { Navbar } from '@/components/sections/navbar'
import CommonNav from '@/components/common/CommonNav'
const AllContact = () => {
  return (
    <div>
      {/* <Navbar className="top-2" /> */}
      <CommonNav />
      <HeaderSection />
      <MainSection />
      <Footer />
    </div>
  )
}

export default AllContact
