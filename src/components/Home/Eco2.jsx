import React from 'react'
import mechanism from "../../assets/images/mechanism.png"
import price from "../../assets/images/price.png"
import tokenomics from "../../assets/images/tokenomics.png"
import c1 from "../../assets/images/c1.png"
import c2 from "../../assets/images/c2.png"
import c3 from "../../assets/images/c3.png"
import c4 from "../../assets/images/c4.png"

export default function Eco2() {
    return (
        <>
            <div className="parent" style={{ backgroundImage: 'linear-gradient(to right,#17071F, #390512, #18051C)' }} >
                <p className='text-center font-bold text-2xl py-5 text-white'>Ecosystem</p>

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
                        <img src={tokenomics} alt="+logo3" className='rounded-2xl' />
                    </div>
                </div>


            </div>

            {/* content and benefits */}
            <div className="main" style={{ backgroundImage: 'linear-gradient(to right,#17071F, #390512, #18051C)' }}>
                <p className='text-white text-center text-2xl mb-12'>Contents & Benefits </p>
                <div className="content flex flex-col items-center md:flex md:flex-row md:justify-center md:gap-14">
                    <div className="1">
                        <img src={c1} alt="" className='' style={{ width: '100px', height: 'auto' }} />
                        <p className='text-white text-center'>Power Up</p>
                        <p className='text-white text-center'> Staking Rewards</p>

                    </div>
                    <div className="2">
                        <img src={c2} alt="" style={{ width: '100px', height: 'auto' }} />
                        <p className='text-white text-center'>Unlock VIP</p>
                        <p className='text-white text-center'>Contents</p>
                    </div>
                    <div className="3">
                        <img src={c3} alt="" style={{ width: '100px', height: 'auto' }} />
                        <p className='text-white text-center'>Additional</p>
                        <p className='text-white text-center'>Rewards(NFTs,</p>
                        <p className='text-white text-center' >AirDrop)</p>
                    </div>
                    <div className="4">
                        <img src={c4} alt="" style={{ width: '100px', height: 'auto' }} />
                        <p className='text-white text-center'>$SPLA Daily</p>
                        <p className='text-white text-center'>Income</p>
                    </div>
                </div>
            </div>

            {/* text of content and benefits */}
            {/* <div className="mains hidden md:block" style={{ backgroundImage: 'linear-gradient(to right,#17071F, #390512, #18051C)' }}>
                <div className='flex  text-white md:justify-center md: gap-16'>
                    <div className="1">
                        <p>
                            Power Up
                        </p>
                        <p>
                            Staking Rewards
                        </p>
                    </div>
                    <div className="2">
                        <p>
                            Unlock VIP
                        </p>
                        <p>
                            contents
                        </p>
                    </div>
                    <div className="3">
                        <p>Additional</p>
                        <p>Rewards (NFTs,</p>
                        <p>Airdrops)</p>
                    </div>
                    <div className="4">
                        <p>$SPLA Daily </p>
                        <p>Income</p>
                    </div>
                </div>
            </div> */}
        </>
    )
}
