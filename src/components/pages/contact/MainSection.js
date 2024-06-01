'use client'

import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { IoIosCall } from 'react-icons/io'
import { FaRegMap } from 'react-icons/fa'
import Link from 'next/link'
import { fadeInAnimationsVariants } from '@/utils/animate'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'
import { BiSolidMap } from 'react-icons/bi'

const MainSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, phone, message } = formData

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!name || !email) {
      toast.error('Name and Email are required fields.')
      return
    }

    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.')
      return
    }

    // Submit form data
    console.log('Form submitted:', { name, email, phone, message })
    toast.success('Message submitted successfully!')

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    })
  }

  return (
    <>
      <div className="w-full bg-mondo-400 py-5">
        <div className="max-w-[1300px] mx-auto flex items-center flex-wrap gap-10 justify-evenly">
          <motion.div
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            custom={1}
            className="flex flex-row items-start gap-2 text-white"
          >
            <div className="text-2xl">
              <AiOutlineMail />
            </div>
            <div className="mt-[-1px]">
              <p className="font-semibold">Email</p>
              <Link href={'mailto:info@timbercraftltd.com'}>
                <p className="text-[12px] font-light">
                  info@timbercraftltd.com
                </p>
              </Link>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            custom={2}
            className="flex flex-row items-start min-w-[170px] gap-2 text-white"
          >
            <div className="text-2xl">
              <IoIosCall />
            </div>
            <div className="mt-[-1px]">
              <p className="font-semibold">Phone Number</p>
              <Link href={'tel:97143881999'}>
                <p className="text-[12px] font-light">+97143881999</p>
              </Link>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            custom={3}
            className="flex flex-row items-start gap-1 text-white"
          >
            <div className="text-2xl">
              <BiSolidMap />
            </div>
            <div className="mt-[-1px]">
              <p className="font-semibold">Address</p>
              <p className="text-[12px] font-light">
                AL Quoz Industrial Area 2, Dubai UAE
              </p>
              {/* <p className="text-[12px] font-light">Dubai UAE</p> */}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="w-full bg-mondo-100 py-16">
        <div className="max-w-[1300px] mx-auto flex flex-col px-5 md:flex-row items-center gap-10 justify-center">
          <form
            className="flex gap-5 flex-col w-full md:w-auto"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-mondo-300 px-5 rounded-md"
            />
            <div className="flex flex-row gap-5">
              <input
                type="text"
                name="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-mondo-300 px-5 rounded-md"
              />
              <input
                type="text"
                name="phone"
                placeholder="Enter your Phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-mondo-300 px-5 rounded-md"
              />
            </div>
            <textarea
              name="message"
              placeholder="Type your Message"
              value={formData.message}
              onChange={handleChange}
              className="h-[200px] p-3 px-5 border border-mondo-300 resize-none rounded-md"
            ></textarea>
            <button
              type="submit"
              className="bg-mondo-300 text-white py-3 font-semibold rounded-md"
            >
              Submit Message
            </button>
          </form>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14448.266545655915!2d55.2477032!3d25.1334379!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69bdce89f621%3A0xfc58a1228b275016!2sTimberCraft%20LLC!5e0!3m2!1sen!2sin!4v1716180911226!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full md:w-[400px] lg:w-[500px] h-[410px]"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainSection
