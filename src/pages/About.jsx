/** @format */

import React from 'react';
import image from '../assets/images/about.png';

const About = () => {
  return (
    <div
      id='about'
      className='w-full h-screen flex bg-gradient-to-r from-gray-100 to-blue-400 my-auto justify-center '>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-col'>
        <div className='pb-3'>
          <p className='text-4xl font-bold text-blue-900 inline border-b-4 border-red-500'>
            ABOUT US
          </p>
        </div>
        <p className='text-lg text-blue-900 mt-8'>
          We were inspired by one of the website in the canvas of Kodego. this
          website helps the students know their activities in their bootcamp
          throughout the day.
        </p>
        <br />
        <p className='text-lg text-blue-900'>
          Our goals and objectives of this project is to reduce the time that is
          consumed when attendance is taken manually, unlike the manual process
          that requires students to fill in attendance sheets manually. To
          easily helps management to analyze student's attendance and to send
          email notification of attendance to the student
        </p>
      </div>
      <div className='mt-44 hidden md:block'>
        <img src={image} alt='about' />
      </div>
    </div>
  );
};

export default About;
