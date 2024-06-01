import LeftImageSection from '@/components/common/LeftImageSection'
import RightImageSection from '@/components/common/RightImageSection'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  CardBody,
  CardContainer,
  CardItem,
} from '@/components/sections/3d-card'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { fadeInAnimationsVariants } from '@/utils/animate'

const allCategory = [
  {
    id: 1,
    name: 'Artificial Veneer',
    link: '/artificial-veneer',
    img: '/images/home/about/artificial.webp',
    desc: 'High-quality, engineered veneer with a consistent and versatile appearance.',
  },
  {
    id: 2,
    name: 'Natural Veneer',
    link: '/natural-veneer',
    img: '/images/home/about/natural.jpg',
    desc: 'Genuine wood veneer showcasing the beauty of natural grains.',
  },
  {
    id: 3,
    name: 'Dyed Veneer',
    link: '/dyed-veneer',
    img: '/images/home/about/dyed.webp',
    desc: 'Vibrantly colored veneer, dyed to achieve unique design effects.',
  },
  {
    id: 4,
    name: 'Laminates',
    link: '/laminates',
    img: '/images/home/about/laminate.jpg',
    desc: 'Durable laminate offering a wide range of stylish finishes.',
  },
  {
    id: 5,
    name: 'Premium Hardwood',
    link: '/hardwood',
    img: '/images/home/about/hardwood.jpeg',
    desc: 'Premium hardwood known for its strength and rich texture.',
  },
]

const OurProductsSection = () => {
  const router = useRouter()

  const handleRoute = (route) => {
    console.log(route, 'Route')
    let withoutSlash = route.substring(1)
    let resultString = withoutSlash.replace('-', ' ')
    localStorage.setItem('routeName', resultString)
    router.push(`/products`)
  }

  return (
    <div className="h-full bg-mondo-100 py-10">
      <div className="max-w-[1300px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col items-center justify-center gap-5 mb-5 md:mb-10">
          <p className="uppercase text-4xl w-full  text-center font-bold text-mondo-600">
            Our Products
          </p>
          <div className="h-[3px] w-[200px] bg-mondo-700"></div>
        </div>

        <div className="max-w-[1300px] mx-auto flex flex-wrap justify-center gap-5 px-5">
          {allCategory.map((item, index) => {
            return (
              <motion.div
                variants={fadeInAnimationsVariants}
                initial="initial"
                whileInView="animate"
                custom={index}
                key={item.id}
              >
                <CardContainer className="inter-var" key={index}>
                  <CardBody className="bg-mondo-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-mondo-500 dark:text-white"
                    >
                      {item.name}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      {item.desc}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                      <Image
                        src={item.img}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                      <div onClick={() => handleRoute(item.link)}>
                        <CardItem
                          translateZ={20}
                          as="button"
                          className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                          See Products
                        </CardItem>
                      </div>
                    </div>
                  </CardBody>
                </CardContainer>
              </motion.div>
            )
          })}
        </div>

        <Link href={'/products'} className="text-center  max-w-[150px] mx-auto">
          View All Products
        </Link>
      </div>
    </div>
  )
}

export default OurProductsSection
