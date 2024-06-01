'use client'
import { Navbar } from '@/components/sections/navbar'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { GiMaterialsScience, GiRolledCloth } from 'react-icons/gi'
import { MdMyLocation, MdOutlineRequestQuote } from 'react-icons/md'
import { motion, AnimatePresence } from 'framer-motion'
import { TbWood } from 'react-icons/tb'
import { BiCategory } from 'react-icons/bi'
import Footer from '@/components/common/Footer'
import DesktopSpecification from '@/components/common/DesktopSpecification'
import MobileSpecification from '@/components/common/MobileSpecification'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css'
import InnerImageZoom from 'react-inner-image-zoom'
import CommonNav from '@/components/common/CommonNav'
import { products } from '@/data/products'
import { CiCircleRemove, CiHeart } from 'react-icons/ci'
import { RxCross1 } from 'react-icons/rx'
import { IoIosCut } from 'react-icons/io'
import { IoLeafOutline } from 'react-icons/io5'
import { PiResize } from 'react-icons/pi'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { FaHeart } from 'react-icons/fa'
import Link from 'next/link'

const Page = ({ params }) => {
  const [product, setProduct] = useState({})
  const [inWishlist, setInWishlist] = useState(false)
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState('')

  const handleQuote = () => {
    const items = JSON.parse(localStorage.getItem('quote')) // Parse the JSON string
    if (items === null) {
      localStorage.setItem('quote', JSON.stringify([product]))
      toast.success('Successfully Added to Quotation')
      router.push('/add-to-quote')
    } else {
      const single = items.filter((item) => item.id === product.id)
      if (single.length === 0) {
        localStorage.setItem('quote', JSON.stringify([...items, product]))
        toast.success('Successfully Added to Quotation')
        router.push('/add-to-quote')
      } else {
        router.push('/add-to-quote')
        toast.success('Successfully added to Quotation')
      }
    }
  }

  const handleWishlist = () => {
    const items = JSON.parse(localStorage.getItem('wishlist')) // Parse the JSON string
    if (items === null) {
      localStorage.setItem('wishlist', JSON.stringify([product]))
      toast.success('Successfully Added to Quotation')
    } else {
      const single = items.filter((item) => item.id === product.id)
      if (single.length === 0) {
        localStorage.setItem('wishlist', JSON.stringify([...items, product]))
        toast.success('Successfully Added to Wishlist')
      } else {
        toast.success('Successfully added to Wishlist')
      }
    }
    setInWishlist(true)
  }

  const handleRemoveItem = () => {
    const items = JSON.parse(localStorage.getItem('wishlist'))
    const newItem = items.filter((item) => item.id !== params.id)
    localStorage.setItem('wishlist', JSON.stringify([...newItem]))
    toast.success('Item removed from wishlist')
    setInWishlist(false)
  }
  const items = [
    { label: 'Veneer Cut', icon: <IoIosCut />, value: product['Veneer Cut'] },
    { label: 'Species', icon: <IoLeafOutline />, value: product['Species'] },
    { label: 'Origin', icon: <MdMyLocation />, value: product['Origin'] },
    { label: 'Type', icon: <TbWood />, value: product['Type'] },
    { label: 'Category', icon: <BiCategory />, value: product['Category'] },
    { label: 'Texture', icon: <GiRolledCloth />, value: product['Texture'] },
    {
      label: 'Thickness',
      icon: <PiResize />,
      value: product['Veneer Thickness'],
    },
  ]
  useEffect(() => {
    const cur = products.filter((item) => item.id === params.id)
    const items = JSON.parse(localStorage.getItem('wishlist'))
    if (items != null) {
      const inWishList = items.filter((item) => item.id === params.id)
      if (inWishList.length) {
        setInWishlist(true)
      }
    }
    console.log(cur)
    setProduct(cur[0])
    setSelectedImage(cur[0].images.img[0])
  }, [params])

  useEffect(() => {
    console.log(selectedImage, 'selectedImage')
  }, [selectedImage])

  if (!product) return null

  return (
    <div className="">
      <CommonNav />
      <div className="bg-mondo-50">
        <div className="max-w-[1300px] mx-auto py-10 md:py-32 px-5  flex flex-col  md:flex-row gap-5">
          <div className="w-full flex flex-row gap-2">
            <div className="flex flex-col gap-2">
              {product?.images?.img?.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(item)}
                  className="relative max-h-[50px] cursor-pointer"
                >
                  <Image
                    src={item}
                    width={100}
                    height={100}
                    alt={`Product Image ${index + 1}`}
                    className={`max-h-[50px] transition-opacity duration-300 ${
                      selectedImage === item ? 'opacity-100' : 'opacity-50'
                    }`}
                  />
                  {selectedImage !== item && (
                    <div className="absolute top-0 left-0 w-full max-h-[50px] bg-black bg-opacity-50"></div>
                  )}
                </div>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="w-full h-[300px] md:h-[500px] rounded-lg"
              >
                {/* <Image
                  src={selectedImage}
                  height={500}
                  width={500}
                  alt="Selected Product Image"
                  className="h-full"
                /> */}

                <InnerImageZoom
                  src={selectedImage}
                  zoomSrc={selectedImage}
                  className="h-[300px] md:h-[500px]"
                  zoomType={'hover'}
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="w-full h-full flex flex-col gap-3 sm:gap-4">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-mondo-800">
              {product['Product Name']}
            </p>
            <div className="flex flex-col gap-2 sm:gap-4 bg-mondo-100 p-2 md:p-6 border border-mondo-300 rounded-md">
              <div className="flex flex-row gap-4">
                <div className="flex flex-col text-mondo-400 font-semibold text-[11px] md:text-lg">
                  {items.map((item, index) => (
                    <p
                      key={index}
                      className="flex items-center gap-1 sm:gap-3 my-1"
                    >
                      <span className="text-sm sm:text-2xl text-mondo-700">
                        {item.icon}
                      </span>
                      {item.label}
                    </p>
                  ))}
                </div>
                <div className="flex flex-col text-mondo-400 font-semibold text-[11px] md:text-lg">
                  {items.map((_, index) => (
                    <p key={index} className="my-1">
                      :
                    </p>
                  ))}
                </div>
                <div className="flex flex-col text-mondo-600 font-semibold text-[11px] md:text-lg">
                  {items.map((item, index) => (
                    <p key={index} className="my-1">
                      {item.value}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-2 ">
              <button
                onClick={handleQuote}
                className="bg-mondo-600 max-w-[300px] flex flex-row items-center gap-2 p-2 sm:p-4 text-sm min-w-[150px] text-white rounded-lg"
              >
                <MdOutlineRequestQuote size={22} />
                Add To Quote
              </button>
              <Dialog>
                {!inWishlist && (
                  <DialogTrigger onClick={handleWishlist}>
                    <div className="bg-mondo-600 max-w-[300px] flex flex-row items-center gap-2 p-2 sm:p-4 text-sm min-w-[150px] text-white rounded-lg">
                      <CiHeart size={22} />
                      Add To Wishlist
                    </div>
                  </DialogTrigger>
                )}
                {inWishlist && (
                  <DialogTrigger onClick={handleRemoveItem}>
                    <div className="bg-mo ndo-600 max-w-[300px] flex flex-row items-center gap-2 p-2 sm:p-4 text-sm min-w-[150px] text-mondo-700 border border-mondo-900 rounded-lg">
                      <RxCross1 size={20} />
                      Remove From Wishlist
                    </div>
                  </DialogTrigger>
                )}
                {inWishlist && (
                  <DialogContent className="bg-mondo-100 max-w-[360px] flex flex-col items-center justify-center p-4">
                    <FaHeart size={36} className="text-mondo-500" />
                    <p className="text-mondo-700">
                      {product['Product Name']} added to Wishlist
                    </p>
                    <Link
                      href={'/wishlist'}
                      className="p-2 w-full flex flex-row items-center justify-center gap-2 bg-mondo-600"
                    >
                      <CiHeart size={25} className="text-mondo-100" />
                      <p className="text-mondo-100">View Wishlist</p>
                    </Link>
                  </DialogContent>
                )}
                {!inWishlist && (
                  <DialogContent className="bg-mondo-100 max-w-[360px] flex flex-col items-center justify-center p-4">
                    <CiCircleRemove size={40} className="text-mondo-500" />
                    <p className="text-mondo-700">
                      Product removed from Wishlist
                    </p>
                    <Link
                      href={'/wishlist'}
                      className="p-2 w-full flex flex-row items-center justify-center gap-2 bg-mondo-600"
                    >
                      <CiHeart size={25} className="text-mondo-100" />
                      <p className="text-mondo-100">View Wishlist</p>
                    </Link>
                  </DialogContent>
                )}
              </Dialog>
              {/* {inWishlist && (
                <button
                  onClick={() => handleRemoveItem()}
                  className="bg-mo ndo-600 max-w-[300px] flex flex-row items-center gap-2 p-2 sm:p-4 text-sm min-w-[150px] text-mondo-700 border border-mondo-900 rounded-lg"
                >
                  <RxCross1 size={20} />
                  Remove From Wishlist
                </button>
              )} */}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-mondo-100 px- 5">
        <DesktopSpecification product={product} />
        <MobileSpecification product={product} />
      </div>

      <Footer />
    </div>
  )
}

export default Page
