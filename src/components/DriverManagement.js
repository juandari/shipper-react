import React from 'react'

const cStyle = {
  container: 'bg-white w-full p-4 rounded-sm lg:flex lg:flex-row lg:justify-between lg:items-center',
  formContainer: 'lg:flex lg:flex-row lg:gap-3 lg:items-center',
  searchBoxContainer: 'relative border border-gray-300 rounded-sm z-0',
  submitContainer: 'flex flex-row justify-center items-center gap-2 bg-red-500 text-gray-100 text-md font-bold p-3 mt-5 mb-2 rounded-sm lg:mt-2 lg:py-3',
  title: 'text-red-500 font-bold text-xl tracking-wide',
  info: 'text-sm text-gray-500 mb-5',
  searchSVG: 'h-5 w-5 absolute text-red-500 top-2 left-2 lg:top-3',
  searchInput: 'pl-8 w-full p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent lg:py-3',

}

function DriverManagement({ handleSearch }) {
  return (
    <div className={cStyle.container}>
      <div>
        <h2 className={cStyle.title}>DRIVER MANAGEMENT</h2>
        <p className={cStyle.info}>Data driver yang bekerja dengan Anda.</p>
      </div>

      <form className={cStyle.formContainer}>
        {/* <!-- SEARCH BOX --> */}
        <div className={cStyle.searchBoxContainer}>
          <svg xmlns="http://www.w3.org/2000/svg" className={cStyle.searchSVG} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
          <input type="text" placeholder="Cari Driver" className={cStyle.searchInput} onChange={handleSearch} />
        </div>

        {/* <!-- SUBMIT --> */}
        <div className={cStyle.submitContainer}>
          <span>TAMBAH DRIVER</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </div>
      </form>
    </div>
  )
}

export default DriverManagement
