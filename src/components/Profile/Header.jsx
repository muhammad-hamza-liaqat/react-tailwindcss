import React from 'react';
import { FaInstagram, FaSnapchatGhost } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="bg-[linear-gradient(to_right,#8056cf,#48c148,#165162)] text-white p-6 md:p-8 flex flex-col md:flex-row justify-between items-center shadow-lg">
            <h1 className="text-2xl md:text-3xl font-bold tracking-wider mb-4 md:mb-0">
                Faisal
            </h1>
        </header>
    );
};

export default Header;
