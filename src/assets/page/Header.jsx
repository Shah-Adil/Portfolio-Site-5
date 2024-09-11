/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { IoMdContact } from "react-icons/io";

const Header = () => {
  const nav = [
    { name: <FaHome />, to: "/" },
    { name: <FaRegUser />, to: "/about" },
    { name: <GoProject />, to: "/work" },
    { name: <IoMdContact />, to: "/contact" },
  ];

  return (
    <header className='  px-4 py-5 absolute top-0 left-0 w-full'>
      <div
        className='flex align-middle m-auto justify-between'
        style={{ maxWidth: "1200px" }}
      >
        <h1 className='text-white mt-3'>Logo</h1>
        <ul className='nav flex fixed center-x-50 bottom-5 md:bottom-10  gap-4 z-50 bg-inputColor px-6 py-4   rounded-full'>
          {nav.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  to={item.to}
                  className='text-white bg-primary w-12 h-12 hex flex justify-center items-center text-xl '
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
