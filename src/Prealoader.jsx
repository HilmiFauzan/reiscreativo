import React from 'react'

function Prealoader() {
    return (
        <div className='fixed h-screen z-30 flex flex-row justify-center items-center bg-gray-900 w-full hideMe'>
            <div className="flex flex-col items-center text-white">
                <div className="spinner-border animate-spin inline-block border-t-cyan-800 w-8 h-8 border-4 rounded-full" role="status">
                </div>
                <span className="text-2xl mt-2 font-bold">ReisCreativo</span>
            </div>
        </div>
    )
}

export default Prealoader