'use client'
import React, { useEffect, useState } from 'react'
import { BackgroundGradient } from '../sections/background-gradient'
import Image from 'next/image'
import { toast } from 'react-hot-toast'
import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io'
import Link from 'next/link'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { CiCircleRemove, CiHeart } from 'react-icons/ci'
import { FaHeart } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'

const ProductCard = ({ item }) => {
  const [inWishlist, setInWishlist] = useState(false)

  const handleWishlist = () => {
    const items = JSON.parse(localStorage.getItem('wishlist')) // Parse the JSON string
    if (items === null) {
      localStorage.setItem('wishlist', JSON.stringify([item]))
      toast.success('Successfully Added to Wishlist')
    } else {
      const single = items.filter((pro) => pro.id === item.id)
      if (single.length === 0) {
        localStorage.setItem('wishlist', JSON.stringify([...items, item]))
        toast.success('Successfully Added to Wishlist')
      } else {
        toast.success('Successfully added to Wishlist')
      }
    }
    setInWishlist(true)
  }

  const handleRemoveItem = () => {
    const items = JSON.parse(localStorage.getItem('wishlist'))
    const newItem = items.filter((pro) => pro.id !== item.id)
    localStorage.setItem('wishlist', JSON.stringify([...newItem]))
    toast.success('Item removed from wishlist')
    setInWishlist(false)
  }

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('wishlist'))
    if (items != null) {
      const inWishList = items.filter((pro) => pro.id === item.id)
      if (inWishList.length) {
        setInWishlist(true)
      }
    }
  }, [])

  return (
    <div>
      <BackgroundGradient className="rounded-lg max-w-sm  0 bg -white dark:bg-zinc-900">
        <div className="relative !rounded-xl w-full h-[400px] overflow-hidden">
          <Link href={item.id ? `/single/${item.id}` : '/'}>
            <Image
              src={item?.images?.img[0]}
              width={500}
              height={500}
              alt={item['Product Name']}
              className="w-[350px] h-full !rounded-3xl object-cover  "
            />

            <div className="absolute left-5 bottom-0 p-2 px-5 bg-mondo-400 border border-mondo-600 rounded-tl-lg rounded-tr-lg">
              <p className="text-white font-semibold">{item['Product Name']}</p>
            </div>
          </Link>
          {/* {!inWishlist && (
            <div
              onClick={handleWishlist}
              className="absolute top-5 right-5 p-2 bg-mondo-50 rounded-lg hover:bg-mondo-100 transition-all"
            >
              <IoIosHeartEmpty size={22} />
            </div>
          )}

          {inWishlist && (
            <div
              onClick={handleRemoveItem}
              className="absolute top-5 right-5 p-2 text-mondo-600 bg-mondo-50 rounded-lg hover:bg-mondo-100 transition-all"
            >
              <IoMdHeart size={22} />
            </div>
          )} */}
          <Dialog>
            {!inWishlist && (
              <DialogTrigger onClick={handleWishlist}>
                <div className="absolute top-5 right-5 p-2 bg-mondo-50 rounded-lg hover:bg-mondo-100 transition-all">
                  <IoIosHeartEmpty size={22} />
                </div>
              </DialogTrigger>
            )}
            {inWishlist && (
              <DialogTrigger onClick={handleRemoveItem}>
                <div className="absolute top-5 right-5 p-2 text-mondo-600 bg-mondo-50 rounded-lg hover:bg-mondo-100 transition-all">
                  <IoMdHeart size={22} />
                </div>
              </DialogTrigger>
            )}
            {inWishlist && (
              <DialogContent className="bg-mondo-100 max-w-[360px] flex flex-col items-center justify-center p-4">
                <FaHeart size={36} className="text-mondo-500" />
                <p className="text-mondo-700">
                  '{item['Product Name']}' added to Wishlist
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
                <p className="text-mondo-700">Product removed from Wishlist</p>
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
        </div>
      </BackgroundGradient>
    </div>
  )
}

export default ProductCard
