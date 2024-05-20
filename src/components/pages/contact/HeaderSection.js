import React from 'react'

const HeaderSection = () => {
  return (
    <div className="w-full flex flex-col gap-2 md:gap-5 items-center justify-center bg-mondo-100 h-[120px] md:h-[200px]">
      <p className="text-2xl mt-12 md:mt-10 md:text-5xl uppercase font-semibold text-mondo-800">
        Contact Us
      </p>
      <div className="h-[3px]  w-[150px] bg-mondo-800"></div>
    </div>
  )
}

export default HeaderSection
