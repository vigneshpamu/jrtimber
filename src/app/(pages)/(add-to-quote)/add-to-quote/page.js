'use client'
import CommonNav from '@/components/common/CommonNav'
import Footer from '@/components/common/Footer'
import { Navbar } from '@/components/sections/navbar'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { RiDeleteBin6Line } from 'react-icons/ri'
const AddToQuotePage = () => {
  const [quoteItems, setQuoteItems] = useState([])
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: '',
  })

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = () => {
    const { firstName, lastName, email } = form
    if (!firstName || !lastName || !email) {
      toast.error('First Name, Last Name, and Email are required.')
      return
    }

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address.')
      return
    }

    // Submit the form
    toast.success('Quotation submitted successfully.')
  }

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('quote'))
    if (items != null && items.length) {
      console.log(items)
      setQuoteItems(items)
    }
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
          {quoteItems.length > 0 && (
            <div className="flex flex-col gap-10 ">
              {quoteItems?.map((item, index) => {
                return (
                  <div key={index} className="flex flex-row gap-5">
                    <Image
                      src={item.images.img[0]}
                      width={150}
                      height={150}
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
          )}
          {quoteItems.length === 0 && (
            <div className="flex items-center justify-center  border bg-mondo-100 rounded-md w-full md:w-[70%] h-[200px] md:h-[400px]">
              <p className="text-2xl font-semibold">No Items</p>
            </div>
          )}
          <div className="flex flex-col w-f ull gap-5">
            <div className="flex flex-row gap-5">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full p-2 border border-mondo-300"
                value={form.firstName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full p-2 border border-mondo-300"
                value={form.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-row gap-5">
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                className="w-full p-2 border border-mondo-300"
                value={form.phoneNumber}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="w-full p-2 border border-mondo-300"
                value={form.email}
                onChange={handleInputChange}
              />
            </div>
            <textarea
              name="message"
              placeholder="Type your Message"
              className="h-[200px] p-3 px-5 border border-mondo-300 resize-none"
              value={form.message}
              onChange={handleInputChange}
            ></textarea>
            <button
              onClick={handleSubmit}
              className="bg-mondo-400 hover:bg-mondo-300 transition-all p-3 text-white font-semibold rounded-md"
            >
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
