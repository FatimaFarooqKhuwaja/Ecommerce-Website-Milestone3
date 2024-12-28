"use client";
import React from "react";
import Image from "next/image"; // Importing Next.js Image component
import { data } from "@/app/data/cardData";  // Assuming you are fetching this data

const Dynamic = ({ params }: { params: { slug: string } }) => {
  // Define the product type for TypeScript
  interface Idata {
    id: number;
    title: string;
    price: string;
    image: string;  // Image URL
    slug: string;
  }

  // Find the product by slug
  const blog = data.find((b) => b.slug === params.slug);

  if (!blog) {
    // Return a 404-like message if product is not found
    return (
      <div className="max-w-4xl mx-auto mt-[40px] px-4 sm:px-6 lg:px-8 py-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white text-center font-bold underline mb-4">
          Product Not Found
        </h1>
        <p className="text-gray-700">Sorry, the product you are looking for could not be found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto md:mt-[40px] place-items-center mb-[50px]">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold underline mt-[20px]">
        {blog.title}
      </h1>

      {/* Product Content Section */}

      <div className="flex flex-col-reverse md:flex-row">

        {/* Left Section: Image */}
        <div className="">
          <Image
            src={blog.image}  // Using the image URL from the data
            alt={blog.title}
            width={800} 
            height={800} 
            className="rounded-lg object-cover"
          />
        </div>

        {/* Right Section: Product Details */}
        <div className="md:pt-20 pt-10 ml-[20px]">
          <p className="mt-2 text-[25px] text-blue-900 font-semibold">Name: {blog.title}</p>
          <p className="mt-3 text-lg text-gray-700 font-semibold">Price: ${blog.price}</p>
          <p className="mt-3 text-[20px] text-gray-700 font-[600]">{blog.content}</p>
        </div>
     
      </div>
    </div>
  );
};

export default Dynamic;
