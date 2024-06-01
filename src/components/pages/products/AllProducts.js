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
import { products } from '@/data/products'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { MdOutlineFilterList } from 'react-icons/md'

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
  const [activeTab, setActiveTab] = useState('artificial veneer')
  const [previousItem, setPreviousItem] = useState([])
  const [filteredItem, setFilteredItem] = useState([])
  const [input, setInput] = useState('')

  const handleTabChange = (val) => {
    localStorage.setItem('routeName', val)
    const fdata = products.filter((item) => item['Category'] === val)
    setFilteredItem(fdata)
    setPreviousItem(fdata)
    setActiveTab(val)
  }

  useEffect(() => {
    const route = localStorage.getItem('routeName')
    if (route?.length && route != null) {
      const fdata = products.filter((item) => item['Category'] === route)
      setFilteredItem(fdata)
      setPreviousItem(fdata)
      setActiveTab(route)
    } else {
      const fdata = products.filter((item) => item['Category'] === activeTab)
      setFilteredItem(fdata)
      setPreviousItem(fdata)
    }
  }, [])

  const handleText = (input) => {
    setInput(input)
    const filtered = products.filter(
      (item) =>
        item['Product Name'].toLowerCase().includes(input.toLowerCase()) &&
        item['Category'].toLowerCase().includes(activeTab.toLowerCase())
    )

    console.log(filtered)
    if (filtered.length !== products.length) {
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
                  className={`relative min-w-0 flex-1 bg-mondo-50 first:border-s-0 border-s border-b-2 py-2 sm:py-4 px-2 sm:px-4 text-[9px] sm:text-sm font-medium text-center overflow-hidden ${
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
                    className="w-full "
                  >
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
