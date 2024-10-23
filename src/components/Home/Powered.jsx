import React from 'react';
import powered1 from "../../assets/images/powered1.png";
import powered2 from "../../assets/images/powered2.png";
import powered3 from "../../assets/images/powered3.png";
import powered4 from "../../assets/images/powered4.png";

export default function Powered() {
    return (
        <>
            <div className="main pt-12" style={{ backgroundImage: 'linear-gradient(to right,#17071F, #390512, #18051C)' }}>
                <div className="title md:flex md:items-center md:justify-center">
                    <p className='text-3xl rounded-2xl px-4 py-2 text-center md:mr-2 text-white bg-red-600 md:rounded-xl md:px-4 md:py-2 md:text-2xl font-bold'>Tissue Box</p>
                    <p className='text-center font-bold md:text-xl text-white'>is powered by</p>
                </div>

                {/* Images for sponsors */}
                <div className="images flex flex-wrap justify-center gap-4 pt-8">
                    <div className="img1 w-32 h-32 flex items-center justify-center">
                        <img src={powered1} alt="_spos1" />
                    </div>

                    <div className="img2 w-32 h-32 flex items-center justify-center">
                        <img src={powered2} alt="_spos2" />
                    </div>

                    <div className="img3 w-32 h-32 flex items-center justify-center">
                        <img src={powered3} alt="_spos3" />
                    </div>

                    <div className="img4 w-32 h-32 flex items-center justify-center">
                        <img src={powered4} alt="_spos4" />
                    </div>
                </div>
            </div>
        </>
    );
}
