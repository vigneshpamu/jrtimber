"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { HeroParallax } from "../ui/hero-parallax";

export function HeroParallaxDemo() {
    const [products,setProducts]=useState([])

    useEffect(() => {
    for (let i = 1; i < 4; i++) {
        for (let j = 1; j < 5; j++) {
      setProducts((prev) => [
        ...prev,
        {
          title: "Moonbeam"+i+j,
          link: "",
          thumbnail:
            "https://timbercraftltd.com/wp-content/uploads/2023/11/download-"+i+"-"+j+".jpg",
        },
      ]);
    }
    console.log(products)
    }
}, []);
  return (products&&
    <HeroParallax products={products} />);
}
