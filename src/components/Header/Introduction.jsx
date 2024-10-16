import React from 'react'
import hero from "../../assets/svgs/hero.svg"

export default function Introduction() {
    return (
        <>
            <div className='main flex '>
                {/* left section of page */}
                <div className="left w-1/2 ">
                    <div className='mt-7 ml-9 font-bold text-2xl'> Welcome to Eqlize Now!</div>
                    <div className='mt-2 ml-9 font-medium text-5xl'>
                        Crowdfund your future
                    </div>

                    <div className='mt-3 ml-9 font-extralight text-3xl'>
                        Fund your new home, college, start-up or anything important
                    </div>

                    <div className='mt-4 ml-9'>
                        <button className='bg-white text-black font-bold rounded-2xl p-3 border-2 border-solid border-black hover:bg-slate-400'> Get Started </button>
                    </div>

                    <div className='mt-6 ml-9 text-2xl'>
                        Back a campaign to launch yours for free
                    </div>

                    <div className='mt-4 ml-9'>
                        <button className='text-xl font-bold text-white bg-black rounded-2xl p-3 hover:bg-slate-900'>
                            Got an Invite ?
                        </button>
                    </div>
                </div>

                {/* right section of page */}
                <div className="right w-1/2">
                    <div className="image p-5">
                        <img src={hero} alt="_image_added" />
                    </div>
                </div>
            </div>
        </>
    )
}
