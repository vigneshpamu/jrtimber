import React from 'react'

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col gap-2 md:gap-5 items-center justify-center bg-mondo-100 h-[80px] md:h-[200px]">
      <p className="text-xl  sm:text-2xl   md:text-5xl uppercase font-semibold text-mondo-800">
        About Us
      </p>
      <div className="h-[3px] w-[100px]  md:w-[150px] bg-mondo-800"></div>
    </div>
  )
}

export default HeroSection
