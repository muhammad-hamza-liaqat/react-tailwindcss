import React from 'react'

export default function Hero2() {
    return (
        <>
            <div className="Parent mt-8">
                <div className='p2'>
                    <div className='flex justify-around'>
                        <div className='flex flex-col items-center mt-5 border border-black rounded-2xl py-5 px-2 text-2xl font-bold'> Tissue Box Sold  <div className='text-center mt-10'> 67 </div></div>
                        <div className='mt-5 border border-black rounded-2xl py-5 px-2'> Video to be added here</div>
                        <div className='mt-5 border border-black rounded-2xl py-5 px-2'>
                            <p className='text-center font-bold mb-2'> Checkout</p>
                            <div className='flex items-center'>
                                <p>Current Price</p>
                                <p> 200 USTD </p>
                            </div>

                            <div className='flex mt-4 items-center'>
                                <p className='mr-9'>Quantity</p>
                                <textarea
                                    id="amount"
                                    className='rounded-sm p-1 w-20 h-10'
                                    defaultValue="amount"
                                ></textarea>
                            </div>
                            <div>
                                <div className='flex items-center'>
                                    <p className='mr-14'>USTD</p>
                                    <button className='bg-red-600 px-1 py-2 rounded-md text-white'>Connect</button>
                                </div>
                                <div className=' mt-5 flex flex-col'>
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
    )
}
