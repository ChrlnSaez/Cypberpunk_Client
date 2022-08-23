import React from 'react'
import Classpic from '../img/classroom.jpg'
import User from './User'

const Dashboard = () => {
    return (
        <div className='lg:ml-60 md:ml-0 md:mt-0 ml-0 lg:mt-0 mt-16 w-full max-w-[1000px] md:-mr-96 h-screen'>
            <div className='space-y-4 p-4'>
                <p className='font-bold text-3xl text-SecondaryTeal600'>DASHBOARD</p>
                <User />
                <p className='font-bold text-2xl text-SecondaryTeal600'>Classroom</p>
                <hr />
                    <div className='grid sm:grid-cols-3 md:grid-cols-3 gap-2'>

                        {/* CLASSES WILL APPEND WHEN ADMIN ADD CLASS */}

                        <div style={{ backgroundImage: `url(${Classpic})` }} className="group container rounded-md justify-center items-center mx-auto classroom-content">
                            {/* Hover Effects */}
                            <div className="opacity-0 group-hover:opacity-100 pt-9 text-center">
                                <span className="text-3xl font-bold text-Blackish">
                                    Classroom 1
                                </span>
                                <div className="pt-8">
                                    <a href="/">
                                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-CoolGray200 text-PrimaryLightblue900 font-bold text-lg hover:bg-PrimaryLightblue900 hover:text-CoolGray100">
                                            Enter Room
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div style={{ backgroundImage: `url(${Classpic})` }} className="group container rounded-md justify-center items-center mx-auto classroom-content">
                            {/* Hover Effects */}
                            <div className="opacity-0 group-hover:opacity-100 pt-9 text-center">
                                <span className="text-3xl font-bold text-Blackish">
                                    Classroom 2
                                </span>
                                <div className="pt-8">
                                    <a href="/">
                                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-CoolGray200 text-PrimaryLightblue900 font-bold text-lg hover:bg-PrimaryLightblue900 hover:text-CoolGray100">
                                            Enter Room
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div style={{ backgroundImage: `url(${Classpic})` }} className="group container rounded-md justify-center items-center mx-auto classroom-content">
                            {/* Hover Effects */}
                            <div className="opacity-0 group-hover:opacity-100 pt-9 text-center">
                                <span className="text-3xl font-bold text-Blackish">
                                    Classroom 3
                                </span>
                                <div className="pt-8">
                                    <a href="/">
                                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-CoolGray200 text-PrimaryLightblue900 font-bold text-lg hover:bg-PrimaryLightblue900 hover:text-CoolGray100">
                                            Enter Room
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>







            </div>
            {/* <User /> */}
        </div>
    )
}

export default Dashboard;