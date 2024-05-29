'use client'
import CommonNav from '@/components/common/CommonNav'
import Footer from '@/components/common/Footer'
import { Navbar } from '@/components/sections/navbar'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
const AddToQuotePage = () => {
  const [quoteItems, setQuoteItems] = useState([])

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('quote'))
    console.log(items)
    setQuoteItems(items)
  }, [])

  return (
    <div>
      <CommonNav />

      <div className="w-full flex flex-col gap-2 md:gap-5 items-center justify-center bg-mondo-100 h-[80px] md:h-[200px]">
        <p className="text-xl  sm:text-2xl   md:text-5xl uppercase font-semibold text-mondo-800">
          Add To Quote
        </p>
        <div className="h-[3px] w-[100px]  md:w-[150px] bg-mondo-800"></div>
      </div>
      <div className="bg-mondo-50 py-10 px-5">
        <div className="max-w-[1300px] flex flex-col md:flex-row gap-10 items-start  justify-between mx-auto">
          <div className="flex flex-col gap-10 ">
            {quoteItems.map((item, index) => {
              return (
                <div key={index} className="flex flex-row gap-5">
                  <Image
                    src={item.images.img[0]}
                    width={150}
                    height={150}
                    alt={item['Product Name']}
                    className="max-h-[120px] min-w-[120px] md:max-h-[150px] md:min-w-[150px]  rounded-lg"
                  />
                  <div className="flex flex-col justify-between">
                    <p className="font-semibold text-xl text-mondo-700">
                      {item['Product Name']}
                    </p>
                    <div className="flex flex-row gap-2">
                      <div className="text-mondo-400 font-semibold text-[11px] md:text-lg">
                        <p>Species</p>
                        <p>Veneer Cut</p>
                        <p>Scientific Name</p>
                      </div>
                      <div className="text-mondo-400 font-semibold text-[11px] md:text-lg">
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                      </div>
                      <div className="text-mondo-600 font-semibold text-[11px] md:text-lg">
                        <p>{item['Species']}</p>
                        <p>{item['Veneer Cut']}</p>
                        <p>{item['Scientific Name']}</p>
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-2 cursor-pointer">
                      <RiDeleteBin6Line className="text-md md:text-xl text-mondo-900" />
                      <p className="text-[11px] md:text-lg text-mondo-700">
                        Remove
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="flex flex-col w-f ull gap-5">
            <div className="flex flex-row gap-5">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-2 border border-mondo-300"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-2 border border-mondo-300"
              />
            </div>
            <div className="flex flex-row gap-5">
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-2 border border-mondo-300"
              />
              <input
                type="text"
                placeholder="Email"
                className="w-full p-2 border border-mondo-300"
              />
            </div>
            <textarea
              placeholder="Type your Message"
              className="h-[200px] p-3 px-5 border border-mondo-300 resize-none"
            ></textarea>
            <button className="bg-mondo-400 hover:bg-mondo-300 transition-all p-3 text-white font-semibold rounded-md">
              Submit Quotation
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AddToQuotePage
