import React from 'react'

const cStyles = {
  container: 'sticky top-0 z-10 lg:col-span-6 lg:row-span-1 lg:grid',
  navContainer: 'flex flex-row justify-between items-center px-6 py-3 bg-white lg:py-0',
  logoContainer: 'flex flex-row gap-4 items-center',
  burgerSVG: 'h-9 w-9 text-gray-500 cursor-pointer lg:hidden',
  userContainer: 'lg:flex lg:flex-row lg:items-center lg:gap-3 lg:text-lg',
  userSVG: 'h-10 w-10 text-gray-400 text-opacity-80'
}

const Navbar = () => {
  return (
    <div className={cStyles.container}>
      <nav className={cStyles.navContainer}>
        <div className={cStyles.logoContainer}>
          <svg xmlns="http://www.w3.org/2000/svg" className={cStyles.burgerSVG} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
  
          <img src="https://shipper.id/bos//assets/img/auth/login/shipper1@2x.png" alt="shipper logo" className="h-7" />
        </div>
  
        <div className={cStyles.userContainer}>
          <div className="hidden lg:block">
            <span>Hello</span>, <span className="text-red-500">Shipper User</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className={cStyles.userSVG} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
          </svg>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
