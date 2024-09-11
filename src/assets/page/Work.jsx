/** @format */

import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

const Work = () => {
  const [imgm, setImg] = useState(false);

  const imgModal = (index) => {
    setImg(index);
    console.log(index);
  };

  const [item, setItem] = useState({ name: "all" });
  const [work, setWork] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setWork(image);
    } else {
      const newWork = image.filter((i) => {
        return i.alt === item.name;
      });
      setWork(newWork);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  const imageFilter = [
    { name: "all" },
    { name: "work1" },
    { name: "work2" },
    { name: "work3" },
  ];
  const image = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg",
      alt: "work1",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/17880230/pexels-photo-17880230/free-photo-of-calm.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      alt: "work2",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg",
      alt: "work3",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg",
      alt: "work1",
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg",
      alt: "work3",
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg",
      alt: "work2",
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg",
      alt: "work1",
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg",
      alt: "work1",
    },
  ];

  return (
    <div className='work pt-24 pb-10'>
      <div className='sm:flex  justify-between md:px-16 border-b-2 pb-3 border-badge items-center'>
        <h3 className='text-white md:text-4xl text-2xl mb-4 md:mb-0 font-bold '>
          My Work
        </h3>
        <ul className='flex gap-1 h-fit '>
          {imageFilter.map((i, index) => {
            return (
              <li
                key={index}
                onClick={(e) => handleClick(e, index)}
                className={`text-white text-base font-medium h-fit cursor-pointer  rounded-md py-1 px-3 ${
                  active === index ? "bg-badge" : ""
                }`}
              >
                {i.name}
              </li>
            );
          })}
        </ul>
      </div>

      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-6 gap-5 '>
        {work.map((img) => {
          return (
            <div key={img.id}>
              <img
                src={img.src}
                alt={img.alt}
                className='rounded-md h-full'
                onClick={() => imgModal(img.id)}
              />

              <div
                className={` center-50 fixed h-screen w-full bg-gray-400/20 flex items-center justify-center transition-all p-5  ${
                  imgm === img.id
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                } `}
              >
                <div className='relative'>
                  <RxCross2
                    onClick={() => imgModal(false)}
                    className='absolute top-2 right-2 w-5 h-5 text-center leading-5 text-base rounded-full text-white bg-background cursor-pointer'
                  />
                  <img
                    src={img.src}
                    alt={img.alt}
                    className='rounded-md  max-w-96'
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
