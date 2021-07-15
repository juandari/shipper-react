import React from 'react'

const cStyles = {
  container: 'flex gap-20 justify-evenly',
  previousContainer: 'mt-10 flex flex-row gap-2 items-center cursor-pointer',
  nextContainer: 'mt-10 flex flex-row gap-2 items-center cursor-pointer'
}

const PageNavigations = ({ handleClickPrev, handleClickNext, currentPage, numOfPages }) => {
  return (
    <div className={cStyles.container}>
      <div className={cStyles.previousContainer + ` ${currentPage === 0 ? 'text-gray-500' : ''}`} onClick={handleClickPrev} disabled={currentPage === 0 ? 'disabled' : null}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        <span>Previous Page</span>
      </div>
      <div className={cStyles.nextContainer + ` ${currentPage === numOfPages - 1 ? 'text-gray-500' : ''}`} onClick={handleClickNext}>
        <span>Next Page</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  )
}

export default PageNavigations
