import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WhyUsSection = () => {
  return (
    <div className="w-full bg-mondo-100 py-10">
      <div className="max-w-[1300px] mx-auto px-5">
        <div className="flex flex-col items-center justify-center gap-5 mb-16">
          <p className="uppercase text-2xl md:text-4xl w-full  text-center font-bold text-mondo-600">
            Why TimberCraft
          </p>
          <div className="h-[3px] w-[120px] md:w-[200px] bg-mondo-700"></div>
        </div>
        <div className="flex flex-col md:flex-row max-w-[1000px] mx-auto items-center justify-center bg-mondo-950 gap-10 ">
          <Image
            src={'/images/about/why-us/main.png'}
            width={500}
            height={500}
            className="h-[350px] w-full md:w-[50%] object-cover"
          />

          <div className="w-full md:w-[50%] bg-mondo-950 px-5 pb-10 md:py-0 flex flex-col gap-3">
            <p className="text-2xl md:text-4xl text-mondo-100 font-semibold">
              Responsible Forestry
            </p>
            <p className="text-2xl md:text-4xl text-mondo-100 font-semibold">
              Quality Timber
            </p>
            <div className="h-[3px] w-[50px] bg-mondo-500"></div>
            <p className="text-mondo-100 max-w-[80%]">
              We are the biggest stockist in UAE
            </p>
            <Link
              href={'/products'}
              className="text-mondo-700 w-40 py-2 text-center bg-mondo-50 font-semibold"
            >
              View Products
            </Link>
            {/* <button className="text-mondo-700 w-40 py-2 bg-mondo-50 font-semibold"></button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUsSection
