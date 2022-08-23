import React, { useState } from 'react'
import User from './User'
import { MdFilePresent } from 'react-icons/md'

const Assignment = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='lg:ml-60 md:ml-0 md:mt-0 ml-0 lg:mt-0 mt-16 w-full max-w-[1000px] md:-mr-96 h-screen'>
      <div className='space-y-4 p-4'>
        <p className='font-bold text-3xl text-SecondaryTeal600'>ASSIGNMENT</p>
        <User />
        <div className='flex justify-between'>
          <div className='cursor-pointer mt-2'>
            <span className='p-2 border-2 rounded-md md:text-xs sm:text-xs text-xs mr-2 bg-CoolGray100 hover:bg-SecondaryTeal600 hover:text-CoolGray100'>SHOW BY DATE</span>
            <span className='p-2 border-2 rounded-md md:text-xs sm:text-xs text-xs bg-CoolGray100 hover:bg-SecondaryTeal600 hover:text-CoolGray100'>SHOW BY TYPE</span>
          </div>
        </div>
        <hr />

        <table className='w-full'>
          <tr className='bg-PrimaryHoverBlue400'>
            <th>Assignment Name</th>
            <th>Date Posted</th>
            <th>Action</th>
            <th>Date Submitted</th>
          </tr>
          <tbody>
            <tr>
              <th>Drawing</th>
              <th>2022-08-21</th>
              <button className='border-2 rounded-lg p-2 m-2 bg-CoolGray100 
               hover:bg-SecondaryTeal600 hover:text-CoolGray100' onClick={() => setShowModal(true)}>Submit</button>
              <th></th>
            </tr>
          </tbody>
        </table>
      </div>

      {showModal ? (
        <>
          <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="fixed z-10 inset-0 overflow-y-auto">
              <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">

                <div class="relative bg-CoolGray100 border-2 border-PrimaryLightblue900 rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                  <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                      <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        {/* ICON */}
                        <MdFilePresent size="30" />
                      </div>
                      <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <div class="mt-2">
                          <label class="text-lg block mb-2 font-medium" for="file_input">Upload File</label>
                          <input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer
                      dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2
                   text-base font-medium hover:bg-red-700 focus:outline-none bg-CoolGray100 hover:bg-SecondaryTeal600 hover:text-CoolGray100
                   focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setShowModal(false)}>Submit</button>
                    <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300
                  shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2
                  focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm bg-CoolGray100 hover:bg-PrimaryHoverBlue400 hover:text-CoolGray100"
                      onClick={() => setShowModal(false)}> Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null }





    </div>
  )
}

export default Assignment