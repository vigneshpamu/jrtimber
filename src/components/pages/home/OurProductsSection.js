import LeftImageSection from '@/components/common/LeftImageSection'
import RightImageSection from '@/components/common/RightImageSection'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  CardBody,
  CardContainer,
  CardItem,
} from '@/components/sections/3d-card'
import { useRouter } from 'next/navigation'
const newArr = [
  {
    id: 'Aspen-12',
    name: 'Aspen',
    imgUrl: '/images/home/product/all-products/1.jpg',
    description:
      'Aspen wood is lightweight, soft, and known for its fine texture and uniform grain patterns.',
  },
  {
    id: 'Basswood-10',
    name: 'Basswood',
    imgUrl: '/images/home/product/all-products/2.jpg',
    description:
      'Basswood is a soft, light wood, favored for carving and detailed woodwork due to its smooth grain.',
  },
  {
    id: 'Cherry-10',
    name: 'Cherry',
    imgUrl: '/images/home/product/all-products/3.jpg',
    description:
      'Cherry wood is prized for its rich color, smooth grain, durability and others in fine furniture making.',
  },
  {
    id: 'Maple-25',
    name: 'Hard Maple',
    imgUrl: '/images/home/product/all-products/4.jpg',
    description:
      'Hard Maple is valued for its strength, hardness, and resistance, making it ideal for flooring and cabinetry.',
  },
]

const allCategory = [
  {
    id: 1,
    name: 'Artificial Veneer',
    link: '/artificial-veneer',
    img: '/images/home/about/artificial.webp',
    desc: 'High-quality, engineered veneer with a consistent and versatile appearance.',
  },
  {
    id: 2,
    name: 'Natural Veneer',
    link: '/natural-veneer',
    img: '/images/home/about/natural.jpg',
    desc: 'Genuine wood veneer showcasing the beauty of natural grains.',
  },
  {
    id: 3,
    name: 'Dyed Veneer',
    link: '/dyed-veneer',
    img: '/images/home/about/dyed.webp',
    desc: 'Vibrantly colored veneer, dyed to achieve unique design effects.',
  },
  {
    id: 4,
    name: 'Laminates',
    link: '/laminates',
    img: '/images/home/about/laminate.jpg',
    desc: 'Durable laminate offering a wide range of stylish finishes.',
  },
  {
    id: 5,
    name: 'Premium Hardwood',
    link: '/hardwood',
    img: '/images/home/about/hardwood.jpeg',
    desc: 'Premium hardwood known for its strength and rich texture.',
  },
]

const OurProductsSection = () => {
  // const artificialVeneer = `Timbercraft leads in artificial veneers for furniture, setting standards for innovation and quality. Dedicated to craftsmanship and sustainability, we deliver exceptional products that exceed customer expectations. Our luxurious finishes and durable materials enhance furniture's beauty and functionality, elevating any interior. Timbercraft revolutionizes the furniture industry with unparalleled artificial veneers.`
  // const naturalVeneer = `At Timbercraft, we excel in natural veneers, capturing nature's timeless beauty. We source the finest wood species from sustainable forests worldwide. Our meticulous processing enhances each veneer’s grain, texture, and color. From walnut's warmth to oak's elegance, our veneers elevate furniture design, adding luxury to any interior. Timbercraft’s craftsmanship creates unique, enduring pieces.`
  // const dyedVeneer = `Dyed veneers from TimberCraft combine natural beauty with vibrant colors. Sourced from sustainable forests and meticulously dyed, these veneers enhance grain and texture. Available in a wide range of shades, they offer versatile design options, adding a unique and stylish touch to any furniture piece while maintaining exceptional durability and elegance.`
  // const laminateVeneer = `Laminated veneers from TimberCraft offer the perfect blend of durability and aesthetics. Crafted from high-quality materials and sustainable wood sources, these veneers provide a resilient surface that withstands daily wear while showcasing the natural beauty of wood. With a variety of finishes and textures, our laminated veneers enhance any furniture design, adding elegance and lasting performance.`
  // const hardVeneer = `Premium hardwood from TimberCraft embodies superior quality and timeless elegance. Sourced from sustainable forests, our hardwood is meticulously selected for its exceptional grain, strength, and durability. Ideal for crafting luxurious and enduring furniture pieces, our premium hardwoods, including oak, walnut, and cherry, offer unmatched beauty and resilience, enhancing any interior with a touch of natural sophistication.`

  const router = useRouter()

  const handleRoute = (route) => {
    console.log(route, 'Route')
    let withoutSlash = route.substring(1)
    let resultString = withoutSlash.replace('-', ' ')
    localStorage.setItem('routeName', resultString)
    router.push(`/products`)
  }

  return (
    <div className="h-full bg-mondo-100 py-10">
      <div className="max-w-[1300px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col items-center justify-center gap-5 mb-5 md:mb-10">
          <p className="uppercase text-4xl w-full  text-center font-bold text-mondo-600">
            Our Products
          </p>
          <div className="h-[3px] w-[200px] bg-mondo-700"></div>
        </div>
        {/* <div className="flex flex-col items-center justify-center gap-10 lg:gap-10">
          <LeftImageSection
            url={'/images/home/about/artificial.webp'}
            title={'Artificial Veneers'}
            description={artificialVeneer}
            link={'/products/artifical-veneers'}
          />
          <div className="h-[2px] w-[100%]   bg-mondo-200" />
          <RightImageSection
            url={'/images/home/about/natural.jpg'}
            title={'Natural Veneers'}
            description={naturalVeneer}
            link={'/products/naturla-veneers'}
          />
          <div className="h-[2px] w-[100%]   bg-mondo-200" />
          <LeftImageSection
            url={'/images/home/about/dyed.webp'}
            title={'Dyed Veneers'}
            description={dyedVeneer}
            link={'/products/dyed-veneers'}
          />
          <div className="h-[2px] w-[100%]   bg-mondo-200" />
          <RightImageSection
            url={'/images/home/about/laminate.jpg'}
            title={'Laminates Veneers'}
            description={laminateVeneer}
            link={'/products/laminate-veneers'}
          />
          <div className="h-[2px] w-[100%]   bg-mondo-200" />
          <LeftImageSection
            url={'/images/home/about/hardwood.jpeg'}
            title={'Premium Hard Wood Veneers'}
            description={hardVeneer}
            link={'/products/hardwood-veneers'}
          />
          <div className="h-[2px] w-[100%]   bg-mondo-200" />
        </div> */}
        <div className="max-w-[1300px] mx-auto flex flex-wrap justify-center gap-5 px-5">
          {allCategory.map((item, index) => {
            return (
              <CardContainer className="inter-var" key={index}>
                <CardBody className="bg-mondo-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-mondo-500 dark:text-white"
                  >
                    {item.name}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {item.desc}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={item.img}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <div onClick={() => handleRoute(item.link)}>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                      >
                        See Products
                      </CardItem>
                    </div>
                  </div>
                </CardBody>
              </CardContainer>
            )
          })}
        </div>
        {/* <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-x-10 px-5">
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
                <Link href={`/single/${item.id}`}>
                  <button className="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60">
                    See More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div> */}

        <Link href={'/products'} className="text-center  max-w-[150px] mx-auto">
          View All Products
        </Link>
      </div>
    </div>
  )
}

export default OurProductsSection
