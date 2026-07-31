import React, { useState } from 'react'
import NavLinks from './NavLinks';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import MobileMenu from './MobileMenu';

const Navbar = () => {

  const [menuOpen, setmenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-3">
      <nav className="bg-secondary h-20  border border-white/10 rounded-2xl text-white px-8 flex items-center">
        {/* Logo */}
        <div className="flex-1">
          <a href="/" className="text-xl font-bold text-white">
            &lt;Vs/&gt;
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex justify-center flex-1">
          <NavLinks />
        </div>

        {/* CTA */}
        <div className='hidden lg:flex justify-end flex-1'>
            <button className='px-6 py-3 rounded-full bg-accent text-gray-700 font-medium'>
                <a href="#contact">Let's Talk</a>
            </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className='flex flex-1 justify-end lg:hidden'>
          <button
            onClick={()=>setmenuOpen(true)}
            className='text-white text-3xl'
          >
            <HiOutlineMenuAlt3 />
          </button>
        </div>

      </nav>

      <MobileMenu 
        menuOpen={menuOpen}
        setMenuOpen={setmenuOpen}
      />
    </header>
  );
}

export default Navbar