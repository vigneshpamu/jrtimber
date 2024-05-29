'use client'
import React from 'react'
import { BackgroundGradient } from '../sections/background-gradient'
import Image from 'next/image'

const ProductCard = ({ item }) => {
  return (
    <div>
      <BackgroundGradient className="rounded-lg max-w-sm  0 bg -white dark:bg-zinc-900">
        <div className="relative !rounded-xl w-full h-[400px] overflow-hidden">
          <Image
            src={item.thumbnail}
            alt="jordans"
            width={500}
            height={500}
            className="w-full h-full !rounded-3xl object-cover  "
          />

          <div className="absolute left-5 bottom-0 p-2 px-5 bg-mondo-400 border border-mondo-600 rounded-tl-lg rounded-tr-lg">
            <p className="text-white">{item.title}</p>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  )
}

export default ProductCard
