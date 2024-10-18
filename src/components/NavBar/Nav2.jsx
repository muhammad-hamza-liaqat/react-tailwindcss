import React from 'react'
import Logo from "../../assets/images/Logo.png";
import { FaTelegram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function Nav2() {
    return (
        <>
            <div className='flex items-center justify-around' style={{ backgroundImage: 'linear-gradient(to right,#17071F, #390512, #18051C)' }}>

                <img src={Logo} alt="" className='max-w-14 md:max-w-20' />

                <div className='flex flex-row items-center'>
                    <div>
                        <FaTelegram  className='text-white mr-3 h-8 w-6 md:mr-2 md:w-8 md:h-8'/>
                    </div>
                    <div>
                        <AiFillTwitterCircle className='text-white h-8 w-6 md:mr-2 md:w-8 md:h-9'/>
                    </div>
                    <div>
                        <button className='hidden  bg-red-600 hover:bg-red-700 rounded-lg md:px-1 md:py-2 md:block'> connect wallet </button>
                    </div>
                </div>
            </div>
        </>
    )
}
