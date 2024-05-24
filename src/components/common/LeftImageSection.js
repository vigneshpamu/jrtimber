import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

const LeftImageSection = ({ title, description, url, link }) => {
  return (
    <div className="flex flex-col px-5 md:flex-row gap-10 items-start">
      <div className="overflow-hidden w-full md:min-w-[400px] h-[250px] rounded-xl">
        <Image
          src={url}
          height="600"
          width="1200"
          alt={title}
          className="w-full h-full transform transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-5">
          <p className="text-4xl font-bold text-mondo-500">{title}</p>

          <p>{description}</p>
        </div>
        <Link href={link} className="flex flex-row gap-2 items-center ">
          <p>Show Products</p>
          <p className="text-3xl mt-[1px]">
            <MdOutlineArrowRightAlt />
          </p>
        </Link>
      </div>
    </div>
  )
}

export default LeftImageSection
