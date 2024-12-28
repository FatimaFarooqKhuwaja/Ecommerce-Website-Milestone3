"use client"
import React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import cart from "../../../public/shoping.png"


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State to control mobile menu toggle

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);  // Toggle the menu open/close
  };

  return (
    <>

 <div className=" bg-white shadow-lg shadow-black w-full">
  <div className="max-w-screen-xl px-4 py-3 flex justify-between items-center">


<div>
    <h1 className="text-[20px] font-extrabold">QAFIX</h1>
</div>
          {/* Center: Navigation Links */}
          <div className=" space-x-6 md:flex ">
          <Link href="/" className="text-black font-[600] md:text-[14px] text-[10px] hidden md:block">Home</Link>
            <Link href="/featured" className="text-black md:text-[14px] font-[600] text-[10px] hidden md:block">Featured</Link>
            <Link href="/contact" className="text-black md:text-[14px] font-[600] text-[10px] hidden md:block">Contact</Link>
            <Link href="/signin" className="text-black md:text-[14px] font-[600] text-[10px] hidden md:block">Signin</Link>
      
          </div>

          {/* Right: Icons and Search Bar */}
          <div className="flex md:items-center md:space-x-3">

            {/* Search Bar */}


            <div className="relative">
              <input
                type="text"
                placeholder=" Search"
                className="md:text-black md:px-1 md:block md:py-[4px] md:rounded-full md:border md:border-gray-300 hidden"

              /> </div>

        
            <Link href="/cart"> <div className="flex-shrink-0">

              <Image
                className="h-7"
                src={cart}
                alt="logo"
              />
            </div></Link> 

                {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={handleMenuToggle} className="text-blue-950 focus:outline-none">
            {/* Hamburger icon */}
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
 
  </div>
        </div>
      </div>
        {/* Mobile Navigation Menu */}
  {isMenuOpen && (
        <div className="md:hidden flex py-3 bg-gray-900 justify-center">
          <ul className="text-white flex flex-col gap-4 font-[500] text-[18px]">
            <Link href="/"><li onClick={() => setIsMenuOpen(false)}>Home</li></Link>
            <Link href="/featured"><li onClick={() => setIsMenuOpen(false)}>Featured</li></Link>
            <Link href="/contact"><li onClick={() => setIsMenuOpen(false)}>Contact</li></Link>
            <Link href="/signin"><li onClick={() => setIsMenuOpen(false)}>Signin</li></Link>
          </ul>
        </div>
      )}



    </>
  )
}
export default Navbar;



 