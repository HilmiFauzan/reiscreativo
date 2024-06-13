import React from 'react'
import { HiBuildingLibrary, HiBuildingOffice2, HiBuildingStorefront,  HiHomeModern } from "react-icons/hi2";

function About() {
    return (
        <div id='about' name="platforms" className="w-full my-24 sm:my-[100px] md:my-44 lg:mt-56 lg:mb-36">
            <div className="max-w-[1240px] mx-auto px-2">
                <h2 className="lg:text-5xl md:text-3xl text-xl font-bold text-center uppercase">Our 8 Years of Experience</h2>
                <div className="py-8 flex justify-center">
                    <hr className='border-1 w-72 border-black' />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">

                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <HiHomeModern className="text-2xl" />
                        </div>
                        <div className="mt-1">
                            <h3 className="font-bold text-lg">Commercial Developments</h3>
                        </div>
                        <div className="px-6">
                            <p className="text-lg pt-2 pb-4">Dolor excepteur mollit exercitation commodo esse ad veniam minim do excepteur nostrud excepteur pariatur occaecat fugiat in sunt culpa sunt deserunt.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <HiBuildingLibrary className="text-2xl" />
                        </div>
                        <div className="mt-1">
                            <h3 className="font-bold text-lg">Residential Developments</h3>
                        </div>
                        <div className="px-6">
                            <p className="text-lg pt-2 pb-4">Dolor excepteur mollit exercitation commodo esse ad veniam minim do excepteur nostrud excepteur pariatur occaecat fugiat in sunt culpa sunt deserunt.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <HiBuildingStorefront className="text-2xl" />
                        </div>
                        <div className="mt-1">
                            <h3 className="font-bold text-lg">Industrial Developments</h3>
                        </div>
                        <div className="px-6">
                            <p className="text-lg pt-2 pb-4">Dolor excepteur mollit exercitation commodo esse ad veniam minim do excepteur nostrud excepteur pariatur occaecat fugiat in sunt culpa sunt deserunt.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <HiBuildingOffice2 className="text-2xl" />
                        </div>
                        <div className="mt-1">
                            <h3 className="font-bold text-lg">Corporate Developments</h3>
                        </div>
                        <div className="px-6">
                            <p className="text-lg pt-2 pb-4">Dolor excepteur mollit exercitation commodo esse ad veniam minim do excepteur nostrud excepteur pariatur occaecat fugiat in sunt culpa sunt deserunt.</p>
                        </div>
                    </div>
                    {/* <div className="flex">
                        <div className="">
                            <CheckIcon className="w-7 mr-4 text-green-600" />
                        </div>
                        <div className="">
                            <h3 className="font-bold text-lg">Pemberitahuan</h3>
                            <p className="text-lg pt-2 pb-4">Dolor excepteur mollit exercitation commodo esse ad veniam minim do excepteur nostrud excepteur pariatur occaecat fugiat in sunt culpa sunt deserunt.</p>
                        </div>
                    </div> */}

                </div>

            </div>
        </div>
    )
}

export default About