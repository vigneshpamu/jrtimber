"use client";
import Image from "next/image";
import {Navbar} from "../components/sections/navbar";
import {HeroParallaxDemo} from "../components/sections/heroparallax";
import {StickyScrollRevealDemo} from "../components/sections/ouredge";

export default function Home() {
  return (
   <div className=" text-mondo-700 bg-stone-50">
    <Navbar className="top-2"/>
    <HeroParallaxDemo/>
    {/* <StickyScrollRevealDemo/> */}
    halo
   </div>
  );
}
