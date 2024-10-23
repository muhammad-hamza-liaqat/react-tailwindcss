import React from 'react'
import Logo from "../../assets/images/Logo.png"
import { FaTelegram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function Dis() {
    return (
        <>
            <div className="main" style={{ backgroundImage: 'linear-gradient(to right,#17071F, #390512, #18051C)' }}>
                <div className="logo flex justify-center">
                    <img src={Logo} alt="" className='w-40' />
                </div>

                <div className='logos flex justify-center gap-3'>
                    <div>
                        <FaTelegram className='text-white mr-3 h-8 w-6 md:mr-2 md:w-8 md:h-8' />
                    </div>
                    <div>
                        <AiFillTwitterCircle className='text-white h-8 w-6 md:mr-2 md:w-8 md:h-9' />
                    </div>
                </div>

                <div className="text mt-4">
                    <p className='text-white text-center text-xs'> BE A TISSUE BOX CONTESTANT | EARN AS A CREATOR PARTNER</p>
                </div>

                <div className="dis">
                    <p className='text-white text-center mt-10 text-sm'>
                        DISCLAIMER
                    </p>
                </div>

            </div>
        </>
    )
}
