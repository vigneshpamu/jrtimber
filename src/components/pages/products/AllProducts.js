import Footer from '@/components/common/Footer'
import {
  CardBody,
  CardContainer,
  CardItem,
} from '@/components/sections/3d-card'
import { Navbar } from '@/components/sections/navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const data = [
  {
    link: '/',
    title: 'Cherry Crown',
    thumbnail: '/images/home/hero/Cherry-Crown_.jpg',
  },
  {
    link: '/',
    title: 'Limewash Oak',
    thumbnail: '/images/home/hero/Limewash Oak.jpg',
  },
  {
    link: '/',
    title: 'Maple Crown Cut',
    thumbnail: '/images/home/hero/Maple-Crown-Cut.jpg',
  },
  {
    link: '/',
    title: 'Rose Wood',
    thumbnail: '/images/home/hero/Rose wood.jpg',
  },
  {
    link: '/',
    title: 'Sycomore',
    thumbnail: '/images/home/hero/Sycomore.jpg',
  },
  {
    link: '/',
    title: 'Teak Golden Cut',
    thumbnail: '/images/home/hero/Teak Golden Cut.jpg',
  },
  ///////
  {
    link: '/',
    title: 'Teak Fumed',
    thumbnail: '/images/home/hero/Teak Fumed.jpeg',
  },
  {
    link: '/',
    title: 'Walnut Flat Cut',
    thumbnail: '/images/home/hero/Walnut Flat Cut.jpg',
  },
  {
    link: '/',
    title: 'Wenge',
    thumbnail: '/images/home/hero/Wenge.jpg',
  },
  {
    link: '/',
    title: 'White Ash',
    thumbnail: '/images/home/hero/White Ash.jpg',
  },
  {
    link: '/',
    title: 'American Walnut',
    thumbnail: '/images/home/hero/natural/American Walnut.jpg',
  },
  {
    link: '/',
    title: 'Anigre',
    thumbnail: '/images/home/hero/natural/Anigre.jpg',
  },

  /////

  {
    link: '/',
    title: 'Beech',
    thumbnail: '/images/home/hero/natural/Beech.jpg',
  },
  {
    link: '/',
    title: 'Bubinga Plain',
    thumbnail: '/images/home/hero/natural/Bubinga Plain.jpg',
  },
  {
    link: '/',
    title: 'Cherry Wood',
    thumbnail: '/images/home/hero/natural/Cherry Wood.jpg',
  },
  {
    link: '/',
    title: 'Ebony',
    thumbnail: '/images/home/hero/natural/Ebony.jpg',
  },
  {
    link: '/',
    title: 'Maple',
    thumbnail: '/images/home/hero/natural/Maple.jpg',
  },
  {
    link: '/',
    title: 'Mappa Burl',
    thumbnail: '/images/home/hero/natural/Mappa Burl.jpg',
  },
  {
    link: '/',
    title: 'Red Oak',
    thumbnail: '/images/home/hero/natural/Red Oak.jpg',
  },
  {
    link: '/',
    title: 'Sepele',
    thumbnail: '/images/home/hero/natural/Sepele.jpg',
  },
  {
    link: '/',
    title: 'Zebrano QC',
    thumbnail: '/images/home/hero/natural/Zebrano QC.jpg',
  },
]

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
    name: 'Laminate Veneer',
    link: '/laminate-veneer',
    img: '/images/home/about/laminate.jpg',
    desc: 'Durable laminate veneer offering a wide range of stylish finishes.',
  },
  {
    id: 5,
    name: 'Hard Wood Veneer',
    link: '/hardwood-veneer',
    img: '/images/home/about/hardwood.jpeg',
    desc: 'Premium hardwood veneer known for its strength and rich texture.',
  },
]

const AllProducts = () => {
  return (
    <div>
      <Navbar className="top-2" />
      <div className="w-full flex flex-col gap-2 md:gap-5 items-center justify-center bg-mondo-100 h-[120px] md:h-[200px]">
        <p className="text-2xl mt-12 md:mt-10   md:text-5xl uppercase font-semibold text-mondo-800">
          All Products
        </p>
        <div className="h-[3px]  w-[150px] bg-mondo-800"></div>
      </div>

      <div className="bg-mondo-50 py-10">
        <div className="max-w-[1300px] mx-auto flex flex-wrap justify-center gap-5 px-5">
          {/* <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10">
            {data.map((item, index) => {
              return (
                <Link href={item.link} key={index} className="relative group">
                  <div className="relative w-full h-[400px] overflow-hidden">
                    <Image
                      src={item.thumbnail}
                      alt={item.thumbnail}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-8 left-8">
                      <p className="text-xl font-semibold text-white">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div> */}
          {allCategory.map((item, index) => {
            return (
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
                    {/* <CardItem
                      translateZ={20}
                      as={Link}
                      href="https://twitter.com/mannupaaji"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem> */}
                    <Link href={`/products${item.link}`}>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                      >
                        See Products
                      </CardItem>
                    </Link>
                  </div>
                </CardBody>
              </CardContainer>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AllProducts
