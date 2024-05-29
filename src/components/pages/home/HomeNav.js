'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PiBasketThin } from 'react-icons/pi'
import { AnimatePresence, motion } from 'framer-motion'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const HomeNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const sidebarVariants = {
    open: {
      x: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
    closed: {
      x: '-100%',
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  }

  const linkVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
    closed: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.5 },
    },
  }

  const stagger = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.5 },
    },
    closed: { opacity: 0 },
  }

  const item = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: 50 },
  }
  return (
    <div className="relative max-w-[1300px] mx-auto z-20">
      <div className="absolute p-4 py-6 top-0 w-full left-1/2 transform -translate-x-1/2 flex flex-row justify-between">
        <Image
          src={'/images/common/logo.svg'}
          width={200}
          height={250}
          alt="Logo"
        />

        <div className="hidden md:flex flex-row gap-6 items-center">
          <Link
            href={'/services'}
            className="text-lg hover:text-mondo-300 transition-all cursor-pointer"
          >
            Services
          </Link>
          <Link
            href={'/products'}
            className="text-lg hover:text-mondo-300 transition-all cursor-pointer"
          >
            Products
          </Link>
          <Link
            href={'/about'}
            className="text-lg hover:text-mondo-300 transition-all cursor-pointer"
          >
            About
          </Link>
          <Link
            href={'/contact'}
            className="text-lg hover:text-mondo-300 transition-all cursor-pointer"
          >
            Contact
          </Link>
          <Link href={'/wishlist'}>
            <PiBasketThin className="text-mondo-400 text-3xl" />
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <AiOutlineMenu size={30} />
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              className="fixed top-0 left-0 w-full h-[100vh] bg-mondo-50 z-50 flex flex-col items-center justify-center"
            >
              <button onClick={toggleMenu} className="absolute top-4 right-4">
                <AiOutlineClose size={30} />
              </button>
              <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2">
                <Image
                  src={'/images/common/logo.svg'}
                  width={200}
                  height={250}
                  alt="Logo"
                />
              </div>

              <motion.div
                variants={stagger}
                className="flex flex-col items-center"
              >
                <motion.div variants={item} className="my-4">
                  <Link
                    href={'/services'}
                    className="text-lg hover:text-mondo-300 transition-all cursor-pointer"
                    onClick={toggleMenu}
                  >
                    Services
                  </Link>
                </motion.div>
                <motion.div variants={item} className="my-4">
                  <Link
                    href={'/products'}
                    className="text-lg hover:text-mondo-300 transition-all cursor-pointer"
                    onClick={toggleMenu}
                  >
                    Products
                  </Link>
                </motion.div>
                <motion.div variants={item} className="my-4">
                  <Link
                    href={'/about'}
                    className="text-lg hover:text-mondo-300 transition-all cursor-pointer"
                    onClick={toggleMenu}
                  >
                    About
                  </Link>
                </motion.div>
                <motion.div variants={item} className="my-4">
                  <Link
                    href={'/contact'}
                    className="text-lg hover:text-mondo-300 transition-all cursor-pointer"
                    onClick={toggleMenu}
                  >
                    Contact
                  </Link>
                </motion.div>
                <motion.div variants={item} className="my-4">
                  <Link
                    href={'/wishlist'}
                    className="my-4"
                    onClick={toggleMenu}
                  >
                    <PiBasketThin className="text-mondo-400 text-3xl" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default HomeNav
