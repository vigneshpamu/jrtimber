'use client'
import Image from 'next/image'
import { Navbar } from '../components/sections/navbar'
import { HeroParallaxDemo } from '../components/sections/heroparallax'
import { StickyScrollRevealDemo } from '../components/sections/ouredge'
import AboutSection from '@/components/pages/home/AboutSection'
import { DirectionAwareHover } from '@/components/ui/onImageHover'
import HeroSection from '@/components/pages/home/HeroSection'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import StarSVG from '@/components/common/StarSVG'

const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
        type: 'spring',
        stiffness: 70,
      },
    }
  },
  // transition: { type: 'spring', stiffness: 100 },
}

const testimonials = [
  {
    name: 'Paul Starr',
    image:
      'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    quote:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!',
  },
  {
    name: 'Paul Starr',
    image:
      'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    quote:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad mollitia rerum quo unde neque atque molestias quas pariatur! Sint, maxime?',
  },
  {
    name: 'Paul Starr',
    image:
      'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit esse delectus, maiores fugit, reiciendis culpa inventore sint accusantium libero dolore eos quasi a ex aliquam molestiae. Tenetur hic delectus maxime.',
  },
  {
    name: 'Paul Starr',
    image:
      'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, fuga?',
  },
  {
    name: 'Paul Starr',
    image:
      'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate officia natus blanditiis rerum incidunt ex autem repudiandae doloribus eveniet quia? Culpa commodi quae atque perspiciatis? Provident, magni beatae saepe porro aspernatur facere neque sunt possimus assumenda perspiciatis aperiam quisquam animi libero voluptatem fuga. Repudiandae, facere? Nemo reprehenderit quas ratione quis.',
  },
  {
    name: 'Paul Starr',
    image:
      'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, rerum. Nobis laborum praesentium necessitatibus vero.',
  },
  {
    name: 'Paul Starr',
    image:
      'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    quote:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quaerat quasi ipsa repellendus quam! Beatae pariatur quia distinctio fugit repellendus repudiandae nostrum consectetur quibusdam quo.',
  },
  {
    name: 'Paul Starr',
    image:
      'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    quote:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, modi!',
  },
  {
    name: 'Paul Starr',
    image:
      'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam numquam, unde molestiae commodi temporibus dicta.',
  },
]

