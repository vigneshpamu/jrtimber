'use client'
import Image from 'next/image'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Footer from '@/components/common/Footer'
import { Navbar } from '@/components/sections/navbar'
import { GiDeadWood, GiStitchedWound } from 'react-icons/gi'
import { MdOutlineContentCut } from 'react-icons/md'
import { LuSend } from 'react-icons/lu'
import {
  PiHairDryerFill,
  PiNumberCircleOneFill,
  PiNumberCircleTwoFill,
} from 'react-icons/pi'
import CommonNav from '@/components/common/CommonNav'
import { fadeIn, fadeInAnimationsVariants } from '@/utils/animate'
import { motion } from 'framer-motion'

const veneerSteps = [
  'Veneer production starts with selecting logs from North American and European forests.',
  'High-quality logs are chosen based on species, size, and grain.',
  'Common species include oak, maple, cherry, and walnut.',
  'Once selected, the logs are cut to the required length and debarked.',
  'After debarking, the logs are soaked in hot water or steamed to soften the wood.',
  'This softening process makes the wood easier to cut and produces a smoother veneer.',
]

const slicingMethods = [
  {
    img: '/images/services/plain.png',
    name: 'Plain Slicing',
    desc: 'Creates a cathedral or heartwood pattern',
  },
  {
    img: '/images/services/quarter.png',
    name: 'Quarter Slicing',
    desc: 'Produces a straight grain pattern',
  },
  {
    img: '/images/services/plain.png',
    name: 'Rift Slicing',
    desc: 'Offers a narrow, uniform grain',
  },
  {
    img: '/images/services/half_round.png',
    name: 'Half-Round Slicing',
    desc: 'Offers unique and attractive grain patterns',
  },
]

// Data 1

const drytrim = [
  {
    img: '/images/services/drying.jpg',
    name: 'Drying',
    points: [
      'Freshly cut veneer sheets contain a high moisture content and must be dried to prevent warping and splitting.',
      'Veneer sheets are typically dried in large ovens or continuous conveyor dryers.',
      'This controlled drying process reduces the moisture content to the desired level, ensuring the veneer remains flat and stable.',
    ],
  },
  {
    img: '/images/services/trimming.jpg',
    name: 'Trimming',
    points: [
      'After drying, the veneer sheets are trimmed to remove irregular edges and any defects.',
      'Trimming helps in achieving the final desired dimensions for various applications.',
      'This step ensures the veneer sheets meet quality standards and are ready for further processing or use.',
    ],
  },
]

const stichpress = [
  {
    img: '/images/services/stitching1.png',
    name: 'Stitching',
    points: [
      'Once the veneers are graded and sorted, they may need to be stitched together to form larger sheets.',
      'The edges of the veneer sheets are carefully aligned and stitched using a specialized machine that applies a strong adhesive thread along the seam.',
      'This process ensures a seamless and continuous appearance, which is particularly important for creating large panels or matching specific grain patterns.',
    ],
  },
  {
    img: '/images/services/pressing1.jpg',
    name: 'Pressing',
    points: [
      'After stitching, the veneer sheets are pressed onto a substrate.',
      'This involves applying glue to the substrate (such as plywood, MDF, or particleboard) and then pressing the veneer sheet onto it using a hot or cold press.',
      'The press applies consistent pressure and heat (in the case of hot pressing) to ensure a strong bond between the veneer and the substrate.',
    ],
  },
]

