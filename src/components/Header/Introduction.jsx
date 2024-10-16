import React from 'react'
import hero from "../../assets/svgs/hero.svg"

export default function Introduction() {
    return (
        <>
            <div className='main flex '>
                {/* left section of page */}
                <div className="left  md:w-1/2 ">
                    <div className='mt-5 ml-7 font-bold md:mt-7 md:ml-9 md:font-bold md:text-2xl'> Welcome to Eqlize Now!</div>
                    <div className='mt-2 ml-7  md:ml-9 font-medium md:text-5xl'>
                        Crowdfund your future
                    </div>

                    <div className='mt-3  ml-7 md:ml-9 font-extralight md:text-3xl'>
                        Fund your new home, college, start-up or anything important
                    </div>

                    <div className='mt-4 ml-9'>
                        <button className='bg-white text-black rounded-lg p-1 font-bold md:rounded-2xl md:p-3 border-2 border-solid border-black hover:bg-slate-400'> Get Started </button>
                    </div>

                    <div className='mt-6 ml-7 md:ml-9 md:text-2xl'>
                        Back a campaign to launch yours for free
                    </div>

                    <div className='mt-4 ml-9'>
                        <button className='md:text-xl text-base rounded-xl p-1 font-bold text-white bg-black md:rounded-2xl md:p-3 hover:bg-slate-900'>
                            Got an Invite ?
                        </button>
                    </div>
                </div>

                {/* right section of page */}
                <div className="right hidden md:block md:w-1/2">
                    <div className="image md:p-5">
                        <img src={hero} alt="_image_added" />
                    </div>
                </div>
            </div>
        </>
    )
}
