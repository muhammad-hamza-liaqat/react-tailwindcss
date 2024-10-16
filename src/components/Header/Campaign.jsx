import React from 'react';
import chain_icon from "../../assets/svgs/chain_icon.svg";
import a1 from "../../assets/images/a1.png"
import run from "../../assets/images/run.png"

export default function Campaign({ name, price }) {
    return (
        <>
            <div className='text-section mt-24 flex flex-col'>
                <div className='text-center font-bold text-3xl md:text-6xl'>Our Campaign Streams</div>
                <div className='text-center mt-5 p-1 text-lg md:text-2xl font-medium'>
                    Launch your campaign by joining a stream that aligns with your budget and growth goals.
                </div>
            </div>

            <div className='mt-10 p-4 md:p-8'>
                <div className="chainSection grid grid-cols-1 gap-6">
                    {/* Campaign Row 1 */}
                    <div className="chain1 flex flex-col items-center justify-between p-6 border rounded-lg shadow-lg md:flex-row">
                        <img src={a1} className="mx-auto md:mx-0 w-12 h-auto rounded-2xl md:w-16" alt="Chain Icon" />
                        <div className="flex flex-col items-center text-center md:flex-row md:items-center md:space-x-2">
                            <div className="font-bold">Steady</div>
                            <div className="price font-semibold">$10</div>
                        </div>
                        <button className="bg-blue-500 text-white rounded-lg px-6 py-2 mt-2 md:mt-0">Join</button>
                    </div>

                    {/* Campaign Row 2 */}
                    <div className="chain2 flex flex-col items-center justify-between p-6 border rounded-lg shadow-lg md:flex-row">
                        <img src={chain_icon} className="mx-auto md:mx-0 w-12 h-auto rounded-2xl md:w-16" alt="Chain Icon" />
                        <div className="flex flex-col items-center text-center md:flex-row md:items-center md:space-x-2">
                            <div className="font-bold">Turbo</div>
                            <div className="price font-semibold">$100</div>
                        </div>
                        <button className="bg-blue-500 text-white rounded-lg px-6 py-2 mt-2 md:mt-0">Join</button>
                    </div>

                    {/* Campaign Row 3 */}
                    <div className="chain3 flex flex-col items-center justify-between p-6 border rounded-lg shadow-lg md:flex-row">
                        <img src={run} className="mx-auto md:mx-0 w-12 h-auto rounded-2xl md:w-16" alt="Chain Icon" />
                        <div className="flex flex-col items-center text-center md:flex-row md:items-center md:space-x-2">
                            <div className="font-bold">Flash</div>
                            <div className="price font-semibold">$1000</div>
                        </div>
                        <button className="bg-blue-500 text-white rounded-lg px-6 py-2 mt-2 md:mt-0">Join</button>
                    </div>

                    {/* Campaign Row 4 */}
                    <div className="chain4 flex flex-col items-center justify-between p-6 border rounded-lg shadow-lg md:flex-row">
                        <img src={chain_icon} className="mx-auto md:mx-0 w-12 h-auto rounded-2xl md:w-16" alt="Chain Icon" />
                        <div className="flex flex-col items-center text-center md:flex-row md:items-center md:space-x-2">
                            <div className="font-bold">Hypersonic</div>
                            <div className="price font-semibold">$5000</div>
                        </div>
                        <button className="bg-blue-500 text-white rounded-lg px-6 py-2 mt-2 md:mt-0">Join</button>
                    </div>
                </div>
            </div>


        </>
    );
}
