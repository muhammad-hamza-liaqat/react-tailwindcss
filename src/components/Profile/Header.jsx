import React from 'react';
import { FaInstagram, FaSnapchatGhost } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="bg-[linear-gradient(to_right,#8056cf,#48c148,#165162)] text-white p-6 md:p-8 flex flex-col md:flex-row justify-between items-center shadow-lg">
            <h1 className="text-2xl md:text-3xl font-bold tracking-wider mb-4 md:mb-0">
                Sheikh Ali
            </h1>
            <div className="flex space-x-6">
                {/* Instagram */}
                <a
                    href="https://www.instagram.com/shyk._.69/profilecard/?igsh=a3lnb2trYmxwNXBx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-110 transition-transform duration-300 text-white hover:text-pink-800"
                >
                    <FaInstagram size={32} />
                </a>
                {/* Snapchat */}
                <a
                    href="https://snapchat.com/t/dX962wUK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-110 transition-transform duration-300 text-white hover:text-yellow-300"
                >
                    <FaSnapchatGhost size={32} />
                </a>
            </div>
        </header>
    );
};

export default Header;
