import React from 'react'
import { GrStatusGood } from 'react-icons/gr'
import { GrUserExpert } from 'react-icons/gr'
import { GiCircleForest } from 'react-icons/gi'

const speciality = [
  {
    title: 'Eco-Friendly',
    icon: <GiCircleForest />,
    description:
      'Our commitment to eco-friendly practices ensures that all our wood veneers are sourced sustainably, promoting responsible forestry. We prioritize environmentally conscious methods in our production processes, reducing waste and minimizing our carbon footprint, all while delivering high-quality products that are kind to the planet.',
  },
  {
    title: 'Quality',
    icon: <GrStatusGood />,
    description:
      'We pride ourselves on offering top-tier wood veneers that meet the highest standards of quality. Each piece is carefully selected and crafted to ensure exceptional durability, aesthetics, and performance. Our dedication to quality guarantees that you receive only the finest veneers for your projects.',
  },
  {
    title: 'Expertise',
    icon: <GrUserExpert />,
    description:
      'With years of experience in the wood veneer industry, our expertise is unmatched. Our knowledgeable team is adept at selecting, crafting, and advising on the best veneer options to meet your specific needs. Trust our expertise to deliver exceptional results for all your veneer requirements.',
  },
]

const OurSpecialitySection = () => {
  return (
    <div className="w-full bg-mondo-50 py-10">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-col items-center justify-center gap-5 mb-16">
          <p className="uppercase text-2xl md:text-4xl w-full  text-center font-bold text-mondo-600">
            Our speciality
          </p>
          <div className="h-[3px] w-[120px] md:w-[200px] bg-mondo-700"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 justify-center md:justify-start lg:justify-start">
          {speciality.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-4"
              >
                <div className="text-5xl p-4 border rounded-full flex items-center justify-center text-mondo-600 bg-white">
                  {item.icon}
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <p className="uppercase font-bold text-mondo-600">
                    {item.title}
                  </p>
                  <div className="h-[3px] w-[50px] bg-mondo-200"></div>
                </div>
                <div>
                  <p className="text-sm text-center">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default OurSpecialitySection
