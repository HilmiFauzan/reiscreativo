import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Gallery() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div id='gallery' className='w-full my-8 sm:my-[100px] bg-slate-300 md:my-44 lg:my-34 flex items-center'>
            <div className='mb-16 mt-12 mx-12'>
                <div className='grid grid-flow-row lg:grid-cols-2 md:grid-cols-1'>
                    <div className='m-7'>
                        <span className='lg:text-5xl text-3xl md:text-4xl font-bold lg:justify-start flex justify-center'>
                            Gallery
                        </span>
                        <p className='m-1 lg:ml-7 mt-5 text-xl flex sm:ml-0 justify-center lg:justify-start'>Our Last Project</p>
                        <p className='mt-2 lg:indent-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem necessitatibus molestias pariatur temporibus deleniti consequuntur repellat tenetur illum eum obcaecati porro beatae, sequi debitis veniam harum reprehenderit omnis itaque error.</p>
                        <div className='flex flex-row items-center'>
                            <button className="p-2 text-white drop-shadow-lg shadow-slate-900 hover:outline-black hover:text-black border-1 outline outline-2  outline-offset-2 mt-8 uppercase lg:pr-9">View All Project</button>
                            <div className="lg:block hidden mt-8 -ml-6">
                                <hr className='border-1 w-64 border-black' />
                            </div>
                        </div>
                        <div className='max-md:hidden'>
                            <Carousel responsive={responsive} focusOnSelect={true} infinite={true} className="owl-carousel owl-theme mt-8 lg:w-[900px]">
                                {/* <div className='flex flex-row mt-8 lg:w-[900px] hover:z-20 static lg:absolute'> */}
                                <div className='item p-1'>
                                    <img className='' src="https://th.bing.com/th/id/OIP.TpC_8TTqfhzYaTEazT0YyAHaD4?pid=ImgDet&w=178&h=100&c=7&dpr=1,4" alt="" />
                                </div>
                                <div className='item p-1'>
                                    <img className='' src="https://th.bing.com/th/id/OIP.hC5kiYFKy8peTJBMCOs2YwHaD4?pid=ImgDet&w=178&h=100&c=7&dpr=1,4" alt="" />
                                </div>
                                <div className='item p-1'>
                                    <img className='' src="https://th.bing.com/th/id/OIP.LpnXO0WbcVCeb-zV0j-BKwHaD4?pid=ImgDet&w=178&h=100&c=7&dpr=1,4" alt="" />
                                </div>
                                {/* </div> */}
                            </Carousel>
                        </div>
                        <div className='max-md:block hidden'>
                            <div className='flex flex-col items-center'>
                                <div className='p-2'>
                                    <img className='' src="https://th.bing.com/th/id/OIP.TpC_8TTqfhzYaTEazT0YyAHaD4?pid=ImgDet&w=178&h=100&c=7&dpr=1,4" alt="" />
                                </div>
                                <div className='p-2'>
                                    <img className='' src="https://th.bing.com/th/id/OIP.hC5kiYFKy8peTJBMCOs2YwHaD4?pid=ImgDet&w=178&h=100&c=7&dpr=1,4" alt="" />
                                </div>
                                <div className='p-2'>
                                    <img className='' src="https://th.bing.com/th/id/OIP.LpnXO0WbcVCeb-zV0j-BKwHaD4?pid=ImgDet&w=178&h=100&c=7&dpr=1,4" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex max-lg:justify-center max-lg:items-center my-0 z-10'>
                        <div className='border-1'>
                            {/* <img className='w-full' src="https://th.bing.com/th/id/OIP.mI8YcbpI1CRD50BvOCnlZwHaD8?pid=ImgDet&w=1920&h=1021&rs=1" alt="" /> */}
                            <iframe className='max-w-none lg:w-[560px] lg:h-[315px] md:w-[490px] md:h-[260px] sm:w-[560px] sm:h-[300px] h-full' src="https://www.youtube.com/embed/w8sL27Tl88I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery