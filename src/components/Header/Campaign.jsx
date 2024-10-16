import React from 'react';
import chain_icon from "../../assets/svgs/chain_icon.svg";
import a1 from "../../assets/images/a1.png"
import run from "../../assets/images/run.png"

export default function Campaign({ name, price }) {
    return (
        <>
            <div className='text-section mt-24 flex flex-col'>
                <div className='text-center font-bold text-6xl'>Our Campaign Streams</div>
                <div className='text-center mt-5 p-1 text-2xl font-medium'>
                    Launch your campaign by joining a stream that aligns with your budget and growth goals.
                </div>
            </div>

            <div className='mt-20 p-12'>
                <div className="chainSection space-y-6"> {/* Space between rows */}
                    {/* Campaign Row 1 */}
                    <div className="chain1 flex items-center justify-between p-4 border rounded-lg shadow-md">
                        <img src={a1} className="w-24 h-auto rounded-2xl" alt="Chain Icon" />
                        <div className="font-bold">Steady</div>
                        <div className="price font-semibold">$10</div>
                        <button className="bg-blue-500 text-white rounded-lg px-4 py-2">Join</button>
                    </div>

                    {/* Campaign Row 2 */}
                    <div className="chain2 flex items-center justify-between p-4 border rounded-lg shadow-md">
                        <img src={chain_icon} className="w-24 h-auto rounded-2xl" alt="Chain Icon" />
                        <div className="font-bold">Turbo</div>
                        <div className="price font-semibold">$100</div>
                        <button className="bg-blue-500 text-white rounded-lg px-4 py-2">Join</button>
                    </div>

                    {/* Campaign Row 3 */}
                    <div className="chain3 flex items-center justify-between p-4 border rounded-lg shadow-md">
                        <img src={run} className="w-24 h-auto rounded-2xl" alt="Chain Icon" />
                        <div className="font-bold">Flash</div>
                        <div className="price font-semibold">$1000</div>
                        <button className="bg-blue-500 text-white rounded-lg px-4 py-2">Join</button>
                    </div>

                    {/* Campaign Row 4 */}
                    <div className="chain4 flex items-center justify-between p-4 border rounded-lg shadow-md">
                        <img src={chain_icon} className="w-24 h-auto rounded-2xl" alt="Chain Icon" />
                        <div className="font-bold">Hypersonic</div>
                        <div className="price font-semibold">$5000</div>
                        <button className="bg-blue-500 text-white rounded-lg px-4 py-2">Join</button>
                    </div>
                </div>
            </div>
        </>
    );
}
