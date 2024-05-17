import Image from 'next/image'
import React from 'react'

const newArr = [
  {
    id: 1,
    name: 'Aspen',
    imgUrl: '/images/home/product/all-products/1.jpg',
    description:
      'Aspen wood is lightweight, soft, and known for its fine texture and uniform grain patterns.',
  },
  {
    id: 2,
    name: 'Basswood',
    imgUrl: '/images/home/product/all-products/2.jpg',
    description:
      'Basswood is a soft, light wood, favored for carving and detailed woodwork due to its smooth grain.',
  },
  {
    id: 3,
    name: 'Cherry',
    imgUrl: '/images/home/product/all-products/3.jpg',
    description:
      'Cherry wood is prized for its rich color, smooth grain, durability and others in fine furniture making.',
  },
  {
    id: 4,
    name: 'Hard Maple',
    imgUrl: '/images/home/product/all-products/4.jpg',
    description:
      'Hard Maple is valued for its strength, hardness, and resistance, making it ideal for flooring and cabinetry.',
  },
]

const OurProductsSection = () => {
  return (
    <div className="h-full bg-mondo-100 py-10">
      <div className="max-w-[1300px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col items-center justify-center gap-5 mb-5 md:mb-10">
          <p className="uppercase text-4xl w-full  text-center font-bold text-mondo-600">
            Our Products
          </p>
          <div className="h-[3px] w-[200px] bg-mondo-700"></div>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-20">
          <div className="flex flex-col px-5 md:flex-row gap-10 items-center ">
            <Image
              src={'/images/home/about/artificial.webp'}
              height="600"
              width="1200"
              className="w-full md:w-[500px] h-[250px] rounded-xl"
            />
            <div className="flex flex-col gap-5">
              <p className="text-4xl font-bold text-mondo-500">
                Artificial Veneers
              </p>

              <p>
                Timbercraft, the leader in artificial veneers for furniture,
                sets the standard for innovation and quality. Dedicated to
                craftsmanship and sustainability, we consistently deliver
                exceptional products that exceed customer expectations. Our
                luxurious finishes and durable materials enhance the beauty and
                functionality of furniture, elevating any interior. With
                expertise and a passion for excellence, Timbercraft
                revolutionizes the furniture industry with an unparalleled range
                of artificial veneers.
              </p>
            </div>
          </div>
          <div className="h-[2px] w-[90%]   bg-mondo-200" />
          <div className="flex flex-col-reverse px-5 md:flex-row gap-10 items-center ">
            <div className="flex flex-col gap-5">
              <p className="text-4xl font-bold text-mondo-500">
                Natural Veneers
              </p>

              <p>
                At Timbercraft, we excel in natural veneers, offering a superior
                selection that captures natures timeless beauty. As an industry
                leader, we source the finest wood species from sustainable
                forests worldwide. Our commitment to quality ensures each veneer
                is meticulously processed to enhance its grain, texture, and
                color. Whether its the warmth of walnut or the elegance of oak,
                our veneers elevate furniture design, adding luxury to any
                interior. With Timbercrafts natural veneers, craftsmanship meets
                natures beauty, creating unique and enduring furniture pieces.
              </p>
            </div>
            <Image
              src={'/images/home/about/natural.jpg'}
              height="600"
              width="1200"
              className="w-full md:w-[500px] h-[250px] rounded-xl"
            />
          </div>
          <div className="h-[2px] w-[90%] my-10  bg-mondo-200" />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-x-10 px-5">
          {newArr.map((item) => (
            <div
              key={item.name}
              className="group relative h-96 w-[350px] sm:w-72  cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
            >
              <div className="h-96  w-[350px] sm:w-72 flex items-center justify-center">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={item.imgUrl}
                  alt={item.name}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  {item.name}
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.description}
                </p>
                <button className="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60">
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>

        <button>View All Products</button>
      </div>
    </div>
  )
}

export default OurProductsSection
