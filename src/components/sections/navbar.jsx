'use client'
import React, { useState } from 'react'
import { HoveredLink, Menu, MenuItem, ProductItem } from '../ui/navbar-menu'
import { cn } from '@/utils/cn'
import Image from 'next/image'

// export function NavbarDemo() {
//   return (
//     <div className="relative w-full flex items-center  justify-center">
//       <Navbar className="top-2" />
//       <p className="text-black dark:text-white">
//         The Navbar will show on top of the page
//       </p>
//     </div>
//   )
// }

export function Navbar({ className }) {
  const [active, setActive] = useState(null)
  return (
    <div
      className={cn(
        'fixed top-10 inset-x-0 max-w-2xl mx-auto max-h-[5px] z-50 ',
        className
      )}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/" setActive={setActive} active={active} item="Home">
          <Image
            src={'/images/common/nlogo.png'}
            width={50}
            height={50}
            className="w-[30px]"
          />
        </HoveredLink>
        <HoveredLink href="/" setActive={setActive} active={active} item="Home">
          Home
        </HoveredLink>
        <HoveredLink
          href="/about"
          setActive={setActive}
          active={active}
          item="AboutUS"
        >
          About
        </HoveredLink>
        <HoveredLink
          href="/services"
          setActive={setActive}
          active={active}
          item="Services"
        >
          Services
        </HoveredLink>
        <HoveredLink
          href="/products"
          setActive={setActive}
          active={active}
          item="products"
        >
          Products
        </HoveredLink>
        <HoveredLink
          href="/contact"
          setActive={setActive}
          active={active}
          item="Contact"
        >
          Contact
        </HoveredLink>
      </Menu>
    </div>
  )
}