export default function Home() {
  const [active, setActive] = useState(false)
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
  const servicesArr = [
    {
      id: 1,
      name: 'Cutting',
      imgUrl: '/images/home/services/cutting.jpg',
      description:
        'Aspen wood is lightweight, soft, and known for its fine texture and uniform grain patterns.',
    },
    {
      id: 2,
      name: 'Stiching',
      imgUrl: '/images/home/services/stiching.jpg',
      description:
        'Basswood is a soft, light wood, favored for carving and detailed woodwork due to its smooth grain.',
    },
    {
      id: 3,
      name: 'Pressing',
      imgUrl: '/images/home/services/pressing.jpg',
      description:
        'Cherry wood is prized for its rich color, smooth grain, durability and others in fine furniture making.',
    },
  ]
  const ref = useRef(null)
  const ref2 = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: ref2,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const scale1 = useTransform(scrollYProgress1, [0, 1], [1, 1.2])

  return (
    <div className=" text-mondo-700 bg-stone-50 overflow-hidden">
      {/* <Navbar className="top-2" /> */}
      {/* <HeroParallaxDemo /> */}
      <HeroSection />
      <AboutSection />
      <motion.div
        ref={ref}
        className="relative bg-mondo-100 w-full h-[200px] md:h-[400px] overflow-hidden"
      >
        <motion.div
          style={{ scale }}
          className="relative w-full h-[200px] md:h-[400px]"
        >
          <Image
            src={'/images/home/timber/timber.jpg'}
            height="600"
            width="1200"
            className="w-full h-full object-cover  scale"
          />
          <div className="absolute inset-0 bg-mondo-400 opacity-50 rounded-xl"></div>
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-xl text-center sm:text-2xl md:text-4xl font-bold uppercase">
            Land & Timber are what we know best
          </p>
        </div>
      </motion.div>
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
                  luxurious finishes and durable materials enhance the beauty
                  and functionality of furniture, elevating any interior. With
                  expertise and a passion for excellence, Timbercraft
                  revolutionizes the furniture industry with an unparalleled
                  range of artificial veneers.
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
                  At Timbercraft, we excel in natural veneers, offering a
                  superior selection that captures natures timeless beauty. As
                  an industry leader, we source the finest wood species from
                  sustainable forests worldwide. Our commitment to quality
                  ensures each veneer is meticulously processed to enhance its
                  grain, texture, and color. Whether its the warmth of walnut or
                  the elegance of oak, our veneers elevate furniture design,
                  adding luxury to any interior. With Timbercrafts natural
                  veneers, craftsmanship meets natures beauty, creating unique
                  and enduring furniture pieces.
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
      <div
        className="main bg-mondo-200"
        style={{
          backgroundImage: 'url(/images/home/video/video.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div
          className={active ? 'btn active' : 'btn'}
          onClick={(val) => setActive(true)}
        >
          <div className="play"></div>
          <p>Play Video</p>
        </div>
        <div className={active ? 'clip active' : 'clip'}>
          <video src="/videos/wood.mp4" controls />
          <button className="close" onClick={(val) => setActive(false)}>
            Close
          </button>
        </div>
      </div>
      <div className="bg-mondo-100">
        <div className="max-w-[1300px] mx-auto flex flex-col gap-10 py-10">
          <div className="flex flex-col items-center justify-center gap-5 mb-16">
            <p className="uppercase text-4xl w-full  text-center font-bold text-mondo-600">
              What we do
            </p>
            <div className="h-[3px] w-[200px] bg-mondo-700"></div>
          </div>
          <div className="grid grid-cols-1 px-5  md:grid-cols-2 lg:grid-cols-3 gap-10">
            {servicesArr.map((item, index) => {
              return (
                <motion.div
                  variants={fadeInAnimationsVariants}
                  initial="initial"
                  whileInView="animate"
                  custom={index}
                  key={item.id}
                  className="flex flex-col gap-5"
                >
                  <Image
                    src={item.imgUrl}
                    width={500}
                    height={500}
                    objectFit=""
                    className="h-full w-full object-cover"
                  />
                  <div className="w-full flex flex-col gap-5 items-center justify-center">
                    <div className="flex flex-col gap-2 items-center justify-center">
                      <p className="text-mondo-600 uppercase text-xl font-bold">
                        {item.name}
                      </p>
                      <div className="h-[3px] w-16 bg-mondo-600"></div>
                    </div>
                    <p className="text-mondo-600 px-2 text-center">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
          <button>View All Services</button>
        </div>
      </div>
      <motion.div
        ref={ref2}
        className="relative bg-mondo-100 w-full h-[200px] md:h-[400px] overflow-hidden"
      >
        <motion.div
          style={{ scale: scale1 }}
          className="relative w-full h-[200px] md:h-[400px]"
        >
          <Image
            src={'/images/home/timber/timber.jpg'}
            height="600"
            width="1200"
            className="w-full h-full object-cover  scale"
          />
          <div className="absolute inset-0 bg-mondo-400 opacity-50 rounded-xl"></div>
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-xl text-center sm:text-2xl md:text-4xl font-bold uppercase">
            Land & Timber are what we know best
          </p>
        </div>
      </motion.div>
      <section className="bg-mondo-200">
        <div className="mx-auto max-w-screen-xl px-4 py-10">
          {/* <h2 className="text-center text-2xl font-bold tracking-tight text-gray-90 0 sm:text-2xl text-mondo-700 mb-10">
              Read trusted reviews from our customers
            </h2> */}
          <div className="flex flex-col items-center justify-center gap-5 mb-16">
            <p className="uppercase text-4xl w-full  text-center font-bold text-mondo-600">
              Testimonial
            </p>
            <div className="h-[3px] w-[200px] bg-mondo-700"></div>
          </div>
          <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                variants={fadeInAnimationsVariants}
                initial="initial"
                whileInView="animate"
                custom={index}
                key={index}
                className="mb-8 sm:break-inside-avoid"
              >
                <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-4">
                    <img
                      alt=""
                      src={testimonial.image}
                      className="size-14 rounded-full object-cover"
                    />
                    <div>
                      <StarSVG />
                      <p className="mt-0.5 text-lg font-medium text-gray-900">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">{testimonial.quote}</p>
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* <StickyScrollRevealDemo/> */}
    </div>
  )
}
