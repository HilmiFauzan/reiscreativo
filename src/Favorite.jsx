import React from 'react'

function Favorite() {
    return (
        <div id='news' className='lg:px-16 my-36 px-8'>
            <div className='w-full my-8 sm:my-[100px] md:my-44 lg:my-34'>
                <div className=''>
                    <h2 className='uppercase lg:text-5xl md:text-4xl text-3xl font-bold'>Latest <span className='text-cyan-800'>News</span></h2>
                </div>
                <div className='grid lg:grid-flow-col gap-8 mt-5'>
                    <div className='w-full flex flex-col items-center justify-between'>
                        <div className=''>
                            <img className='hover:rounded-md' src="https://th.bing.com/th/id/OIP.b1n93Axh-dD1Wh-1RnA_4gHaEK?pid=ImgDet&w=1280&h=720&rs=1" alt="" />
                        </div>
                        <div className='p-2'>
                            <span className='font-bold text-xl'>Home Building Market</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <div className='flex flex-row items-center'>
                            <img className='w-[60%] rounded-sm' src="https://i.pinimg.com/originals/75/2b/97/752b97460744cb1da35d1a6b058f0b5c.jpg" alt="" />
                            <div className='mx-4'>
                                <span className='text-md'>Plaza Malibu Marzo 1</span>
                                <br />
                                <button className='my-2 drop-shadow-lg shadow-slate-900 hover:outline-black hover:text-black border-1 outline outline-2 rounded-sm outline-slate-600 text-slate-600 outline-offset-2'>
                                    Read More
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-row items-center'>
                            <img className='w-[60%] rounded-sm' src="https://th.bing.com/th/id/OIP.8QAzzAnYkc19nicA73P2GgHaD4?pid=ImgDet&w=178&h=93&c=7&dpr=1,4" alt="" />
                            <div className='mx-4'>
                                <span className='text-md'>Plaza Malibu Marzo 2</span>
                                <br />
                                <button className='my-2 drop-shadow-lg shadow-slate-900 hover:outline-black hover:text-black border-1 outline outline-2 rounded-sm outline-slate-500 text-slate-600 outline-offset-2'>
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Favorite
