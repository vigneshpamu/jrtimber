import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { IoIosCall } from 'react-icons/io'
import { FaRegMap } from 'react-icons/fa'
import Link from 'next/link'
const MainSection = () => {
  return (
    <>
      <div className="w-full bg-mondo-400 py-5">
        <div className="max-w-[1300px] mx-auto flex items-center flex-wrap gap-10 justify-evenly">
          <div className="flex flex-row items-start gap-2 text-white">
            <div className="text-2xl">
              <AiOutlineMail />
            </div>
            <div className="mt-[-3px]">
              <p className="font-semibold">Email</p>
              <Link href={'mailto:info@timbercraftltd.com'}>
                <p className="text-[12px] font-light">
                  info@timbercraftltd.com
                </p>
              </Link>
            </div>
          </div>
          <div className="flex flex-row items-start min-w-[170px] gap-2 text-white">
            <div className="text-2xl">
              <IoIosCall />
            </div>
            <div className="mt-[-3px]">
              <p className="font-semibold">Phone Number</p>
              <Link href={'tel:97143881999'}>
                <p className="text-[12px] font-light">+97143881999</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-row items-start gap-2 text-white">
            <div className="text-2xl">
              <FaRegMap />
            </div>
            <div className="mt-[-3px]">
              <p className="font-semibold">Address</p>
              <p className="text-[12px] font-light">
                AL Quoz Industrial Area 2
              </p>
              <p className="text-[12px] font-light">Al Quoz 2 Dubai UAE</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-mondo-100 py-16">
        <div className="max-w-[1300px] mx-auto  flex flex-col px-5 md:flex-row items- center gap-10 justify-center">
          <div className="flex gap-5 flex-col">
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full p-3 border border-mondo-300 px-5"
            />
            <div className="flex flex-row gap-5">
              <input
                type="text"
                placeholder="Enter your Email"
                className="w-full p-3 border border-mondo-300 px-5"
              />
              <input
                type="text"
                placeholder="Enter your Phone number"
                className="w-full p-3 border border-mondo-300 px-5"
              />
            </div>
            <textarea
              placeholder="Type your Message"
              className="h-[200px] p-3 px-5 border border-mondo-300 resize-none"
            ></textarea>
            <button className="bg-mondo-300 text-white py-3 font-semibold">
              Submit Message
            </button>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14448.266545655915!2d55.2477032!3d25.1334379!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69bdce89f621%3A0xfc58a1228b275016!2sTimberCraft%20LLC!5e0!3m2!1sen!2sin!4v1716180911226!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full md:w-[400px] h-[410px]"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainSection
