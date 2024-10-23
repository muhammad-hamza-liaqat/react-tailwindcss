import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import Ali from "../../assets/images/Ali.jpeg";
import { AttentionSeeker, Hinge, Rotate, Bounce } from 'react-awesome-reveal';

const Introduction = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <section className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white p-6 md:p-8 flex flex-col md:flex-row items-center">
                {/* Left Side - Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={Ali}
                        alt="_ali_image"
                        className="rounded-lg shadow-lg w-72 h-72 md:w-96 md:h-96 object-cover"
                    />
                </div>

                {/* Right Side - Text */}
                <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Sheikh Ali Raza</h2>
                    <h2 className="text-2xl md:text-3xl font-normal mb-4">Operations Head</h2>
                    <p className="text-lg md:text-xl font-light">
                        at Grand Square Mall. With years of experience in managing operations,
                        I focus on ensuring seamless customer experiences, enhancing operational
                        efficiency, and driving business growth.
                    </p>
                    <p className="mt-3 text-lg md:text-xl font-light">
                        Whether it's dealing with customer issues, improving logistics, or
                        leading projects, I am dedicated to making Grand Square Mall a
                        well-functioning and thriving hub for both retailers and customers.
                        I take pride in my ability to adapt to challenges and lead my team
                        towards continuous improvement.
                    </p>

                    {/* Contact Button */}
                    <button
                        onClick={openModal}
                        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                    >
                        Contact Me
                    </button>
                </div>
            </section>

            {/* Modal using Headless UI and react-awesome-reveal */}
            <Dialog open={isOpen} onClose={closeModal} className="fixed z-50 inset-0 flex items-center justify-center p-4">
                <div className="fixed inset-0 bg-black opacity-50" aria-hidden="true"></div>

                {/* Combined crazy animations */}
                <Rotate triggerOnce cascade>
                    <AttentionSeeker effect="tada">
                        <Bounce triggerOnce>
                            <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto text-center">
                                <Dialog.Title className="text-xl font-semibold text-gray-900">Contact Information</Dialog.Title>
                                <p className="mt-4 text-lg font-medium text-gray-800">Phone: +92 322 4173109</p>
                                <button
                                    className="mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg"
                                    onClick={closeModal}
                                >
                                    Close
                                </button>
                            </div>
                        </Bounce>
                    </AttentionSeeker>
                </Rotate>
            </Dialog>
        </>
    );
};

export default Introduction;
