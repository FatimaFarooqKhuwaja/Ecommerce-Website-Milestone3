// components/HeroSection.js
import React from 'react'
import Image from "next/image"
import heroImage from "../../../public/heroImage.png"

const HeroSection = () => {
  return (
    <div className="bg-gray-900 text-white py-11 px-6 sm:px-12 lg:px-24 rounded-lg ">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-y-20">
        
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-[600] leading-tight mb-4">
            Best Deal Online on smart watches
          </h1>
          <p className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-extrabold">
            SMART WEARABLE
          </p>
          <p className="text-lg sm:text-xl mb-6">
            UP to 80% OFF
          </p>
        </div>
        
        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image
            src={heroImage}
            alt="E-Commerce Hero Image"
            className="w-[200px] sm:w-[300px] lg:w-[400px] h-auto object-cover rounded-lg"
          />
        </div>

      </div>
    </div>
  )
}

export default HeroSection;
