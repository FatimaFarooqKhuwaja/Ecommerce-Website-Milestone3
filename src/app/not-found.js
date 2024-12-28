import Link from "next/link"

const Custom404 = () => {
  return (
   <>
   <div className="mt-[130px] mb-[130px] place-items-center space-y-[35px]">
<h1 className='text-[80px] font-[500]'>404 Not Found</h1>
<p className='text-[18px] font-[400]'>You found not found page!!!.</p>
<p className='text-[18px] font-[400]'>Your visited page not found. You may go home page.</p>
<button className=' bg-red-600 h-[50px] w-[180px] rounded-[4px] font-[400] text-white text-[17px]'><Link href="/">Back to home page</Link></button>

   </div>
   
   </>
  )
}

export default Custom404 ;
