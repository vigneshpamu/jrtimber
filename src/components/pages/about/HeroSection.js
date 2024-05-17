import Image from 'next/image'
import React, { useState } from 'react'

const tabs = [
  {
    name: 'Vision',
    content:
      'Our vision is to create a better world through innovation. Our vision is to create a better world through innovation.',
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
      <div className="max-w-[1300px] mx-auto flex px-3 flex-col md:flex-row items-start justify-center gap-5  lg:gap-10">
        <Image
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
        </div>
      </div>
    </div>
  )
}

export default HeroSection
