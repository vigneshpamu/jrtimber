import React from 'react'
import { motion } from 'framer-motion'
import StarSVG from '@/components/common/svgIcons/StarSVG'
import CardStack from '@/components/sections/cardstack'

const testimonial1 = [
  {
    name: 'Ahmed Al Mansoori',
    image:
      'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    quote:
      "The artificial veneer from this company is top-notch. The quality and consistency are unparalleled. As a middleman, I rely on their products to keep my customers satisfied and they've never let me down.",
  },
  {
    name: 'Rohit Sharma',
    image:
      'https://images.unsplash.com/photo-1549045337-967927d923c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZGlhbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D',
    quote:
      'Their natural veneers are simply beautiful. The grains and textures are perfect for the high-end projects we handle. The fact that they offer cutting and stitching services is a huge plus.',
  },
  {
    name: 'James Wong',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote:
      'Their dyed veneers are vibrant and consistent. The color range is impressive, and the quality is always reliable. As a reseller, I appreciate their prompt service and large stock availability.',
  },
]

const testimonial2 = [
  {
    name: 'Fatima Al Nuaimi',
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    quote:
      'The laminates we get from this company are perfect for our furniture manufacturing. They offer a great variety, and the pressing services they provide ensure a perfect finish every time.',
  },
  {
    name: 'Michael Carter',
    image:
      'https://images.unsplash.com/photo-1579192181049-2aa87e49df2a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote:
      "I've been working with them for years and their hardwood veneers are the best in the market. The durability and quality are exactly what my clients are looking for.",
  },
  {
    name: 'Ayesha Khan',
    image:
      'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    quote:
      'Their services go beyond just selling veneer. The cutting and stitching services save us a lot of time and effort. We always receive perfectly prepared pieces ready for installation.',
  },
]

const testimonial3 = [
  {
    name: 'David Johnson',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    quote:
      'Their stock of veneers is unmatched in the UAE. Whether I need a specific type of veneer or large quantities, they always have what I need. Their customer service is also excellent.',
  },
  {
    name: 'Priya Patel',
    image:
      'https://images.unsplash.com/photo-1581564018992-95e729d4940e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZGlhbiUyMHdvbWVufGVufDB8fDB8fHww',
    quote:
      'We use their veneers in a variety of projects, from high-end residential to commercial. The variety and quality they offer are ideal for meeting our diverse needs.',
  },
  {
    name: 'Richard Evans',
    image:
      'https://images.unsplash.com/photo-1516224498413-84ecf3a1e7fd?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote:
      'The artificial veneers are great for budget projects without compromising on quality. Their service is always quick and reliable, making them a trusted partner.',
  },
]

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

const Testimonial = () => {
  return (
    <section className="bg-mondo-200">
      <div className="mx-auto max-w-screen-xl px-4 py-16">
        <div className="flex flex-col items-center justify-center gap-5 mb-16">
          <p className="uppercase text-4xl w-full  text-center font-bold text-mondo-600">
            Testimonial
          </p>
          <div className="h-[3px] w-[200px] bg-mondo-700"></div>
        </div>
        <div className="mt-8 flex items-center justify-center flex-wrap flex-row gap-10">
          <motion.div
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            custom={0}
          >
            <CardStack items={testimonial1} />
          </motion.div>
          <motion.div
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            custom={1}
          >
            <CardStack items={testimonial2} />
          </motion.div>
          <motion.div
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            custom={2}
          >
            <CardStack items={testimonial3} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
