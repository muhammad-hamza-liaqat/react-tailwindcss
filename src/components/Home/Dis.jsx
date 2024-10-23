import React from 'react'
import Logo from "../../assets/images/Logo.png"
import { FaTelegram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function Dis() {
    return (
        <>
            <div className="main pb-5" style={{ backgroundImage: 'linear-gradient(to right,#17071F, #390512, #18051C)' }}>
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

                <div className="description mx-8 md:mx-32 pt-8 font-poppins text-xs">
                    <p className="text-white text-center leading-relaxed">
                        Investment Risks: Investing in $SPLA tokens, like all cryptocurrency investments, involves a high degree of risk. The value of $SPLA tokens can be extremely volatile and could fluctuate widely from one moment to the next. Before making any investment, it's crucial to understand that the price of $SPLA tokens could decrease significantly, potentially resulting in substantial loss.
                    </p>

                    <p className="text-white text-center pt-6 leading-relaxed">
                        Tax Considerations: Any profits you may earn from buying or selling $SPLA tokens could be subject to capital gains tax or other forms of taxation in your jurisdiction. Ensure you are fully aware of and comply with your local tax laws regarding cryptocurrency transactions.
                    </p>

                    <p className="text-white text-center pt-6 leading-relaxed">
                        Regulatory Awareness: The regulatory environment for cryptocurrency is still evolving, with laws and regulations that can vary significantly by country and region. You are responsible for understanding and adhering to any laws, rules, and regulations that apply to your cryptocurrency transactions in your jurisdiction.
                    </p>

                    <p className="text-white text-center pt-6 leading-relaxed">
                        Conduct Due Diligence: We strongly advise conducting thorough research and considering your financial situation and risk tolerance before investing in $SPLA tokens. Only invest an amount that you are prepared to lose, as cryptocurrency investments are not guaranteed and carry potential for loss.
                    </p>

                    <p className="text-white text-center pt-6 leading-relaxed">
                        Community Commitment: Tissue Box is committed to transparency and open communication. We encourage our community to reach out with questions or for clarification on how the Tissue Box platform operates and the utility of $SPLA tokens within our ecosystem.
                    </p>
                </div>



            </div>
        </>
    )
}
