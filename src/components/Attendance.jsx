import React from 'react'
import User from './User'

const Attendance = () => {
    return (
        <div className='lg:ml-60 md:ml-0 md:mt-0 ml-0 lg:mt-0 px-32 w-full max-w-[950px] md:-mr-96 h-screen bg-CoolGray200'>
            <div className='flex justify-between mt-8 font-bold flex-1 p-4 text-SecondaryTeal600'>
                <p className='text-3xl'>Attendance History</p>
                <User />
                {/* PRINT BUTTON */}
                <button className='p-2 border rounded-lg bg-CoolGray100
                 hover:text-PrimaryLightblue900 hover:bg-SuccessGreen400'>
                    Print
                </button>
            </div>
            <table id='table-container' class="table-fixed md:table=fixed justify-center items-center">
                <thead className='bg-SecondaryHoverTeal400'>
                    <tr className='text-PrimaryLightblue900'>
                        <th>Date</th>
                        <th>Time In</th>
                        <th>Time Out</th>
                    </tr>
                </thead>
                <tbody>
                    {/* APPEND THE ATTENDANCE DATA BELOW */}
                    <tr>
                        <td>2022-08-20</td>
                        <td>8:00 AM</td>
                        <td>11:01 AM</td>
                    </tr>
                    <tr>
                        <td>2022-08-21</td>
                        <td>8:03 AM</td>
                        <td>11:00 AM</td>
                    </tr>
                    <tr>
                        <td>2022-08-22</td>
                        <td>7:56 AM</td>
                        <td>11:02 AM</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Attendance