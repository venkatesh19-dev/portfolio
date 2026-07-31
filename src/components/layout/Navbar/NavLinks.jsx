import React from 'react'

const NavLinks = ({mobile = false}) => {
  return (
    <ul className={
      mobile ? "flex flex-col items-start gap-8"
      : 'flex items-center gap-10'
      }
    >
        <li><a className='relative text-white hover:text-gray-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full' href="#home">Home</a></li>

        <li><a className='relative text-white hover:text-gray-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full' href="#about">About</a></li>

        <li><a className='relative text-white hover:text-gray-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full' href="#services">Services</a></li>

        <li><a className='relative text-white hover:text-gray-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full' href="#projects">Projects</a></li>
        
        <li><a className='relative text-white hover:text-gray-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full' href="#contact">Contact</a></li>
    </ul>
  )
}

export default NavLinks