import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
        type: 'spring',
        stiffness: 70,
      },
    }
  },
  // transition: { type: 'spring', stiffness: 100 },
}

const servicesArr = [
  {
    id: 1,
    name: 'Cutting',
    imgUrl: '/images/home/services/cutting.jpg',
    description:
      'Aspen wood is lightweight, soft, and known for its fine texture and uniform grain patterns.',
  },
  {
    id: 2,
    name: 'Stitching',
    imgUrl: '/images/home/services/stiching.jpg',
    description:
      'Basswood is a soft, light wood, favored for carving and detailed woodwork due to its smooth grain.',
  },
  {
    id: 3,
    name: 'Pressing',
    imgUrl: '/images/home/services/pressing.jpg',
    description:
      'Cherry wood is prized for its rich color, smooth grain, durability and others in fine furniture making.',
  },
]
const WhatWeDoSection = () => {
  return (
    <div className="bg-mondo-100">
      <div className="max-w-[1300px] mx-auto flex flex-col gap-10 py-10">
        <div className="flex flex-col items-center justify-center gap-5 mb-16">
          <p className="uppercase text-4xl w-full  text-center font-bold text-mondo-600">
            Our Services
          </p>
          <div className="h-[3px] w-[200px] bg-mondo-700"></div>
        </div>
        <div className="grid grid-cols-1 px-5  md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesArr.map((item, index) => {
            return (
              <motion.div
                variants={fadeInAnimationsVariants}
                initial="initial"
                whileInView="animate"
                custom={index}
                key={item.id}
                className="flex flex-col gap-5"
              >
                <Image
                  src={item.imgUrl}
                  width={500}
                  height={500}
                  objectFit=""
                  className="min-h-[286px] w-full object-cover"
                />
                <div className="w-full flex flex-col gap-5 items-center justify-center">
                  <div className="flex flex-col gap-2 items-center justify-center">
                    <p className="text-mondo-600 uppercase text-xl font-bold">
                      {item.name}
                    </p>
                    <div className="h-[3px] w-16 bg-mondo-600"></div>
                  </div>
                  <p className="text-mondo-600 px-2 text-center">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
        <Link href={'/services'} className="text-center  max-w-[150px] mx-auto">
          View All Services
        </Link>
      </div>
    </div>
  )
}

export default WhatWeDoSection
