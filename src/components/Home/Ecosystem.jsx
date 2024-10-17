import React from 'react'
import mechanism from "../../assets/images/mechanism.png"
import price from "../../assets/images/price.png"
import tokenomics from "../../assets/images/tokenomics.png"

export default function Ecosystem() {
    return (
        <>
            <div className="parent" style={{ backgroundColor: '#15071E', color: "white" }}>


                <div className="1 w-auto h-auto">
                    <div className="head flex justify-center mt-10">
                        <p className='text-2xl font-bold'>Ecosystem</p>
                    </div>

                    <div className='image1 p-12 mt-10'>
                        <img src={mechanism} alt="" />
                    </div>
                </div>


                <div className="2 w-auto h-auto">
                    <div className="head flex justify-center mt-10">
                        <p className='text-2xl font-bold'>Price Mechanism</p>
                    </div>

                    <div className='image2  p-24 mt-10'>
                        <img src={price} alt="" />
                    </div>
                </div>

                <div className="3 w-auto h-auto">
                    <div className="head flex justify-center mt-10">
                        <p className='text-2xl font-bold'>Tokenomics</p>
                    </div>

                    <div className='image3  p-32 mt-10'>
                        <img src={tokenomics} alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}
