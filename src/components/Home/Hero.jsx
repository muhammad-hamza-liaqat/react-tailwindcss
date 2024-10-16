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
                    <p>Checkout</p>
                    <div>
                        <p>Current Price </p>
                        <p> 200 USDT</p>
                    </div>

                    <div>
                        <p>Quantity</p>
                        <textarea name="amount" id="amount">Amount</textarea>
                    </div>

                    <div>
                        <p>USTD</p>
                        <button className='bg-red-600 text-white hover:bg-transparent'> Connect </button>
                    </div>
                    <p>
                        Price Increase per 200 sold will be +20 USDT
                    </p>
                    <p>
                        (starting from #10,001)
                    </p>
                </div>
            </div>

        </>
    )
}
