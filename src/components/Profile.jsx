import React, { useState } from 'react'
import StudentAvatar from '../img/student.png'

const Profile = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='lg:ml-60 md:ml-0 md:mt-0 ml-0 lg:mt-0 px-8 mt-16 w-full max-w-[1100px] md:-mr-96 h-full bg-CoolGray200'>
            <div className='text-2xl space-y-4 font-bold flex-1 my-8 text-SecondaryTeal600'>
                <p className='font-bold text-3xl text-SecondaryTeal600'>PROFILE</p>
                <hr />
            </div>
            <div className='flex justify-between px-16'>
                <div>
                    <img src={StudentAvatar} width="150" alt="user" />
                    <label htmlFor="Email">Name:</label>
                    <p className='text-2xl mb-8'>Pedro Penduko</p>
                    <label htmlFor="Email">Email:</label>
                    <p className='pb-8'>studentemail@gmail.com</p>
                    <label htmlFor="Email">Gender: <span>Male</span></label>
                </div>
                <div>

                    {/*-------- MODAL --------*/}
                    <button
                        className="p-2 border rounded-lg bg-CoolGray100 hover:text-PrimaryLightblue900 hover:bg-SuccessGreen400"
                        type="button"
                        onClick={() => setShowModal(true)}
                    >
                        Edit Profile
                    </button>
                    {showModal ? (
                        <>
                            <div className="flex justify-center items-center overflow-x-hidden border rounded-lg overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-CoolGray100 outline-none focus:outline-none">
                                        <div className="flex items-start  justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                            <h3 className="text-3xl font-bold text-SecondaryTeal600">Edit</h3>
                                            <button
                                                className="bg-transparent border-0 text-black float-right"
                                                onClick={() => setShowModal(false)}
                                            >
                                                <span className="text-black h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                                                    x
                                                </span>
                                            </button>
                                        </div>
                                        <div className="relative p-6 flex-auto bg-SecondaryTeal600">
                                            <form className="bg-gray-200 rounded px-8 pt-6 pb-8 w-full">
                                                <label className="block text-black text-sm font-bold mb-1">
                                                    Name
                                                </label>
                                                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                                                <label className="block text-black text-sm font-bold mb-1">
                                                    Email
                                                </label>
                                                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                                                <label className="block text-black text-sm font-bold mb-1">
                                                    Gender
                                                </label>
                                                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                                            </form>
                                        </div>
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                            <button
                                                className="bg-CoolGray100 font-bold uppercase shadow hover:shadow-lg px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                Close
                                            </button>
                                            <button
                                                className="bg-CoolGray100 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                Save Profile
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : null}


                </div>
            </div>
        </div>
    )
}

export default Profile