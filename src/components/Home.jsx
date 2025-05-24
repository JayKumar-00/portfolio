import React from 'react'
import programmer from '/programmer.webp'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped, Typed } from "react-typed";

const Home = () => {
  return (
    <>
      <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-auto'>
        <div className='flex flex-col-reverse md:flex-row items-center justify-center'>
          <div className='md:w-1/2 text-center md:text-start space-y-3 mt-14 py-16 md:mt-32'>
            <span className='text-gray-400 text-xl'>Welcome In My Feed</span>
            <h1 className='text-2xl md:text-4xl font-medium'>Hello, I'm a <ReactTyped className='text-red-900 text-2xl md:text-4xl font-bold'
              strings={["Developer", "Programmer", "Coder"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            /></h1>
            <p className='text-sm md:text-base text-justify pt-5'>Lorem ipsum dolor, sit amet a consectetur umque is tempori adipisicing a elit. Accusantium eos quis explicabo in dolores, cumque tempori bus alias perspiciatis velit eligendi! Accusantium explicabo adipisicing elit a aliquid distinctio impedit.</p>
            <br />
            {/* Social Media icon */}
            <div className='flex flex-col md:flex-row justify-between'>
              <div className='space-y-3 md:space-y-2'>
                <h1 className='font-bold'>Available on</h1>
                <ul className='flex flex-row justify-center md:justify-start space-x-4 pb-5 md:pb-0'>
                  <li>
                    <a href="https://www.facebook.com" target="_blank">
                      <FaSquareFacebook className='text-2xl cursor-pointer' />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com" target="_blank">
                      <FaLinkedin className='text-2xl cursor-pointer' />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com" target="_blank">
                      <IoLogoYoutube className='text-2xl cursor-pointer' />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.telegram.com" target="_blank">
                      <FaTelegram className='text-2xl cursor-pointer' />
                    </a>
                  </li>
                </ul>
              </div>
              <div className='space-y-3 md:space-y-2'>
                <h1 className='font-bold'>Currently working on</h1>
                <ul className='flex flex-row justify-center md:justify-start space-x-4 pb-5 md:pb-0'>
                  <li><SiMongodb className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]' /></li>
                  <li><SiExpress className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]' /></li>
                  <li><FaReact className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]' /></li>
                  <li><FaNodeJs className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]' /></li>
                </ul>
              </div>
            </div>
          </div>
          {/* right image */}
          <div className='md:w-1/2'>
            {/* <img className='flex rounded-full pt-20' src="https://static.vecteezy.com/system/resources/thumbnails/039/633/586/small_2x/a-programmer-sitting-at-a-desk-with-a-computer-and-icons-around-him-free-png.png" alt="" /> */}
            <img className='flex rounded-full pt-20' src={programmer} alt="" />
          </div>
        </div>
        <br />
        <hr />
      </div>
    </>
  )
}

export default Home