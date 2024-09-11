/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  let img =
    "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D";
  let name = "Adil";

  return (
    <>
      <div className='md:grid  md:gap-x-9 h-screen md:items-center md:grid-cols-2  pt-32 md:pt-0 space-y-8 md:space-y-0 '>
        <div className='text-white '>
          <h4 className='text-3xl flex align-middle gap-2 font-bold mb-3'>
            Hi
            <span className='badge'>I'm</span>
          </h4>
          <h2 className='  text-5xl font-bold mb-3'>{name}</h2>
          <h3 className='font-medium text-white text-3xl '>
            Frontend Web <span className='text-badge'>Dev</span>
          </h3>
          <p className='mb-7 mt-2 text-base'>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
          <Link to='/about' className='btn'>
            Read More
          </Link>
        </div>

        <img
          src={img}
          alt='img'
          className=' h-auto w-full rounded-lg md:order-1'
        />
      </div>
    </>
  );
};

export default Home;
