'use client'
import CommonNav from '@/components/common/CommonNav'
import Footer from '@/components/common/Footer'
import ProductCard from '@/components/common/ProductCard'
import {
  CardBody,
  CardContainer,
  CardItem,
} from '@/components/sections/3d-card'
import { Navbar } from '@/components/sections/navbar'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { MdOutlineFilterList } from 'react-icons/md'

const data = [
  {
    link: '/',
    title: 'Cherry Crown',
    thumbnail: '/images/home/hero/Cherry-Crown_.jpg',
    category: 'natural veneer',
  },
  {
    link: '/',
    title: 'Limewash Oak',
    thumbnail: '/images/home/hero/Limewash Oak.jpg',
    category: 'dyed veneer',
  },
  {
    link: '/',
    title: 'Maple Crown Cut',
    thumbnail: '/images/home/hero/Maple-Crown-Cut.jpg',
    category: 'laminates',
  },
  {
    link: '/',
    title: 'Rose Wood',
    thumbnail: '/images/home/hero/Rose wood.jpg',
    category: 'dyed veneer',
  },
  {
    link: '/',
    title: 'Sycomore',
    thumbnail: '/images/home/hero/Sycomore.jpg',
    category: 'dyed veneer',
  },
  {
    link: '/',
    title: 'Teak Golden Cut',
    thumbnail: '/images/home/hero/Teak Golden Cut.jpg',
    category: 'dyed veneer',
  },
  {
    link: '/',
    title: 'Teak Fumed',
    thumbnail: '/images/home/hero/Teak Fumed.jpeg',
    category: 'artificial veneer',
  },
  {
    link: '/',
    title: 'Walnut Flat Cut',
    thumbnail: '/images/home/hero/Walnut Flat Cut.jpg',
    category: 'hardwood',
  },
  {
    link: '/',
    title: 'Wenge',
    thumbnail: '/images/home/hero/Wenge.jpg',
    category: 'laminates',
  },
  {
    link: '/',
    title: 'White Ash',
    thumbnail: '/images/home/hero/White Ash.jpg',
    category: 'artificial veneer',
  },
  {
    link: '/',
    title: 'American Walnut',
    thumbnail: '/images/home/hero/natural/American Walnut.jpg',
    category: 'natural veneer',
  },
  {
    link: '/',
    title: 'Anigre',
    thumbnail: '/images/home/hero/natural/Anigre.jpg',
    category: 'natural veneer',
  },
  {
    link: '/',
    title: 'Beech',
    thumbnail: '/images/home/hero/natural/Beech.jpg',
    category: 'natural veneer',
  },
  {
    link: '/',
    title: 'Bubinga Plain',
    thumbnail: '/images/home/hero/natural/Bubinga Plain.jpg',
    category: 'dyed veneer',
  },
  {
    link: '/',
    title: 'Cherry Wood',
    thumbnail: '/images/home/hero/natural/Cherry Wood.jpg',
    category: 'hardwood',
  },
  {
    link: '/',
    title: 'Ebony',
    thumbnail: '/images/home/hero/natural/Ebony.jpg',
    category: 'dyed veneer',
  },
  {
    link: '/',
    title: 'Maple',
    thumbnail: '/images/home/hero/natural/Maple.jpg',
    category: 'dyed veneer',
  },
  {
    link: '/',
    title: 'Mappa Burl',
    thumbnail: '/images/home/hero/natural/Mappa Burl.jpg',
    category: 'dyed veneer',
  },
  {
    link: '/',
    title: 'Red Oak',
    thumbnail: '/images/home/hero/natural/Red Oak.jpg',
    category: 'hardwood',
  },
  {
    link: '/',
    title: 'Sepele',
    thumbnail: '/images/home/hero/natural/Sepele.jpg',
    category: 'artificial veneer',
  },
  {
    link: '/',
    title: 'Zebrano QC',
    thumbnail: '/images/home/hero/natural/Zebrano QC.jpg',
    category: 'laminates',
  },
]

