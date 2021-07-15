import React from 'react'

function MainContentContainer(props) {
  return (
    <div className='lg:flex lg:flex-row overflow-x-hidden lg:col-start-2 lg:col-span-5 lg:row-start-2 lg:row-span-5'>
      <div className='p-5 flex flex-col gap-4 font-poppins lg:items-center w-full'>
        { props.children }
      </div>
    </div>
  )
}

export default MainContentContainer
