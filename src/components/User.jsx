import React from 'react'
import Avatar from '../img/student.png'

const User = () => {
  return (
    <div className=' bg-CoolGray200 z-20 fixed top-0 w-60 lg:right-0 -right-60 peer-focus:right-0 peer:transition ease-out delay-150 duration-200'>
        <div className='flex flex-col text-center justify-start items-center'> 
            <img src={Avatar} width="50" alt="student avatar" />
            <h3 className='font-bold'>Welcome</h3>
            <p>Student Name</p>
        </div>
    </div>
  )
}

export default User