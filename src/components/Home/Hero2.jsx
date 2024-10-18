import React from 'react'

export default function Hero2() {
    return (
        <>
            <div className="Parent mt-8">
                <div className='p2'>
                    <div className='flex justify-around'>
                        <div className='flex flex-col items-center'> Tissue Box Sold  <div> 67 </div></div>
                        <div> Video to be added here</div>
                        <div> Checkout
                            <div className='flex items-center'>
                                <p>Current Price</p>
                                <p> 200 USTD </p>
                            </div>

                            <div className='flex mt-4'>
                                <p>Quantity</p>
                                <textarea
                                    id="amount"
                                    className='rounded-sm p-1 w-20 h-10'
                                    defaultValue="amount"
                                ></textarea>
                            </div>
                            <div>
                                <div className='flex'>
                                    <p>USTD</p>
                                    <button className='bg-red-600 px-1 py-2 rounded-md text-white'>Connect</button>
                                </div>
                                <div>
                                    <p>
                                    Price Increase per 200 sold will be +20 USDT (Starting from #10,001)
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
