'use client'
import { Navbar } from '@/components/sections/navbar'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { GiMaterialsScience } from 'react-icons/gi'
import { MdMyLocation } from 'react-icons/md'
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
const page = ({ params }) => {
  const data = [
    {
      id: 'Maple-25',
      'Product Name': 'Maple Wood Veneer',
      'Scientific Name': 'Acer saccharum (Sugar Maple) ',
      Origin: 'North America, United States and Canada',
      Type: 'Natural wood veneer',
      Grades: ['A Grade', 'B Grade', 'C Grade'],
      Sizes: {
        Sheets: ["4' x 8'", "4' x 10'", "5' x 10'"],
        Thickness: 'Typically ranges from 0.6 mm to 2 mm',
      },
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
      images: {
        img: [
          '/images/single/maple/main.jpg',
          '/images/single/maple/1.jpg',
          '/images/single/maple/2.jpg',
          '/images/single/maple/3.jpg',
        ],
      },
    },
    {
      id: 'Aspen-12',
      'Product Name': 'Aspen Wood Veneer',
      'Scientific Name': 'Populus tremuloides (Quaking Aspen)',
      Origin: 'North America, United States and Canada',
      Type: 'Natural wood veneer',
      Grades: ['A Grade', 'B Grade', 'C Grade'],
      Sizes: {
        Sheets: ["4' x 8'", "4' x 10'", "5' x 10'"],
        Thickness: 'Typically ranges from 0.6 mm to 2 mm',
      },

      'Product Specification': 'Detailed attributes of the Aspen Wood Veneer',
      Collection: 'Natural',
      'Country of Origin': 'America',
      Category: 'Naturals',
      'Sizes Available': ["3' x 7'", "4' x 8'", "4' x 10'"],
      'Sub-category': 'Amberwood',
      'Type Available': ['Ply', 'Flexi', 'Kraft', 'MDF'],
      'Grain Pattern Available': ['Vertical Grain', 'Horizontal Grain'],
      Species: 'Aspen',
      'Veneer Thickness': '0.5 mm',
      'Color Tone': 'Light Cream to Pale Yellow',
      Texture: 'Close Pore',
      'Veneer Cut': 'Flat Cut',
      'Polished/Unpolished': 'Unpolished',
      'Botanical Name': 'Populus',
      'Density (kg/m3)': '350 - 450',
      images: {
        img: [
          '/images/single/aspen/main.jpg',
          '/images/single/aspen/1.jpg',
          '/images/single/aspen/2.jpg',
          '/images/single/aspen/3.jpg',
        ],
      },
    },
    {
      id: 'Basswood-10',
      'Product Name': 'Basswood Veneer',
      'Scientific Name': 'Tilia americana (American Basswood)',
      Origin: 'North America, United States and Canada',
      Type: 'Natural wood veneer',
      Grades: ['A Grade', 'B Grade', 'C Grade'],
      Sizes: {
        Sheets: ["4' x 8'", "4' x 10'", "5' x 10'"],
        Thickness: 'Typically ranges from 0.6 mm to 2 mm',
      },
      'Product Specification': 'Detailed attributes of the Basswood Veneer',
      Collection: 'Natural',
      'Country of Origin': 'America',
      Category: 'Naturals',
      'Sizes Available': ["3' x 7'", "4' x 8'", "4' x 10'"],
      'Sub-category': 'Amberwood',
      'Type Available': ['Ply', 'Flexi', 'Kraft', 'MDF'],
      'Grain Pattern Available': ['Vertical Grain', 'Horizontal Grain'],
      Species: 'Basswood',
      'Veneer Thickness': '0.5 mm',
      'Color Tone': 'Light Cream',
      Texture: 'Close Pore',
      'Veneer Cut': 'Plain Sawn',
      'Polished/Unpolished': 'Unpolished',
      'Botanical Name': 'Tilia',
      'Density (kg/m3)': '320 - 450',
      images: {
        img: [
          '/images/single/basswood/main.jpg',
          '/images/single/basswood/1.jpg',
          '/images/single/basswood/2.jpg',
        ],
      },
    },
    {
      id: 'Cherry-10',
      'Product Name': 'Cherry Wood Veneer',
      'Scientific Name': 'Prunus serotina (Black Cherry)',
      Origin: 'North America, United States and Canada',
      Type: 'Natural wood veneer',
      Grades: ['A Grade', 'B Grade', 'C Grade'],
      Sizes: {
        Sheets: ["4' x 8'", "4' x 10'", "5' x 10'"],
        Thickness: 'Typically ranges from 0.6 mm to 2 mm',
      },
      'Product Specification': 'Detailed attributes of the Cherry Wood Veneer',
      Collection: 'Natural',
      'Country of Origin': 'America',
      Category: 'Naturals',
      'Sizes Available': ["3' x 7'", "4' x 8'", "4' x 10'"],
      'Sub-category': 'Amberwood',
      'Type Available': ['Ply', 'Flexi', 'Kraft', 'MDF'],
      'Grain Pattern Available': ['Vertical Grain', 'Horizontal Grain'],
      Species: 'Cherry',
      'Veneer Thickness': '0.5 mm',
      'Color Tone': 'Reddish Brown',
      Texture: 'Fine Pore',
      'Veneer Cut': 'Crown',
      'Polished/Unpolished': 'Unpolished',
      'Botanical Name': 'Prunus',
      'Density (kg/m3)': '580 - 700',
      images: {
        img: [
          '/images/single/cherry/main.jpg',
          '/images/single/cherry/1.jpg',
          '/images/single/cherry/2.jpg',
        ],
      },
    },
  ]

  const [product, setProduct] = useState({})
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

  useEffect(() => {
    const cur = data.filter((item) => item.id === params.id)
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
      {/* <Navbar className="top-2" /> */}
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
                {/* <SideBySideMagnifier
                  alwaysInPlace={true}
                  imageSrc={selectedImage}
                  interactionSettings={{ tapDurationInMs: 300 }}
                /> */}
                <InnerImageZoom
                  src={selectedImage}
                  zoomSrc={selectedImage}
                  className="h-[300px] md:h-[500px]"
                  zoomType={'hover'}
                />
                {/* <img src={img} alt="" /> */}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="w-full h-full flex flex-col gap-3 sm:gap-7">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-mondo-800">
              {product['Product Name']}
            </p>
            <div className="flex flex-col gap-2 sm:gap-4 bg-mondo-100 p-2 md:p-8 border border-mondo-300 rounded-md">
              <div className="flex flex-row gap-1 sm:gap-3 items-center ">
                <div className="flex flex-row items-center gap-1 sm:gap-3">
                  <p className="text-sm sm:text-2xl text-mondo-700">
                    <GiMaterialsScience />
                  </p>
                  <p className="text-[10px] sm:text-lg font-semibold text-mondo-700">
                    Scientific Name
                  </p>
                </div>
                <p>-</p>
                <p className="text-[12px] sm:text-lg">
                  {product['Scientific Name']}
                </p>
              </div>
              <div className="flex flex-row gap-1 sm:gap-3 items-center ">
                <div className="flex flex-row items-center gap-1 sm:gap-3">
                  <p className="text-sm sm:text-2xl text-mondo-700">
                    <MdMyLocation />
                  </p>
                  <p className="text-[10px] sm:text-lg font-semibold text-mondo-700">
                    Origin
                  </p>
                </div>
                <p>-</p>
                <p className="text-[12px] sm:text-lg">{product['Origin']}</p>
              </div>
              <div className="flex flex-row gap-1 sm:gap-3 items-center ">
                <div className="flex flex-row items-center gap-1 sm:gap-3">
                  <p className="text-sm sm:text-2xl text-mondo-700">
                    <TbWood />
                  </p>
                  <p className="text-[10px] sm:text-lg font-semibold text-mondo-700">
                    Type
                  </p>
                </div>
                <p>-</p>
                <p className="text-[12px] sm:text-lg">{product['Type']}</p>
              </div>
              <div className="flex flex-row gap-1 sm:gap-3 items-center ">
                <div className="flex flex-row items-center gap-1 sm:gap-3">
                  <p className="text-sm sm:text-2xl text-mondo-700">
                    <BiCategory />
                  </p>
                  <p className="text-[10px] sm:text-lg font-semibold text-mondo-700">
                    Category
                  </p>
                </div>
                <p>-</p>
                <p className="text-[12px] sm:text-lg">{product['Category']}</p>
              </div>
            </div>
            <div className="flex flex-row gap-2 ">
              <button
                onClick={handleQuote}
                className="bg-mondo-600 max-w-[300px] p-2 sm:p-4 text-sm min-w-[150px]  text-white rounded-lg"
              >
                Add To Quote
              </button>
              <button className="bg-mondo-600 max-w-[300px] p-2 sm:p-4 text-sm min-w-[150px] text-white rounded-lg">
                Add To Wishlist
              </button>
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

export default page
