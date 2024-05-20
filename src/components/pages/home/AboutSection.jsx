import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutSection = () => {
  return (
    <div className=" w-full bg-mondo-200 py-12  ">
      <div className="flex flex-col items-center justify-center gap-5 mb-16">
        <p className="uppercase text-4xl w-full  text-center font-bold text-mondo-600">
          Who are we
        </p>
        <div className="h-[3px] w-[200px] bg-mondo-700"></div>
      </div>
      <div className="max-w-[1300px] md:px-5 mx-auto  flex flex-col md:flex-row items-center justify-center gap-10 md:gap-2">
        <Image
          src={'/images/home/about/bg1.jpg'}
          height="600"
          width="1200"
          className="object-cover w-[90%] md:w-[350px] lg:w-[500px] h-[350px]  md:h-[400px] rounded-xl  transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="px-5 lg:py-10  pr-5 flex flex-col gap-20">
          <div className="">
            <p className="text-mondo-600 uppercase text-2xl md:text-lg lg:text-2xl font-bold">
              Timbercraft: Your Premier Source for Timber and Veneers in the
              Middle East
            </p>

            <p className="mt-[20px] md:text-sm lg:text-md">
              Timbercraft stands as the foremost trader of timber and veneers,
              boasting an extensive inventory and unparalleled expertise in the
              Middle East region. As the largest stockists in the area, we offer
              a comprehensive range of high-quality timber and veneer products
              to meet diverse needs. Whether you are a contractor, designer, or
              homeowner, Timbercraft is your trusted partner for superior
              materials and exceptional service.
            </p>
          </div>
          <Link
            href={'/about'}
            className="bg-mondo-400 p-3 w-[150px] text-white text-center rounded-md hover:bg-mondo-300"
          >
            About Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
