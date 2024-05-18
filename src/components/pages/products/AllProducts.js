import Footer from '@/components/common/Footer'
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

const AllProducts = () => {
  return (
    <div>
      <div className="w-full flex flex-col gap-5 items-center justify-center bg-mondo-100 h-[120px] md:h-[170px]">
        <p className="text-2xl sm:text-3xl md:text-5xl uppercase font-semibold text-mondo-800">
          All Products
        </p>
        <div className="h-[3px]  w-[150px] bg-mondo-800"></div>
      </div>

      <div className="bg-mondo-50 py-10">
        <div className="max-w-[1300px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10">
            {data.map((item, index) => {
              return (
                <Link href={item.link} key={index} className="relative group">
                  <div className="relative w-full h-[400px] overflow-hidden">
                    <Image
                      src={item.thumbnail}
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AllProducts
