import React from 'react'

const Attendance = () => {
    return (
        <div className='lg:ml-64 md:ml-0 md:mt-0 ml-0 lg:mt-22 mt-16 w-full max-w-[1000px] md:-mr-96 h-screen'>
            <div className='flex justify-between mt-8 font-bold flex-1 p-4'>
                <p className='text-3xl text-SecondaryTeal600'>Attendance History</p>
                {/* PRINT BUTTON */}
                <button className='px-8 my-2 py-0 border rounded-lg bg-CoolGray100
                 hover:text-PrimaryLightblue900 hover:bg-SuccessGreen400'>
                    Print
                </button>
                
            </div>
            <div className="h-screen overflow-auto rounded-lg bg-CoolGray200">
                <table class="w-full bg-CoolGray100">
                    <thead className='bg-PrimaryLightblue900'>
                        <tr className='text-CoolGray100'>
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


        </div>
    )
}

export default Attendance