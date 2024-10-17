import React from 'react';
import Logo from "../../assets/images/Logo.png";
import { FaTelegram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function Nav() {
  return (
    <>
      <div
        className="main flex items-center justify-between bg-gradient-to-r"
        style={{
          backgroundImage: 'linear-gradient(to right,#17071F, #390512, #18051C)',
        }}
      >
        <div className="w-28 ml-20">
          <img src={Logo} alt="" />
        </div>

        <div className="second flex items-center mr-12">
          <div className="flex items-center mr-3">
            <FaTelegram className="text-white text-3xl mr-3" />
            <AiFillTwitterCircle className="text-white text-3xl" />
          </div>

          <div>
            <button className="text-white bg-red-600 rounded-full hover:bg-red-700 p-3 mr-4">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
