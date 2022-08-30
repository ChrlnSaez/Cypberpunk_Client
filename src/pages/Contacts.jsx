/** @format */

import React from 'react';

const Contacts = () => {
  return (
    <div
      id='contact'
      className='bg-gradient-to-b from-blue-900 to-blue-400  py-16 xl:rounded-bl px-8 rounded-tl rounded-tr xl:rounded-tr-none'>
      <div className='xl:w-5/6 xl:px-0 px-8 ml-[1%] md:ml-[10%]'>
        <h1 className='xl:text-4xl text-3xl pb-4 text-center font-bold text-gray-100'>
          Get in touch
        </h1>
        <p className='text-xl pb-8 font-bold lg:pr-4'>
          Got a question about us? Are you interested in partnering with us?
          Have some suggestions or just want to say Hi? Just contact us. We are
          here to asset you.
        </p>

        <div className='flex flex-col md:flex-row md:space-x-8 text-center justify-center items-center'>
          <div className='flex pb-4 text-center'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-phone-call'
                width={20}
                height={20}
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='#ffffff'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' />
                <path d='M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1' />
                <path d='M15 7a2 2 0 0 1 2 2' />
                <path d='M15 3a6 6 0 0 1 6 6' />
              </svg>
            </div>
            <p className='pl-4'>(+63) 183-647-7238</p>
          </div>
          <div className='flex pb-4 text-center'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-mail'
                width={20}
                height={20}
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='#FFFFFF'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' />
                <rect x={3} y={5} width={18} height={14} rx={2} />
                <polyline points='3 7 12 13 21 7' />
              </svg>
            </div>
            <p className='pl-4'>cyberpunk.sample@hotmail.com</p>
          </div>
          <div className='flex text-center'>
            <p className='text-lg pt-2'>
              545, Street 11, Block F <br />
              Gozaimasu, Ohayo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
