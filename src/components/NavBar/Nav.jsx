import React from 'react'
import Logo from "../../assets/images/Logo.png"
import { FaTelegram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function Nav() {
    return (
        <>
            <div className="main flex items-center justify-between bg-cyan-600">
                <div className=' w-28'>
                    <img src={Logo} alt="" />
                </div>

                <div className='second flex'>
                    <div className='flex'>
                        <div className='mr-3'>
                            <FaTelegram className='size-12' />
                        </div>

                        <div className='mr-3'>
                            <AiFillTwitterCircle className='size-12' />
                        </div>

                    </div>


                    <div>
                        <button className='text-white bg-red-600 rounded-full hover:bg-red-700 p-3 mr-4'> Connect Wallet </button>
                    </div>
                </div>
            </div>
        </>
    )
}