export const AllServices = () => {
  return (
    <div className="overflow-hidden">
      {/* <Navbar className="top-2" /> */}
      <CommonNav />
      <div className="w-full flex flex-col gap-2 md:gap-5 items-center justify-center bg-mondo-100 h-[80px] md:h-[200px]">
        <p className="text-xl  sm:text-2xl   md:text-5xl uppercase font-semibold text-mondo-800">
          Services
        </p>
        <div className="h-[3px] w-[100px]  md:w-[150px] bg-mondo-800"></div>
      </div>
      <div className="bg-mondo-50 py-10   ">
        <div className="max-w-[1300px] mx-auto px-3">
          <blockquote className="p-4 my-4 border-s-4 border-mondo-300 bg-mondo-100 ">
            <p className="text-sm sm:text-xl italic font-medium leading-relaxed text-mondo-900 dark:text-white">
              Creating wood veneer is a fascinating and intricate process that
              transforms raw logs into beautiful, thin sheets of wood used in a
              variety of decorative applications.Follow the journey of wood
              veneer production from start to finish, highlighting the key
              stages and techniques involved
            </p>
          </blockquote>
          <div className="mt-10 flex flex-col gap-2 sm:gap-10 px-2">
            <div className="flex flex-col gap-5">
              <motion.div
                variants={fadeIn('left', 0.3, 0.6)}
                initial="hidden"
                whileInView={'show'}
                className="flex flex-row gap-3 items-center"
              >
                <GiDeadWood className="text-2xl" />

                <p className="text-xl md:text-2xl font-semibold ">
                  Selection & Preparation of Logs
                </p>
              </motion.div>
              <div className="flex flex-col md:flex-row items-center gap-10  m l-5  w-full m">
                <ul className="flex flex-col gap-2 text-m ondo-500 list-inside space-y-3 dark:text-gray-400">
                  {veneerSteps.map((step, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm md:text-[15px] lg:text-[19px]"
                    >
                      <svg
                        className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#59463a"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      {step}
                    </li>
                  ))}
                </ul>
                <motion.div
                  variants={fadeIn('up', 0.3, 0.6)}
                  initial="hidden"
                  whileInView={'show'}
                  className="w-full md:w-[60%] lg:w-[32%] h-[270px] rounded-md"
                >
                  <Image
                    src={'/images/services/1.jpg'}
                    width={400}
                    height={300}
                    className="w-full rounded-md"
                    alt="veneer-selection"
                  />
                </motion.div>
              </div>
            </div>
            <hr className="m-3" />
            <div className="flex flex-col gap-5">
              <motion.div
                variants={fadeIn('left', 0.3, 0.6)}
                initial="hidden"
                whileInView={'show'}
                className="flex flex-row gap-3 items-center"
              >
                <MdOutlineContentCut className="text-2xl" />

                <p className="text-xl md:text-2xl font-semibold ">
                  Cutting Methods
                </p>
              </motion.div>
              <div>
                <p className="text-sm sm:text-[19px] text -mondo-500 leading-normal">
                  Veneer cutting methods, essential for quality and appearance,
                  include rotary cutting, which peels the log into a continuous
                  sheet, and slicing, which cuts it into thin layers. Each
                  method creates unique grain patterns and suits different
                  applications.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <div className="flex flex-row gap-2 items-center mx-3 text-mondo-700">
                    <PiNumberCircleOneFill className="text-2xl" />

                    <p className="text-xl font-semibold">Rotary Cutting</p>
                  </div>
                  <p className="text-sm sm:text-[19px] mx-3 mt-2 leading-normal">
                    Rotary cutting produces thin wood sheets (veneer) by soaking
                    a log, spinning it on a machine, and peeling off a
                    continuous sheet with a sharp blade. The veneer is then cut
                    and dried for use in furniture and other products,
                    maximizing efficiency and minimizing waste.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-10">
                  <motion.div
                    variants={fadeInAnimationsVariants}
                    initial="initial"
                    whileInView="animate"
                    custom={1}
                    className="w-full"
                  >
                    <Image
                      src={'/images/services/2.png'}
                      width={400}
                      height={400}
                      className="rounded-lg w-full md:h-[410px] lg:h-[510px]"
                      alt="rotary1"
                    />
                  </motion.div>
                  <motion.div
                    variants={fadeInAnimationsVariants}
                    initial="initial"
                    whileInView="animate"
                    custom={2}
                    className="w-full"
                  >
                    <Image
                      src={'/images/services/rotary1.jpg'}
                      width={400}
                      height={400}
                      className="rounded-lg w-full md:h-[410px] lg:h-[510px]"
                      alt="rotary2"
                    />
                  </motion.div>
                </div>
              </div>
              <hr className="m-3" />
              <div className="flex flex-col gap-5">
                <div>
                  <div className="flex flex-row gap-2 items-center mx-3 text-mondo-700">
                    <PiNumberCircleTwoFill className="text-2xl" />

                    <p className="text-xl font-semibold">Slicing</p>
                  </div>
                  <p className="text-sm sm:text-[19px] mt-5 mx-3 leading-normal">
                    Slicing produces thin wood layers (veneer) by cutting logs
                    into rectangular blocks (flitches) and slicing them into
                    sheets. The blade moves to create various patterns and
                    grains. Dried sheets cover furniture and panels, offering
                    attractive looks without solid wood, efficiently creating
                    unique surfaces.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {slicingMethods.map((item, index) => {
                  return (
                    <motion.div
                      variants={fadeInAnimationsVariants}
                      initial="initial"
                      whileInView="animate"
                      custom={index}
                      key={index}
                      alt={item.name}
                      className="p-4 flex flex-col gap-4 rounded-lg bg-white"
                    >
                      <p className="text-xl font-semibold text-mondo-500">
                        {item.name}
                      </p>
                      <Image
                        src={item.img}
                        width={400}
                        height={400}
                        alt={item.name}
                      />
                      <p className="text-lg text-center">{item.desc}</p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
            <hr className="m-3" />
            <div className="flex flex-col gap-5">
              <motion.div
                variants={fadeIn('left', 0.3, 0.6)}
                initial="hidden"
                whileInView={'show'}
                className="flex flex-row gap-3 items-center"
              >
                <PiHairDryerFill className="text-2xl" />

                <p className="text-xl md:text-2xl font-semibold ">
                  Drying and Trimming
                </p>
              </motion.div>
              <div>
                <p className="text-sm sm:text-[19px] text -mondo-500 leading-normal">
                  Veneer drying and trimming are crucial steps in veneer
                  production. Drying ensures stability and durability, while
                  trimming refines edges for precise application. Together,
                  these processes enhance the quality and usability of veneer in
                  various wood products.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {drytrim.map((item, index) => {
                  return (
                    <motion.div
                      variants={fadeInAnimationsVariants}
                      initial="initial"
                      whileInView="animate"
                      custom={index}
                      key={index}
                      className="p-4 md:p-8 flex flex-col gap-5 bg-mondo-100 rounded-lg"
                    >
                      <p className="text-xl font-semibold">{item.name}</p>
                      <Image
                        src={item.img}
                        width={400}
                        height={400}
                        alt={item.name}
                        className="h-[300px] md:h-[400px] w-full"
                      />
                      <ul className="list-disc pl-5 space-y-3">
                        {item.points.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )
                })}
              </div>
            </div>
            <hr className="m-3" />
            <div className="flex flex-col gap-5">
              <motion.div
                variants={fadeIn('left', 0.3, 0.6)}
                initial="hidden"
                whileInView={'show'}
                className="flex flex-row gap-3 items-center"
              >
                <GiStitchedWound className="text-2xl" />

                <p className="text-xl md:text-2xl font-semibold ">
                  Stitching and Pressing
                </p>
              </motion.div>
              <div>
                <p className="text-sm sm:text-[19px] text -mondo-500 leading-normal">
                  Veneer stitching and pressing are essential in veneer
                  production. Stitching joins smaller veneer pieces into larger
                  sheets, while pressing bonds veneer to surfaces, ensuring a
                  smooth, durable finish. These steps enhance the appearance and
                  integrity of the final wood products.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {stichpress.map((item, index) => {
                  return (
                    <motion.div
                      variants={fadeInAnimationsVariants}
                      initial="initial"
                      whileInView="animate"
                      custom={index}
                      key={index}
                      className="p-4 md:p-8 flex flex-col gap-5 bg-mondo-100 rounded-lg"
                    >
                      <p className="text-xl font-semibold">{item.name}</p>
                      <Image
                        src={item.img}
                        width={400}
                        height={400}
                        alt={item.name}
                        className="h-[300px] md:h-[400px] w-full"
                      />
                      <ul className="list-disc pl-5 space-y-3">
                        {item.points.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )
                })}
              </div>
            </div>
            <hr className="m-3" />
            <div className="flex flex-col gap-5">
              <motion.div
                variants={fadeIn('left', 0.3, 0.6)}
                initial="hidden"
                whileInView={'show'}
                className="flex flex-row gap-3 items-center"
              >
                <LuSend className="text-2xl" />

                <p className="text-xl md:text-2xl font-semibold ">
                  Final Finishing
                </p>
              </motion.div>
              <div>
                <p className="text-sm sm:text-[19px] text -mondo-500 leading-normal">
                  The veneer sheets are finished with treatments like staining
                  or varnishing to enhance appearance and protect the wood
                  grain. Rigorous quality control ensures the veneer meets
                  standards for thickness, moisture content, and appearance.
                  Sheets that fail are removed or reprocessed.
                </p>
              </div>
              <blockquote className="p-4 my-4 border-s-4 border-mondo-300 bg-mondo-100 ">
                <p className="text-sm sm:text-xl italic font-medium leading-relaxed text-mondo-900 dark:text-white">
                  Wood veneer production is a meticulous process that transforms
                  raw logs into elegant sheets of wood, adding beauty and
                  sophistication to countless products. From the careful
                  selection of logs to the final application, each step is
                  essential in creating a versatile and attractive material that
                  enhances the aesthetics of wood products worldwide.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
