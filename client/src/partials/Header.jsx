import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Dropdown from '../utils/Dropdown';

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
<<<<<<< HEAD
  const path = useLocation();
=======
  const pathName = useLocation();
>>>>>>> 9dea2082eed2a87d9bbedd3d17c2d74fd6d6fd44
  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    console.log(pathName.pathname)
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <header className="sticky w-full z-30 bg-aml-100 bg-opacity-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
<<<<<<< HEAD
            <Link to="/" className="block" aria-label="TurismoApp">
=======
            <Link to="/" className="block" aria-label="Turismo App">
>>>>>>> 9dea2082eed2a87d9bbedd3d17c2d74fd6d6fd44
              <h1 className='h3'>TurismoApp</h1>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              {/* <li> */}
              {/* <Link to="/signin" className="font-medium text-aml hover:text-aml-bg px-4 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link> */}
              {/* </li> */}
              <li>
<<<<<<< HEAD
                <Link to={path.pathname === '/' ? '/Registros' : '/'} className="btn-sm text-white bg-aml hover:bg-aml-b ml-3">{path.pathname === '/' ? 'Registrarse' : 'Volver'}</Link>
=======
                <Link to={pathName.pathname === '/' ? '/Registros' : '/'} className="btn-sm text-white bg-aml hover:bg-aml-b ml-3">{pathName.pathname === '/' ? 'Registrar' : 'Volver'}</Link>
>>>>>>> 9dea2082eed2a87d9bbedd3d17c2d74fd6d6fd44
              </li>
            </ul>

          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">

            {/* Hamburger button */}
            <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-blk text-blk hover:text-gray-200 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 }}>
              <ul className="bg-gray-800 px-4 py-2">
                {/* <li> */}
                  {/* <Link to="/signin" className="flex font-medium w-full text-aml hover:text-aml-b py-2 justify-center">Sign in</Link> */}
                {/* </li> */}
                <li>
                  <Link to="/" className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-blk bg-aml hover:bg-aml-b transition duration-150 ease-in-out">{pathName==='/'? 'Registrar' : 'Volver'}</Link>
                </li>
              </ul>
            </nav>

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
