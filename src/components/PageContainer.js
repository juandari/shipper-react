import React from 'react'

function PageContainer(props) {
  return (
    <div className='bg-gray-800 bg-opacity-5 lg:grid lg:grid-cols-6 lg:grid-rows-layout lg:h-screen'>
      { props.children }
    </div>
  )
}

export default PageContainer
