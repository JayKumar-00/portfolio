import React, { useState } from 'react';
// import pic from '../assets/programmer_IT.png'
import programmer from '/programmer.webp'
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-scroll'

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ]

  return (
    <div className='max-w-screen-2xl container mx-auto px-4 py-2 md:px-20 h-auto  shadow-md shadow-slate-400 fixed top-0 right-0 left-0 bg-white'>
      <div className='flex justify-between gap-20'>
        <div className='flex space-x-2'>
          <img className='w-20 h-12' src={programmer} alt="" />
          {/* <img className='w-20 h-12' src='https://static.vecteezy.com/system/resources/thumbnails/039/633/586/small_2x/a-programmer-sitting-at-a-desk-with-a-computer-and-icons-around-him-free-png.png' alt="" /> */}
          {/* <img className='w-[5rem]' src='https://static-00.iconduck.com/assets.00/coding-illustration-2048x1365-yefj2c5b.png' alt="" /> */}
          <h1 className='font-semibold text-lg cursor-pointer'>Jay <span className='text-red-900 text-xl'>Kumar</span>
            <p className='text-sm'>Web Developer</p>
          </h1>
        </div>
        {/* desktop navbar */}
        <div className='flex items-center'>
          <ul className='hidden md:flex items-center gap-7 text-lg'>
            {navItems.map(({ id, text }) => (
              <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                <Link to={text} smooth={true} duration={500} offset={-70} activeClass='"active'>{text}</Link>
              </li>
            ))}
          </ul>
          <div className='md:hidden' onClick={() => { setMenu(!menu) }}>
            {menu ? <IoMdClose size={30} /> : <TiThMenu size={30} />}
          </div>
        </div>
      </div>

      {menu && (
        <div className="md:hidden bg-white flex flex-col h-screen items-center justify-center text-center">
          <ul className='flex flex-col gap-4 text-lg'>
            {navItems.map(({ id, text }) => (
              <li className='hover:scale-105 duration-200 cursor-pointer font-semibold' key={id}>
                <Link onClick={() => { setMenu(!menu) }} to={text} smooth={true} duration={500} offset={-70} activeClass='"active'>{text}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* mobile navbar */}
    </div>
  )
}

export default Navbar