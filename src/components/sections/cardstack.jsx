import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import StarSVG from '../common/svgIcons/StarSVG'

let interval

const CardStack = ({ items }) => {
  const CARD_OFFSET = 10
  const SCALE_FACTOR = 0.06
  const [cards, setCards] = useState(items)

  useEffect(() => {
    startFlipping()
    return () => clearInterval(interval)
  }, [])

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards]
        newArray.unshift(newArray.pop())
        return newArray
      })
    }, 5000)
  }
  return (
    <div className="relative  h-[300px] w-[350px] md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={index}
            className="absolute dark:bg-black bg-mondo-50  h-[300px] w-[350px] md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: 'top center',
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="font-normal text-mondo-700 dark:text-neutral-200">
              {card.quote}
            </div>
            <div className="flex flex-row gap-2">
              <Image
                src={card.image}
                width={50}
                height={50}
                alt={card.quote}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-mondo-800 font-medium dark:text-white">
                  {card.name}
                </p>
                <StarSVG />
              </div>
              {/* <p className="text-neutral-400 font-normal dark:text-neutral-200">
                {card.designation}
              </p> */}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default CardStack
