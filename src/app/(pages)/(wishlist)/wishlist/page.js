'use client'
import CommonNav from '@/components/common/CommonNav'
import Footer from '@/components/common/Footer'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { AiOutlineClose } from 'react-icons/ai'

const Page = () => {
  const [wishlistItem, setWishlistItems] = useState([])

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('wishlist'))
    if (items?.length && items != null) {
      console.log(items)
      setWishlistItems(items)
    }
  }, [])

  const handleRemoveItem = (id) => {
    const items = JSON.parse(localStorage.getItem('wishlist'))
    const newItem = items.filter((item) => item.id !== id)
    setWishlistItems(newItem)
    localStorage.setItem('wishlist', JSON.stringify([...newItem]))
    toast.success('Item removed from wishlist')
  }

  return (
    <div>
      <CommonNav />

      <div className="w-full flex flex-col gap-2 md:gap-5 items-center justify-center bg-mondo-100 h-[80px] md:h-[200px]">
        <p className="text-xl  sm:text-2xl   md:text-5xl uppercase font-semibold text-mondo-800">
          Wishlist
        </p>
        <div className="h-[3px] w-[100px]  md:w-[150px] bg-mondo-800"></div>
      </div>
      <div className="bg-mondo-50 py-10 px-5">
        <div className=" w-[600 px] max-w-[1300px]  mx-auto overflow-x-scroll sm:overflow-hidden">
          {wishlistItem.length > 0 && (
            <table className="min-w-full bg-mondo-200 ">
              <thead>
                <tr>
                  <th className="text-mondo-600 px-4 py-2 border-b-2 border-gray-200 w-1/12">
                    ID
                  </th>
                  <th className="text-mondo-600 px-4 py-2 border-b-2 border-gray-200 w-1/12">
                    Image
                  </th>
                  <th className="text-mondo-600 px-4 py-2 border-b-2 border-gray-200 w-1/5">
                    Product Name
                  </th>
                  <th className="text-mondo-600 px-4 py-2 border-b-2 border-gray-200 w-1/5">
                    Category
                  </th>
                  <th className="text-mondo-600 px-4 py-2 border-b-2 border-gray-200 w-1/5">
                    Thickness
                  </th>
                  <th className="text-mondo-600 px-4 py-2 border-b-2 border-gray-200 w-1/5">
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                {wishlistItem.map((product) => (
                  <tr className="bg-mondo-50" key={product.id}>
                    <td className="px-4 py-2 border-b border-gray-200 w-1/12">
                      <p className="text-center">{product['id']}</p>
                    </td>
                    <td className="px-4 py-2 border-b  border-gray-200 w-1/12">
                      <Image
                        width="500"
                        height="500"
                        src={product.images.img[0]}
                        alt={product.name}
                        className="w-[150px] max-h-[70px] object-cover"
                      />
                    </td>
                    <td className="px-4 py-2 border-b  border-gray-200 min-w-[190px] sm:w-1/5">
                      <div className="w-full flex items-center justify-center">
                        <Link
                          href={`/single/${product.id}`}
                          className="text-center hover:underline"
                        >
                          {product['Product Name']}
                        </Link>
                      </div>
                    </td>
                    <td className="px-4 py-2 border-b border-gray-200 min-w-[190px] sm:w-1/5">
                      <p className="text-center capitalize">
                        {product['Category']}
                      </p>
                    </td>
                    <td className="px-4 py-2 border-b border-gray-200 min-w-[190px] sm:w-1/6">
                      <p className="text-center capitalize">
                        {product['Veneer Thickness']}
                      </p>
                    </td>
                    <td className="px-4 py-2 border-b  border-gray-200 w-1/5 text-center">
                      <button
                        onClick={() => handleRemoveItem(product.id)}
                        className="rotate-hover"
                      >
                        <AiOutlineClose size={30} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {wishlistItem.length === 0 && (
            <div className="py-20 w-full flex items-center justify-center font-semibold text-lg  md:text-2xl bg-mondo-100 capitalize rounded-md">
              No Products in Wishlist
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Page