const categories = [
  'artificial veneer',
  'natural veneer',
  'dyed veneer',
  'laminates',
  'hardwood',
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

const tabs = [
  {
    value: 'artificial veneer',
    label: 'Artificial Veneer',
  },
  {
    value: 'natural veneer',
    label: 'Natural Veneer',
  },
  {
    value: 'dyed veneer',
    label: 'Dyed Veneer',
  },
  {
    value: 'laminates',
    label: 'Laminates',
  },
  {
    value: 'hardwood',
    label: 'Premium Hardwood',
  },
]

const AllProducts = () => {
  const [activeTab, setActiveTab] = useState('')
  const [previousItem, setPreviousItem] = useState([])
  const [filteredItem, setFilteredItem] = useState([])
  const [input, setInput] = useState('')

  const handleTabChange = (val) => {
    localStorage.setItem('routeName', val)
    const fdata = data.filter((item) => item.category === val)
    setFilteredItem(fdata)
    setPreviousItem(fdata)
    setActiveTab(val)
  }

  useEffect(() => {
    const route = localStorage.getItem('routeName')
    const fdata = data.filter((item) => item.category === route)
    setFilteredItem(fdata)
    setPreviousItem(fdata)
    setActiveTab(route)
  }, [])

  const handleText = (input) => {
    setInput(input)
    const filtered = data.filter(
      (item) =>
        item.title.toLowerCase().includes(input.toLowerCase()) &&
        item.category.toLowerCase().includes(activeTab.toLowerCase())
    )

    console.log(filtered)
    if (filtered.length !== data.length) {
      setFilteredItem(filtered)
    } else {
      setFilteredItem(previousItem)
    }
  }

  return (
    <div>
      {/* <Navbar className="top-2" /> */}
      <CommonNav />
      <div className="w-full flex flex-col gap-2 md:gap-5 items-center justify-center bg-mondo-100 h-[80px] md:h-[200px]">
        <p className="text-xl  sm:text-2xl   md:text-5xl uppercase font-semibold text-mondo-800">
          All Products
        </p>
        <div className="h-[3px] w-[100px]  md:w-[150px] bg-mondo-800"></div>
      </div>

      <div className="bg-mondo-50 py-10">
        <div className="max-w-[1300px] mx-auto flex flex-wrap items-start justify-center gap-5 px-5">
          <div className="w-full">
            <nav
              className="relative z-0 flex border rounded-xl overflow-hidden"
              aria-label="Tabs"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  type="button"
                  className={`relative min-w-0 flex-1 bg-mondo-50 first:border-s-0 border-s border-b-2 py-4 px-4 text-[11px] sm:text-sm font-medium text-center overflow-hidden ${
                    activeTab === tab.value
                      ? 'border-b-mondo-600 text-mondo-900'
                      : 'text-mondo-500 hover:text-mondo-700 hover:bg-mondo-100'
                  } focus:z-10 focus:outline-none focus:text-mondo-600`}
                  onClick={() => handleTabChange(tab.value)}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="w-full flex flex-row gap-5">
            <input
              type="text"
              name=""
              id=""
              value={input}
              onChange={(e) => handleText(e.target.value)}
              className="p-2 w-full px-4 bg-transparent border border-mondo-400 rounded-md"
              placeholder="Search"
            />
            <div className="flex flex-row items-center gap-2 bg-mondo-500 hover:bg-mondo-400 transition-all cursor-pointer text-white p-2 px-8 rounded-md">
              <MdOutlineFilterList className="text-2xl" />
              <p>Filter</p>
            </div>
          </div>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode="wait">
              {filteredItem.map((item, index) => {
                return (
                  <motion.div
                    layout
                    key={index}
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.07 }} // Adjust delay here
                    className="w-[384px]"
                  >
                    <Link href={item.link} className="relative group">
                      {/* <div className="relative w-full h-[400px] overflow-hidden">
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
                      </div> */}
                      <ProductCard item={item} />
                    </Link>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AllProducts
