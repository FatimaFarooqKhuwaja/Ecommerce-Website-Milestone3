import React from 'react';

const Footer = () => {
  return (
    <div className='bg-black w-full h-[400px] mt-[60px] mb-0'>
      <div className='bg-black flex flex-col md:flex-row md:justify-around pt-[100px] px-4 md:px-0'>
        
        <div className='mb-8 md:mb-0'>
          <h1 className='text-white font-[700] text-[22px] mt-[8px]'>QAFIX</h1>
          <h2 className='text-white font-[500] text-[18px] mt-[10px]'>Subscribe</h2>
          <p className='text-white font-[200] text-[15px] mt-[14px]'>Get 10% off your first order</p>
          <input type="text" className='border-[2px] border-white bg-black h-[40px] mt-[20px] w-full md:w-[250px]' placeholder='Enter your Email' />
        </div>

        <div className='mb-8 md:mb-0'>
          <h1 className='text-white font-[500] text-[20px]'>Account</h1>
          <ul className='text-white font-[200] text-[16px] leading-[40px]'>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        <div className='mb-8 md:mb-0'>
          <h1 className='text-white font-[500] text-[20px]'>Quick Link</h1>
          <ul className='text-white font-[200] text-[16px] leading-[40px]'>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>Cart</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className=''>
          <h1 className='text-white font-[600] text-[20px] mt-[8px]'>Contact</h1>
          <p className='text-white font-[200] text-[15px] mt-[10px]'>Email</p>
          <p className='text-white font-[200] text-[15px] mt-[13px]'>LinkedIn</p>
          <p className='text-white font-[200] text-[15px] mt-[13px]'>Facebook</p>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
