'use client'
import Image from 'next/image'
import { Navbar } from '../components/sections/navbar'
import { HeroParallaxDemo } from '../components/sections/heroparallax'
import { StickyScrollRevealDemo } from '../components/sections/ouredge'
import AboutSection from '@/components/pages/home/AboutSection'
import { DirectionAwareHover } from '@/components/ui/onImageHover'
import HeroSection from '@/components/pages/home/HeroSection'

export default function Home() {
  return (
    <div className=" text-mondo-700 bg-stone-50">
      {/* <Navbar className="top-2" /> */}
      <HeroParallaxDemo />
      {/* <HeroSection /> */}
      <AboutSection />
      <div className="h-full bg-mondo-100 py-10">
        <div className="max-w-[1300px] mx-auto flex flex-col gap-10">
          <p className="uppercase text-xl font-semibold text-center w-full text-mondo-600">
            Our Products
          </p>
          <div className="flex flex-col gap-20">
            <div className="flex flex-row gap-10 items-center ">
              <Image
                src={'/images/home/about/artificial.webp'}
                height="600"
                width="1200"
                className="w-[500px] h-[350px] rounded-xl"
              />
              <div className="flex flex-col gap-5">
                <p className="text-4xl font-bold text-mondo-500">
                  Artificial Veneers
                </p>

                <p>
                  As the leader in artificial veneers for furniture, Timbercraft
                  sets the standard for innovation and quality in the industry.
                  With a dedication to craftsmanship and a commitment to
                  sustainability, our company consistently delivers exceptional
                  products that exceed the expectations of our customers. From
                  luxurious finishes to durable materials, Timbercraft's
                  artificial veneers enhance the beauty and functionality of
                  furniture pieces, elevating any interior space. With our
                  expertise and passion for excellence, we continue to lead the
                  way in revolutionizing the furniture industry with our
                  unparalleled range of artificial veneers.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-10 items-center ">
              <div className="flex flex-col gap-5">
                <p className="text-4xl font-bold text-mondo-500">
                  Natural Veneers
                </p>

                <p>
                  At Timbercraft, we pride ourselves on our expertise in natural
                  veneers, offering a superior selection that embodies the
                  timeless beauty of nature. As a leader in the industry, we
                  meticulously source the finest natural wood species from
                  sustainable forests around the world. Our commitment to
                  quality craftsmanship ensures that each veneer is meticulously
                  processed and finished to enhance its inherent
                  characteristics, resulting in stunning variations in grain,
                  texture, and color. Whether it's the rich warmth of walnut or
                  the elegant simplicity of oak, our natural veneers elevate
                  furniture design to new heights, providing a luxurious touch
                  to any interior space. With Timbercraft's natural veneers,
                  craftsmanship meets nature's beauty, creating furniture pieces
                  that are as unique as they are enduring.
                </p>
              </div>
              <Image
                src={'/images/home/about/natural.jpg'}
                height="600"
                width="1200"
                className="w-[500px] h-[350px] rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <StickyScrollRevealDemo/> */}
    </div>
  )
}
