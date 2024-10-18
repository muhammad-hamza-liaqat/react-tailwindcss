import React from 'react';
import video from "../../assets/videos/video.mp4";

export default function Hero2() {
    return (
        <>
            <div className="Parent py-8 px-14" style={{ backgroundImage: 'linear-gradient(to right,#17071F, #390512, #18051C)' }}>
                <div className='p2'>
                    <div className='flex flex-col md:flex-row md:justify-around gap-8'>

                        {/* Tissue Box Section */}
                        <div className='flex flex-col items-center mt-5  rounded-2xl py-5 px-6 text-2xl text-white font-bold w-full md:w-1/3 bg-gradient-to-r from-black to-gray-700'>
                            Tissue Box Sold
                            <div className='text-center mt-10 text-5xl'>67</div>
                        </div>

                        {/* Video Section */}
                        <div className='mt-5  rounded-2xl w-full md:w-1/3 bg-black'>
                            <div>
                                <video className='w-full h-auto rounded-xl bg-black' autoPlay muted loop>
                                    <source src={video} type='video/mp4' />
                                </video>
                            </div>
                        </div>

                        {/* Checkout Section */}
                        <div className='mt-5  rounded-2xl py-5 px-6 bg-slate-500 w-full md:w-1/3'>
                            <p className='text-center font-bold mb-2 text-2xl'>Checkout</p>
                            <div className='flex items-center justify-between mb-4'>
                                <p>Current Price</p>
                                <p className='ml-2 text-2xl font-bold'>200 USDT</p>
                            </div>

                            <div className='flex mt-4 items-center justify-between'>
                                <p>Quantity</p>
                                <textarea
                                    id="amount"
                                    className='rounded-lg p-1 w-24 h-10 text-center'
                                    placeholder="100$"
                                ></textarea>
                            </div>

                            <div className='mt-3'>
                                <div className='flex items-center justify-between'>
                                    <p className='md:mr-14 text-lg'>USDT</p>
                                    <button className='bg-red-600 rounded-xl p-1 md:px-4 md:py-2 md:rounded-md text-white'>
                                        Connect
                                    </button>
                                </div>
                                <div className='mt-5 text-center'>
                                    <p className='text-xs'>
                                        Price Increase per 200 sold will be +20 USDT (Starting
                                    </p>
                                    <p className='text-xs'>from #10,001)</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
