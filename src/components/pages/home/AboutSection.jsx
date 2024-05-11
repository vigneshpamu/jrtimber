import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
  return (
    <div className="max-h-[600px] w-full bg-mondo-200   flex flex-row gap-10">
      <Image
        src={'/images/home/about/bg.jpg'}
        height="600"
        width="1200"
        className="w-[50%]   "
      />
      <div className="py-10 w-[50%] pr-5 flex flex-col gap-20">
        <p className="uppercase text-xl font-semibold text-mondo-600">
          Who are we
        </p>
        <div className="">
          <p className="text-mondo-600 uppercase text-2xl font-bold">
            Timbercraft: Your Premier Source for Timber and Veneers in the
            Middle East
          </p>

          <p className="mt-[20px]">
            Timbercraft stands as the foremost trader of timber and veneers,
            boasting an extensive inventory and unparalleled expertise in the
            Middle East region. As the largest stockists in the area, we offer a
            comprehensive range of high-quality timber and veneer products to
            meet diverse needs. Whether you're a contractor, designer, or
            homeowner, Timbercraft is your trusted partner for superior
            materials and exceptional service.
          </p>
        </div>
        <div className="">
          <button className="bg-mondo-400 p-3 w-36 text-white hover:bg-mondo-300">
            About Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
