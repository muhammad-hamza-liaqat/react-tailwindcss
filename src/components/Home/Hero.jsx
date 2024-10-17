import React from 'react';
import heroBack from "../../assets/images/heroBack.jpg"

export default function Hero() {
    return (
        <>
            <div
                className='flex justify-around items-start py-16 bg-gradient-to-r from-purple-900 to-red-900'
                style={{
                    // backgroundImage:  `url(${heroBack})`,
                    backgroundImage:  `(${heroBack})`,
                }}
            >
                {/* Tissue Box Sold Section */}
                <div className='mt-10 border border-black rounded-xl p-10 flex flex-col justify-center items-center bg-gray-900 bg-opacity-80 w-64 h-64'>
                    <p className='text-lg font-bold text-white'>Tissue Box Sold</p>
                    <p className='mt-3 text-center text-4xl font-bold text-white'>67</p>
                </div>

                {/* Video Section */}
                <div className='mt-10 border border-black rounded-xl p-20 flex justify-center items-center bg-gray-900 bg-opacity-80 w-64 h-64'>
                    <p className='text-white'>Video here</p>
                </div>

                {/* Checkout Section */}
                <div className='mt-10 border border-black rounded-xl p-10 bg-gray-900 bg-opacity-80 w-64 h-64'>
                    <p className='text-center font-bold text-2xl text-white mb-5'>Checkout</p>

                    {/* Current Price Section */}
                    <div className='flex justify-between mb-5'>
                        <p className='text-white'>Current Price</p>
                        <p className='text-white'>200 USDT</p>
                    </div>

                    {/* Quantity Section */}
                    <div className='flex justify-between mb-5'>
                        <p className='text-white'>Quantity</p>
                        <textarea
                            id="amount"
                            className='rounded-md p-2 w-24 h-10'
                            defaultValue="200"
                        ></textarea>
                    </div>

                    {/* USDT Section and Connect Button */}
                    <div className='flex justify-between items-center mb-5'>
                        <p className='text-white'>USDT</p>
                        <button className='bg-red-600 text-white p-2 rounded-lg hover:bg-transparent hover:text-black border-2 border-red-600 transition-all'>
                            Connect
                        </button>
                    </div>

                    {/* Price Info */}
                    <p className='text-sm text-white'>
                        Price Increase per 200 sold will be +20 USDT (starting from #10,001)
                    </p>
                    {/* <p className='text-sm text-white'>(starting from #10,001)</p> */}
                </div>
            </div>
        </>
    );
}
