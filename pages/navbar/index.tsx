"use client"; // Marks this as a Client Component

import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Using Next.js Link
import {useRouter} from 'next/navigation'

function Navbar() {
  const router = useRouter(); // Initialize useRouter for navigation
    const [isOpen, setIsOpen] = useState(false);
    const [ispageOpen, setIspageOpen] = useState(false);
   
  // Toggle Navbar for mobile view
  const toggleNavbar = () => setIsOpen(!isOpen);


  const [visible, setVisible] = useState(false);

  // Handle scroll event to show the button
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  };

  // Set up the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
      
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '50px',
          backgroundColor: '#FB2E86', // Pink color
          color: 'white',
          border: 'none',
          borderRadius: '50%', // Round button
          padding: '15px',
          cursor: 'pointer',
          zIndex: 250, 
          fontSize: '20px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
          display: visible ? 'block' : 'none', // Only show when scrolled
          opacity: visible ? 1 : 0, // Fade-in effect
          transition: 'opacity 0.5s ease-in', // Ease-in animation for visibility
        }}
      >
        ↑
      </button>
<div className="2xl:w-auto h-[44px] w-full bg-[#7E33E0] text-[#f1f1f1] flex justify-center items-center">


<div className="container mx-auto flex justify-between items-center text-sm ">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2">
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
<g id="Mail">
<path d="M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm-14.87,1h14.87a1.489,1.489,0,0,1,1.49,1.39c-2.47,1.32-4.95,2.63-7.43,3.95a6.172,6.172,0,0,1-1.06.53,2.083,2.083,0,0,1-1.67-.39c-1.42-.75-2.84-1.51-4.25-2.26-1.14-.6-2.3-1.21-3.44-1.82A1.491,1.491,0,0,1,4.565,5.065Zm16.37,12.37a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V7.6c2.36,1.24,4.71,2.5,7.07,3.75a5.622,5.622,0,0,0,1.35.6,2.872,2.872,0,0,0,2-.41c1.45-.76,2.89-1.53,4.34-2.29,1.04-.56,2.07-1.1,3.11-1.65Z">
</path>
</g>
</svg>
<p className="hidden sm:block">  hafsarahman805@gmail.com</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone-call">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
</path>
<path d="M14.05 2a9 9 0 0 1 8 7.94">
</path>
<path d="M14.05 6A5 5 0 0 1 18 10">
</path>
</svg>
<p>(1234) 567890</p>
</div>
</div>
<div className="flex items-center gap-3">
<label htmlFor="language-select" className="sr-only">Language</label>
<select id="language-select" className=" bg-[#7E33E0] hover:bg-purple-400 px-2 py-1 rounded">
<option>English</option>
<option>Spanish</option>
<option>Urdu</option>
</select>
<label htmlFor="currency-select" className="sr-only">currency</label>
<select id="currency-select" className=" bg-[#7E33E0] hover:bg-purple-400 px-2 py-1 rounded">
<option>USD</option>
<option>EUR</option>
<option>PKR</option>
</select>
<a className="hidden sm:flex items-center gap-2 hover:bg-pink-600 px-2 py-1 rounded"  onClick={()=>router.push("/login")}>
<p>Login</p>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2">
</path>
<circle cx="12" cy="7" r="4">
</circle>
</svg>
</a>
<a className="relative flex items-center gap-2 hover:bg-pink-600 px-2 py-1 rounded"  onClick={()=>router.push("/wishlist")}>
<p>Wishlist</p>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart">
<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z">
</path>
</svg>
</a>
<div className="flex gap-x-2 items-center relative">
<a  onClick={()=>router.push("/cart")}>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart">
<circle cx="8" cy="21" r="1">
</circle>
<circle cx="19" cy="21" r="1">
</circle>
<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12">
</path>
</svg>
<p className="absolute -top-2 -right-2 rounded-md text-white">
{/* <span className="rounded-full py-[3px] px-2 bg-pink-700">1</span> */}
</p>
</a>
</div>
{/* <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" className="block sm:hidden" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z">
</path>
</svg>
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="block sm:hidden" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z">
</path>
</svg> */}
</div>
</div>


