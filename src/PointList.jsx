import React from 'react'

function PointList() {
    return (
        <div>
            <div id='clients' className='lg:px-[40px] px-4'>
                <div className='bg-gray-100 flex flex-col items-center py-24'>
                    <div>
                        <p className='text-3xl text-center font-bold'>Our Clients</p>
                    </div>
                    <div>
                        <span className='lg:px-36 px-5 my-3 text-center inline-block'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis optio temporibus deserunt vero architecto minus hic labore eius est, quibusdam ad recusandae.</span>
                    </div>
                    <div className='grid lg:grid-cols-4 grid-cols-2 gap-2 items-center px-4 mt-4'>
                        <div className=''>
                            <img style={{ mixBlendMode: "multiply" }} src="https://th.bing.com/th/id/OIP.O2Hm8lU6owCxi2jdimp-CAHaJ3?pid=ImgDet&w=750&h=267&rs=1" alt="" />
                        </div>
                        <div className=''>
                            <img style={{ mixBlendMode: "multiply" }} src="https://awsimages.detik.net.id/visual/2020/09/28/logo-perhutani_169.jpeg?w=715&q=90" alt="" />
                        </div>
                        <div className=''>
                            <img style={{ mixBlendMode: "multiply" }} src="https://th.bing.com/th/id/R.363b9d2b901272fca230444fcc01a135?rik=or%2b%2f1fBebPVJAw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-CzZOFJr9ZdE%2fUit7kdXGITI%2fAAAAAAAAAo0%2f1eQdll__l18%2fw1200-h630-p-nu%2fLogo%2bKementerian%2bPembangunan%2bDaerah%2bTertinggal.JPG&ehk=HadLfOAl8yNXM8QjzDvOXdmWl0%2bw3BX3h7BMRBaCTS8%3d&risl=&pid=ImgRaw&r=0" alt="" />
                        </div>
                        <div className=''>
                            <img src="https://www.sdd.co.id/wp-content/uploads/2020/04/kementrian-keuangan.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-slate-900 w-full lg:h-48 h-72 -z-10 lg:-mt-24 -mt-48 absolute'></div>
        </div>
    )
}

export default PointList