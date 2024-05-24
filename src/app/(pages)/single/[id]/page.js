'use client'
import { Navbar } from '@/components/sections/navbar'
import Image from 'next/image'
import React from 'react'
import { GiMaterialsScience } from 'react-icons/gi'
import { MdMyLocation } from 'react-icons/md'

import { TbWood } from 'react-icons/tb'
import { BiCategory } from 'react-icons/bi'
import Footer from '@/components/common/Footer'
import DesktopSpecification from '@/components/common/DesktopSpecification'
import MobileSpecification from '@/components/common/MobileSpecification'

const page = ({ params }) => {
  const product = {
    'Product Name': 'Maple Wood Veneer',
    'Scientific Name': 'Acer saccharum (Sugar Maple) ',
    Origin: 'North America, United States and Canada',
    Type: 'Natural wood veneer',
    Grades: ['A Grade', 'B Grade', 'C Grade'],
    Sizes: {
      Sheets: ["4' x 8'", "4' x 10'", "5' x 10'"],
      Thickness: 'Typically ranges from 0.6 mm to 2 mm',
    },
    // Purpose: [
    //   'Furniture: Used in high-end furniture for a natural, elegant finish',
    //   'Cabinetry: Ideal for kitchen and bathroom cabinets',
    //   'Paneling: Suitable for wall panels and decorative surfaces',
    //   'Doors: Applied on doors for a premium appearance',
    //   'Architectural Millwork: Used in custom millwork and interior design projects',
    // ],
    'Product Specification': 'Detailed attributes of the Maple Wood Veneer',
    Collection: 'Natural',
    'Country of Origin': 'America',
    Category: 'Naturals',
    'Sizes Available': ["3' x 7'", "4' x 8'", "4' x 10'"],
    'Sub-category': 'Amberwood',
    'Type Available': ['Ply', 'Flexi', 'Kraft', 'MDF'],
    'Grain Pattern Available': ['Vertical Grain', 'Horizontal Grain'],
    Species: 'Maple',
    'Veneer Thickness': '0.5 mm',
    'Color Tone': 'Light Brown',
    Texture: 'Close Pore',
    'Veneer Cut': 'Crown',
    'Polished/Unpolished': 'Unpolished',
    'Botanical Name': 'Acer',
    'Density (kg/m3)': '600 - 750',
  }

  return (
    <div className="">
      <Navbar className="top-2" />

      <div className="bg-mondo-50">
        <div className="max-w-[1300px] mx-auto py-32 px-5  flex flex-col  md:flex-row gap-5">
          <Image
            src={'/images/home/about/artificial.webp'}
            height={500}
            width={500}
            className="w-full rounded-lg"
          />
          <div className="w-full h-full flex flex-col gap-7">
            <p className="text-3xl font-bold text-mondo-800">
              {product['Product Name']}
            </p>
            <div className="flex flex-col gap-8 bg-mondo-100 p-2 md:p-8 border border-mondo-300 rounded-md">
              <div className="flex flex-row gap-1 sm:gap-3 items-center ">
                <div className="flex flex-row items-center gap-1 sm:gap-3">
                  <p className="text-lg sm:text-2xl text-mondo-700">
                    <GiMaterialsScience />
                  </p>
                  <p className="text-sm sm:text-lg font-semibold text-mondo-700">
                    Scientific Name
                  </p>
                </div>
                <p>-</p>
                <p className="text-sm sm:text-lg">
                  {product['Scientific Name']}
                </p>
              </div>
              <div className="flex flex-row gap-1 sm:gap-3 items-center ">
                <div className="flex flex-row items-center gap-1 sm:gap-3">
                  <p className="text-lg sm:text-2xl text-mondo-700">
                    <MdMyLocation />
                  </p>
                  <p className="text-sm sm:text-lg font-semibold text-mondo-700">
                    Origin
                  </p>
                </div>
                <p>-</p>
                <p className="text-sm sm:text-lg">{product['Origin']}</p>
              </div>
              <div className="flex flex-row gap-1 sm:gap-3 items-center ">
                <div className="flex flex-row items-center gap-1 sm:gap-3">
                  <p className="text-lg sm:text-2xl text-mondo-700">
                    <TbWood />
                  </p>
                  <p className="text-sm sm:text-lg font-semibold text-mondo-700">
                    Type
                  </p>
                </div>
                <p>-</p>
                <p className="text-sm sm:text-lg">{product['Type']}</p>
              </div>
              <div className="flex flex-row gap-1 sm:gap-3 items-center ">
                <div className="flex flex-row items-center gap-1 sm:gap-3">
                  <p className="text-lg sm:text-2xl text-mondo-700">
                    <BiCategory />
                  </p>
                  <p className="text-sm sm:text-lg font-semibold text-mondo-700">
                    Category
                  </p>
                </div>
                <p>-</p>
                <p className="text-sm sm:text-lg">{product['Category']}</p>
              </div>
            </div>
            <button className="bg-mondo-600 max-w-[300px] p-4 text-xl text-white rounded-lg">
              Add To Quote
            </button>
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

export default page