</div>



      {/* Navbar 
      <d_iv className="2xl:w-auto h-[44px] w-full bg-[#7E33E0] text-[#f1f1f1] flex justify-center items-center">
        <div className="w-full md:w-[80%] 2xl:w-[1177px] flex flex-col justify-center lg:flex-row md:justify-between items-center overflow-hidden">
          {/* Left section 
          <div className="w-[30%] lg:w-[380px] flex items-center justify-center lg:justify-start">
            <div className="flex items-center justify-center gap-3 mr-10">
              <span className="w-4 h-4 text-[#ffffff]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z">
</path>
                  <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z">
</path>
                </svg>
              </span>
              <h1 className="sm:w-[171px] h-[16px] font-sans font-semibold text-sm sm:text-[16px] leading-4">
                hafsarahman805@gmail.com
              </h1>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="w-4 h-4 flex items-center justify-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="w-[13.33px] h-[13.33px] text-[#ffffff]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z">
</path>
                </svg>
              </span>
              <h1 className="w-[97px] h-[16px] font-sans font-semibold text-sm sm:text-[16px] leading-4">
                (12345)67890
              </h1>
            </div>
          </div>

          {/* Right section 
          <div className="w-[30%] lg:w-[400px] flex flex-row items-center justify-center lg:justify-end gap-2 sm:gap-4">
            <div className="flex flex-row items-center justify-center">
              <h1 className="h-[16px] font-sans font-semibold text-sm sm:text-[16px] leading-4">English</h1>
              <div className="flex justify-center items-center mx-1 w-[16px] h-[16px]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z">
</path>
                </svg>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <h1 className="h-[16px] font-sans font-semibold text-sm sm:text-[16px] leading-4">USD</h1>
              <div className="flex justify-center items-center mx-1 w-[16px] h-[16px]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z">
</path>
                </svg>
              </div>
            </div>
            <div>
  <div className="flex items-center justify-center gap-2 sm:gap-4">
    <button className="font-sans text-sm sm:text-[16px] font-semibold leading-4 text-[#fb2e86]"  onClick={()=>router.push("/Login")}   aria-label="Login">Login</button>
   
    <button
          className="flex justify-center  items-center w-[16px] h-[16px]"
          onClick={()=>router.push("/cart")}
          aria-label="cart"
        >
         <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="white">
<path d="M3.864 16.4552C4.40967 18.6379 4.68251 19.7292 5.49629 20.3646C6.31008 21 7.435 21 9.68486 21H14.3155C16.5654 21 17.6903 21 18.5041 20.3646C19.3179 19.7292 19.5907 18.6379 20.1364 16.4552C20.9943 13.0234 21.4233 11.3075 20.5225 10.1538C19.6217 9 17.853 9 14.3155 9H9.68486C6.14745 9 4.37875 9 3.47791 10.1538C2.94912 10.831 2.87855 11.702 3.08398 13" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M19.5 9.5L18.7896 6.89465C18.5157 5.89005 18.3787 5.38775 18.0978 5.00946C17.818 4.63273 17.4378 4.34234 17.0008 4.17152C16.5619 4 16.0413 4 15 4M4.5 9.5L5.2104 6.89465C5.48432 5.89005 5.62128 5.38775 5.90221 5.00946C6.18199 4.63273 6.56216 4.34234 6.99922 4.17152C7.43808 4 7.95872 4 9 4" stroke="#1C274C" strokeWidth="1.5"/>
<path d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4C15 4.55228 14.5523 5 14 5H10C9.44772 5 9 4.55228 9 4Z" stroke="#1C274C" strokeWidth="1.5"/>
</svg>
        </button>
   
  </div>
  </div>

          </div>
        </div>
      </div>*/}

      <div className="2xl:w-[1920px] w-full h-[60px] bg-[#ffffff] text-[#f1f1f1] flex justify-center items-center">
      <div className="w-full md:w-[80%] lg:w-[1177px] flex items-center justify-between h-[40px] bg-[#ffffff]">
        <div>
          <h2 className="h-[34px] font-sans font-bold leading-[34px] text-[34px] text-[#0d0e43]">
            Hekto
          </h2>
        </div>

        <button
          className="text-black block md:hidden absolute right-4 text-3xl z-50"
          onClick={toggleNavbar}
          aria-label="Toggle Navigation"
        >
          ☰
        </button>

        <div
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:static w-[50%] md:w-auto bg-[#eee] md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out`}
        >
          <ul className="flex flex-col md:flex-row items-center justify-center text-[#0d0e43] font-sans font-normal text-[16px] leading-5">
            <li className="p-2 hover:underline hover:text-pink-600 underline-offset-2">
              <Link href="/">
                Home
              </Link>
            </li>
            <li className="relative p-2">
      <button
        className="flex items-center p-2 hover:underline hover:text-pink-600 underline-offset-2 cursor-pointer"
        onMouseEnter={() => setIspageOpen(true)}
      onClick={() => setIspageOpen(!ispageOpen)}
      >
        Pages
        <span className="">
          {ispageOpen ? '^' : '˅'}
        </span>
      </button>
      {ispageOpen && (
        <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
          <li className="p-2 hover:bg-gray-100">
            <Link href="/Login">Login</Link>
          </li>
          <li className="p-2 hover:bg-gray-100">
            <Link href="/about">About</Link>
          </li>
          <li className="p-2 hover:bg-gray-100">
            <Link href="/BlogPage">Blog Page</Link>
          </li>
          <li className="p-2 hover:bg-gray-100">
            <Link href="/faq">FAQ</Link>
          </li>
          <li className="p-2 hover:bg-gray-100">
            <Link href="/ShopList">Shopping List</Link>
          </li>
          <li className="p-2 hover:bg-gray-100">
            <Link href="/shop">Shopping Grid</Link>
          </li>
          <li className="p-2 hover:bg-gray-100">
            <Link href="/productdetail">Product Details</Link>
          </li>
          <li className="p-2 hover:bg-gray-100">
            <Link href="/cart">Cart</Link>
          </li>
          <li className="p-2 hover:bg-gray-100">
            <Link href="/confirmation">Confirmation Message</Link>
          </li>
        </ul>
      )}
    </li>
            <li className="p-2 hover:underline hover:text-pink-600 underline-offset-2">
              <Link href="/product">
                Products
              </Link>
            </li>
            <li className="p-2 hover:underline hover:text-pink-600 underline-offset-2">
              <Link href="/blog">
                Blog
              </Link>
            </li>
            <li className="p-2 hover:underline hover:text-pink-600 underline-offset-2">
              <Link href="/shop">
                Shop
              </Link>
            </li>
            <li className="p-2 hover:underline hover:text-pink-600 underline-offset-2">
              <Link href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex w-[317px] h-10">
          <input className="w-full border-2 text-gray-600 border-gray " type="search" placeholder="Search..." />
          <div className="w-[51px] h-10 bg-[#fb2e86] flex items-center justify-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="w-6 h-6 text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z" />
            </svg>
          </div>
        </div>
        
      </div>
    </div>

    </div>
  );
}

export default Navbar;
