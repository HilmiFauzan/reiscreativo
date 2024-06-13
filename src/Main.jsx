import React from 'react'

function Main() {
    return (
        <div id='home' className='container-fluid static'>
            <div className='top-12 w-full bg-gray-800 sm:h-[650px] h-[600px] lg:h-screen relative'>
                <div className='max-w-[1240px] mx-auto grid grid-col text-white'>
                    <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                        <div className='p-2 rounded-lg'>
                            <p className="text-xl">Home Design and Construction</p>
                            <h1 className="py-3 text-2xl md:text-7xl font-bold">ReisCreativo</h1>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row-reverse mx-10 md:my-0 lg:my-10 relative'>
                    <div className='absolute brightness-50 hover:brightness-100'>
                        <img className='w-[800px]' src="https://i.pinimg.com/originals/9c/ce/ff/9ccefff2cb99512c852890abed9ff932.jpg" alt="" />
                    </div>

                    <div className='lg:text-5xl md:text-3xl sm:-mt-24 sm:text-3xl sm:px-4 lg:p-0 text-white absolute lg:inset-x-0 top-60'>
                        <div className='lg:text-left md:text-center sm:text-center flex flex-col p-2'>
                            <span className='uppercase'>
                                We design viable solutions for your constructions
                            </span>
                            <span>
                                <hr className='border-1 sm:w-full md:hidden' />
                            </span>
                        </div>

                        <div className='flex flex-row mt-6 items-center text-center lg:justify-evenly'>
                            <div className='text-base'>
                                <span>
                                    <hr className='border-1 md:w-72 lg:-mr-20' />
                                </span>
                            </div>
                            <div className='text-base flex'>
                                <span className='w-full lg:w-[500px]'>
                                    We are company specialized in architecture and engineering of real estate project of high value
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main