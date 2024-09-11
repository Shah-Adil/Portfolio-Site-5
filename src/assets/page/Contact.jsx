/** @format */

import React from "react";

const Contact = () => {
  return (
    <div className='pt-24 pb-10 '>
      <h3 className='text-3xl md:text-5xl text-white text-center font-bold mb-8 '>
        Contact US{" "}
      </h3>
      <form className='w-500 mx-auto'>
        <div>
          <input
            type='text'
            placeholder='Name'
            className='form-input bg-inputColor'
          />
        </div>
        <div>
          <input
            type='email'
            placeholder='Email'
            className='form-input bg-inputColor'
          />
        </div>
        <div>
          <textarea
            placeholder='Message'
            className='form-input bg-inputColor'
          ></textarea>
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
