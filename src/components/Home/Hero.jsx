import React from 'react'

export default function Hero() {
    return (
        <>
            <div className='flex justify-around'>
                <div className='mt-10 border border-black rounded-xl p-10 flex flex-col justify-center'>
                    <p className='text-lg font-bold'>Tissue Box Sold</p>
                    <p className='mt-3 text-center text-2xl font-bold'>67</p>
                </div>

                <div className='mt-10 border border-black rounded-xl p-20'>
                    <p> video here</p>
                </div>

                <div className='mt-10 border border-black rounded-xl p-10 '>
                    <p className='text-center font-bold text-2xl'>Checkout</p>
                    <div className='flex justify-around'>
                        <p>Current Price </p>
                        <p> 200 USDT</p>
                    </div>

                    <div className='flex justify-around'>
                        <p>Quantity</p>
                        <textarea name="amount" id="amount">Amount</textarea>
                    </div>

                    <div className='flex justify-around'>
                        <p>USTD</p>
                        <button className='bg-red-600 text-white p-1 rounded-xl hover:bg-transparent hover:text-black'> Connect </button>
                    </div>
                    <p className='mt-3 p-1'>
                        Price Increase per 200 sold will be +20 USDT
                    </p>
                    <p className='mt-1'>
                        (starting from #10,001)
                    </p>
                </div>


            </div>

        </>
    )
}
