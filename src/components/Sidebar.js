import React from 'react'

const cStyles = {
  container: 'hidden lg:flex lg:flex-col lg:gap-5 lg:bg-white lg:py-10 lg:w-full lg:h-full lg:row-span-5',
  link: 'flex flex-row gap-2 pl-4 py-1 border-l-4 border-white text-gray-500 hover:text-black',
  activeLink: 'flex flex-row gap-2 pl-4 py-1 text-red-500 border-l-4 border-red-500'
}

const Sidebar = () => {
  return (
    <div className={cStyles.container}>
      <div className={cStyles.link}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
        <span className="cursor-pointer">Beranda</span>
      </div>
      <div className={cStyles.activeLink}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
        </svg>
        <span className="cursor-pointer">Driver Management</span>
      </div>
      <div className={cStyles.link}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
        <span className="cursor-pointer">Pickup</span>
      </div>
    </div>
  )
}

export default Sidebar
