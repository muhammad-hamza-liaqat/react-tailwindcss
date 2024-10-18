import React from 'react'
import mechanism from "../../assets/images/mechanism.png"
import price from "../../assets/images/price.png"
import tokenomics from "../../assets/images/tokenomics.png"

export default function Eco2() {
    return (
        <>
            <div className="parent" style={{ backgroundImage: 'linear-gradient(to right,#17071F, #390512, #18051C)' }} >
                <p className='text-center font-bold text-2xl mt-5 text-white'>Ecosystem</p>

                {/* image1 */}
                <div className='images'>
                    <div className='image1 w-auto h-auto p-8'>
                        <img src={mechanism} alt="_image1" className='rounded-2xl' />
                    </div>

                    <p className='text-white text-2xl text-center' >Price Mechanism</p>
                    {/* image 2 */}
                    <div className="image2 w-auto h-auto px-8">
                        <img src={price} alt="_image2" className='rounded-2xl' />
                    </div>

                    <p className='text-white text-2xl text-center'>Tokenomics</p>

                    {/* image 3 */}
                    <div className='image3 w-auto h-auto px-12'>
                        <img src={tokenomics} alt="+logo3" className='rounded-2xl'/>
                    </div>
                </div>


            </div>
        </>
    )
}
