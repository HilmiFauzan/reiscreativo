import React, { useState } from 'react'
import { Link } from 'react-scroll';
import SlideUp from './scroll/SlideUp';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

function Navbar() {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const handleClose = () => setNav(!nav)

    return (
        <div className='w-screen h-16 z-20 fixed drop-shadow-lg bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800'>
            <div className='flex flex-row items-center w-full h-full justify-between text-white px-14'>
                <div className="flex items-center">
                    <h1 className="text-3xl font-bold mr-4 sm:text-4xl">ReisCreativo</h1>
                </div>
                <div className=''>
                    <ul className="hidden md:flex">
                        <li className='hover:bg-gray-700 hover:rounded-md'>
                            <Link to="home" className='cursor-pointer' smooth={true} duration={500}>
                                Home
                            </Link>
                        </li>
                        <li className='hover:bg-gray-700 hover:rounded-md'>
                            <Link to="about" className='cursor-pointer' smooth={true} offset={-200} duration={500}>
                                About
                            </Link>
                        </li>
                        <li className='hover:bg-gray-700 hover:rounded-md'>
                            <Link to="gallery" className='cursor-pointer' smooth={true} offset={-50} duration={500}>
                                Gallery
                            </Link>
                        </li>
                        <li className='hover:bg-gray-700 hover:rounded-md'>
                            <Link to="news" className='cursor-pointer' smooth={true} offset={-200} duration={500}>
                                News
                            </Link>
                        </li>
                        <li className='hover:bg-gray-700 hover:rounded-md'>
                            <Link to="clients" className='cursor-pointer' smooth={true} offset={-50} duration={500}>
                                Clients
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* <div className="hidden md:flex pr-4">
                    <button className="border-none bg-transparent text-black mr-4">Masuk</button>
                    <button className="px-8 py-3">Daftar</button>
                </div> */}
                <div className="md:hidden mr-4 cursor-pointer" onClick={handleClick}>
                    {!nav ?
                        <Bars3Icon className="h-6 w-6" />
                        :
                        <XMarkIcon className="w-6 h-6" />
                    }
                </div>
            </div>
            <ul className={!nav ? 'hidden' : 'absolute bg-gray-700 w-full px-8 navMin md:hidden text-white'}>
                <SlideUp>
                    <li className="border-b-2 border-gray-300 w-full">
                        <Link onClick={handleClose} to="home" smooth={true} duration={500}>
                            Halaman
                        </Link>
                    </li>
                    <li className="border-b-2 border-gray-300 w-full">
                        <Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>
                            Tentang
                        </Link>
                    </li>
                    <li className="border-b-2 border-gray-300 w-full">
                        <Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>
                            Dukungan
                        </Link>
                    </li>
                    <li className="border-b-2 border-gray-300 w-full">
                        <Link onClick={handleClose} to="platforms" smooth={true} offset={-200} duration={500}>
                            Platform
                        </Link>
                    </li>
                    <li className="w-full">
                        <Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>
                            Harga
                        </Link>
                    </li>
                </SlideUp>

                {/* <div className="flex flex-col my-4">
                    <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">Masuk</button>
                    <button className="px-8 py-3">Daftar</button>
                </div> */}
            </ul>
        </div>
    )
}

export default Navbar