'use client'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { HeroParallax } from '../ui/hero-parallax'

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

export function HeroParallaxDemo() {
  const [products, setProducts] = useState(data)

  useEffect(() => {
    // for (let i = 1; i < 4; i++) {
    //   for (let j = 1; j < 5; j++) {
    //     setProducts((prev) => [
    //       ...prev,
    //       {
    //         title: 'Moonbeam' + i + j,
    //         link: '',
    //         thumbnail:
    //           'https://timbercraftltd.com/wp-content/uploads/2023/11/download-' +
    //           i +
    //           '-' +
    //           j +
    //           '.jpg',
    //       },
    //     ])
    //   }
    //   console.log(products)
    // }
  }, [])

  useEffect(() => {
    console.log(products)
  }, [products])
  return products && <HeroParallax products={products} />
}
