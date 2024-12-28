import React from 'react'
import Link from "next/link"
import {data} from "../data/cardData"
import Image from "next/image"

const firstSection = () => {
  return (
   <>
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:ml-[40px] md:mr-[40px] ">
    {data.map((item)=>{
        return(
            
            <div
            key={item.id} 
            className="w-full lg:w-[260px] h-[330px] bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:scale-105 flex flex-col mt-8">
                 <Image
                   src={item.image}
                   alt={item.title}
                   className="w-full h-[210px] object-cover rounded-t-lg object-top"
                   height={300}
                   width={300}
                 />
                 <div className="p-4 flex flex-col justify-between flex-grow">
                   <div>
                     <h3 className="text-lg font-bold text-gray-900 truncate">{item.title}</h3>
                     <p className="text-[20px] font-bold text-gray-900">${item.price}</p>
                    <Link href={`/Cards/${item.slug}`}> <p className="text-[16px] text-blue-700 font-bold">{item.details}...</p></Link>
                   </div>
           
                 
                 </div>
               </div>
        )
    })}
   </div>
   
   </>
  )
}

export default firstSection
