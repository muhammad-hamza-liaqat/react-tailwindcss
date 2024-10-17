import React from 'react'
import mechanism from "../../assets/images/mechanism.png"
import price from "../../assets/images/price.png"
import tokenomics from "../../assets/images/tokenomics.png"
import powered1 from "../../assets/images/powered1.png"
import powered2 from "../../assets/images/powered2.png"
import powered3 from "../../assets/images/powered3.png"
import powered4 from "../../assets/images/powered4.png"
import c1 from "../../assets/images/c1.png"
import c2 from "../../assets/images/c2.png"
import c3 from "../../assets/images/c3.png"
import c4 from "../../assets/images/c4.png"

export default function Ecosystem() {
    return (
        <>
            <div className="parent" style={{ backgroundColor: '#15071E', color: "white" }}>


                <div className="c1">
                    <div className="head flex justify-center mt-10">
                        <p className='text-2xl font-bold'>Ecosystem</p>
                    </div>

                    <div className='image1 p-12 mt-10'>
                        <img src={mechanism} alt="" />
                    </div>
                </div>


                <div className="c2">
                    <div className="head flex justify-center mt-10">
                        <p className='text-2xl font-bold'>Price Mechanism</p>
                    </div>

                    <div className='image2  p-24 mt-10'>
                        <img src={price} alt="" />
                    </div>
                </div>

                <div className="c3">
                    <div className="head flex justify-center mt-10">
                        <p className='text-2xl font-bold'>Tokenomics</p>
                    </div>

                    <div className='image3  p-32 mt-10'>
                        <img src={tokenomics} alt="" />
                    </div>
                </div>

                {/* content */}

                <div className="c4">
                    <div className="head flex justify-center mt-1">
                        <p className='text-2xl font-bold '>Content & Benefits</p>
                    </div>

                    <div className='image3 flex p-2 mt-10 justify-center'>
                        <img src={c1} alt="" className='w-30 h-24 object-contain mr-5' />
                        <img src={c2} alt="" className='w-24 h-24 object-contain mr-5' />
                        <img src={c3} alt="" className='w-24 h-24  object-contain mr-5 bg-slate-800 rounded-3xl' />
                        <img src={c4} alt="" className='w-24 h-24 object-contain bg-slate-800 rounded-3xl' />
                    </div>

                </div>


                <div className="c4">
                    <div className="head flex justify-center mt-10">
                        <p className='text-2xl font-bold bg-red-700 text-white rounded-2xl p-2 '>Tissue Box</p>
                        <p className='text-2xl font-bold p-2'>is powdered by</p>
                    </div>

                    <div className='image3 flex p-2  justify-center'>
                        <img src={powered1} alt="" className='w-30 h-24 object-contain mr-5' />
                        <img src={powered2} alt="" className='w-24 h-24 object-contain mr-5' />
                        <img src={powered3} alt="" className='w-24 h-24  object-contain mr-5 bg-slate-800 rounded-3xl' />
                        <img src={powered4} alt="" className='w-24 h-24 object-contain bg-slate-800 rounded-3xl' />
                    </div>
                </div>

            </div>
        </>
    )
}
