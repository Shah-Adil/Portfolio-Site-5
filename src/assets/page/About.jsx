/** @format */
import React from "react";


const About = () => {
  const skils = [
    { id: 1, name: "Html", point: "85" },
    { id: 2, name: "Css", point: "65" },
    { id: 3, name: "Javascript", point: "45" },
    { id: 4, name: "BootStrap", point: "60" },
    { id: 5, name: "Git", point: "50" },
    { id: 6, name: "Tailwind", point: "50" },
    { id: 7, name: "React", point: "50" },
    { id: 8, name: "Express", point: "40" },
    { id: 9, name: "Sql", point: "40" },
  ];

  return (
    <div className='about  pt-24 pb-10'>
      <div className='grid md:grid-cols-2 gap-10 '>
        <div className='left '>
          <h3 className='text-4xl text-white font-bold mb-4'>About me</h3>
          <p className='text-base text-white font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex eac ommodo consequat.
          </p>

          <ul className='grid md:grid-cols-3 grid-cols-2 gap-3 mt-5'>
            {skils.map((item) => (
              <li
                className='list-disc list-inside text-badge text-base font-medium '
                key={item.id}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        <div className='right'>
          <h3 className='text-4xl text-white font-bold mb-8'>My Skill</h3>

          <ul>
            {skils.map((item) => (
              <li className='mb-5 z-10' key={item.id}>
                <div className='flex justify-between text-white font-semibold text-base px-1 mb-1'>
                  <p>{item.name}</p> <p>{item.point}%</p>
                </div>
                <div className='w-full h-4 bg-secondary relative rounded-md px-1'>
                  <div
                    className='absolute top-1  left-1 right-1  bg-badge h-2 rounded-md'
                    style={{ width: `${item.point}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
