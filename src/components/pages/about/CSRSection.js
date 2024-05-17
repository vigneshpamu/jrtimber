import Image from 'next/image'
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

const csrImg = [
  {
    imgUrl: '/images/about/csr/1.webp',
  },
  {
    imgUrl: '/images/about/csr/2.jpg',
  },
  {
    imgUrl: '/images/about/csr/3.jpg',
  },
]

const CSRSection = () => {
  return (
    <div className="w-full bg-mondo-50 py-10">
      <div className="max-w-[1300px] mx-auto px-5 lg:px-0">
        <div className="flex flex-col items-center justify-center gap-5 mb-10">
          <p className="uppercase text-2xl md:text-4xl w-full  text-center font-bold text-mondo-600">
            CORPORATE & SOCIAL RESPONSIBILITY
          </p>
          <div className="h-[3px] w-[120px] md:w-[200px] bg-mondo-700"></div>
        </div>
        <div className="flex flex-col items-center justify-center   gap-10 ">
          <p className="text-center text-mondo-600">
            Team Timbercraft upholds corporate and social responsibility by
            emphasizing sustainable sourcing and ethical practices. Embracing
            social responsibility, we focus on fair labor practices, community
            engagement, and environmental stewardship, fostering a more ethical
            and sustainable lumber industry.
          </p>

          <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            spaceBetween={0}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination
            className="w-full lg:max-w-[1000px]"
          >
            {csrImg.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Image
                    src={item.imgUrl}
                    width={500}
                    height={500}
                    alt="img"
                    className="h-[500px] w-full object-cover"
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default CSRSection
