import React from 'react'
import logo from '../../assets/svgs/logo.svg'
import { FaCircleUser } from 'react-icons/fa6'
import { IoMdNotifications } from 'react-icons/io'
import { IoQrCodeSharp } from 'react-icons/io5'
import { MdFindReplace } from 'react-icons/md'

export default function MenuBar() {
  const handleIconClick = (iconName) => {
    console.log(`${iconName} clicked`);
  };

  const FindReplace = () => {

  }

  return (
    <>
      <div className='main mt-4 flex justify-between items-center'>
        <div className='d1'>
          <img className='w-12 md:w-24' src={logo} alt='_logo_added' />
        </div>

        <div className='d2 flex space-x-4 p-2'>
          <div onClick={() => handleIconClick('FindReplace')} className='cursor-pointer'>
            <MdFindReplace className='text-2xl md:text-4xl' />
          </div>
          <div onClick={() => handleIconClick('QrCode')} className='cursor-pointer'>
            <IoQrCodeSharp className='text-2xl md:text-4xl' />
          </div>
          <div onClick={() => handleIconClick('Notifications')} className='cursor-pointer'>
            <IoMdNotifications className='text-2xl md:text-4xl' />
          </div>
          <div onClick={() => handleIconClick('User')} className='cursor-pointer'>
            <FaCircleUser className='text-2xl md:text-4xl' />
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='w-full border-b border-gray-900 mt-2'></div>
      </div>
    </>
  )
}
