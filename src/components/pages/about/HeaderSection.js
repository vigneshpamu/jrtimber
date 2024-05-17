import React from 'react'

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col gap-5 items-center justify-center bg-mondo-100 h-[120px] md:h-[170px]">
      <p className="text-2xl sm:text-3xl md:text-5xl uppercase font-semibold text-mondo-800">
        About Us
      </p>
      <div className="h-[3px]  w-[150px] bg-mondo-800"></div>
    </div>
  )
}

export default HeroSection
