import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const BestSection = () => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.45])
  return (
    <motion.div
      ref={ref}
      className="relative bg-mondo-100 w-full h-[200px] md:h-[400px] overflow-hidden"
    >
      <motion.div
        style={{ scale }}
        className="relative w-full h-[200px] md:h-[400px]"
      >
        <Image
          src={'/images/home/timber/timber.jpg'}
          height="600"
          width="1200"
          alt="main-img"
          className="w-full h-full object-cover  scale"
        />
        <div className="absolute inset-0 bg-mondo-400 opacity-50 rounded-xl"></div>
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-xl text-center sm:text-2xl md:text-4xl font-bold uppercase">
          Land & Timber are what we know best
        </p>
      </div>
    </motion.div>
  )
}

export default BestSection
