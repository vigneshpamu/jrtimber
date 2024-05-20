'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from '../../sections/glowing-starts'

const tabs = [
  {
    name: 'Vision',
    content:
      'Our vision is to create a better world through innovation. Our vision is to create a better world',
  },
  {
    name: 'Mission',
    content:
      'Our mission is to deliver high-quality products that improve the lives of our customers.',
  },
  {
    name: 'Goals',
    content:
      'Our goals are to expand globally and achieve sustainability in all our processes.',
  },
]

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].name)
  return (
    <div className="w-full  bg-mondo-200 py-10">
      <div className="max-w-[1300px] mx-auto flex px-3 flex-col md:flex-row flex-wrap items-start justify-center gap-5  lg:gap-10">
        {/* <Image
          src={'/images/home/services/cutting.jpg'}
          width={500}
          height={500}
          className="h-[350px] w-full  md:max-w-[500px] object-cover"
        />

        <div>
          <div className="w-full max-w-[500px]  mx-auto">
            <div className="flex  gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  className={`py-3 px-8 text-sm font-medium text-gray-600 border ${
                    activeTab === tab.name
                      ? '  bg-mondo-300 !text-white px-8 border-0'
                      : ''
                  }`}
                  onClick={() => setActiveTab(tab.name)}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            <div className="py-4">
              {tabs.map((tab) => (
                <div
                  key={tab.name}
                  className={`${
                    activeTab === tab.name ? 'block ' : 'hidden'
                  } text-xl text-mondo-800`}
                >
                  {tab.content}
                </div>
              ))}
            </div>
          </div>
        </div> */}
        {/* grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 */}
        <div className="flex flex-row gap-5 flex-wrap items-center justify-center">
          {tabs.map((item, index) => {
            return (
              <GlowingStarsBackgroundCardPreview
                title={item.name}
                description={item.content}
                key={index}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export function GlowingStarsBackgroundCardPreview({ title, description }) {
  return (
    <div className="flex w-full  md:w-[366px] py-0 items-center justify-center antialiased">
      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>{title}</GlowingStarsTitle>
        <div className="flex justify-between items-end">
          <GlowingStarsDescription>{description}</GlowingStarsDescription>
          {/* <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
            <Icon />
          </div> */}
        </div>
      </GlowingStarsBackgroundCard>
    </div>
  )
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  )
}

export default HeroSection
