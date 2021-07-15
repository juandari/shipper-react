import React from 'react'
import moment from 'moment'

const cStyles = {
  driversContainer: 'flex flex-col gap-5 w-full lg:flex lg:flex-row lg:flex-nowrap lg:overflow-x-hidden',
  driver: 'bg-white rounded-sm lg:w-72 lg:flex-shrink-0 lg:flex-grow-0',
  title: 'flex flex-row justify-between items-center p-4 border-b-2 border-gray-300 text-sm',
  infoContainer: 'flex flex-row items-center justify-evenly my-4 lg:flex lg:flex-col lg:gap-3 lg:items-start lg:pl-6',
  infoHidden: 'hidden lg:flex lg:flex-col lg:flex-wrap lg:mt-3',
  infoTitle: 'text-gray-400 text-sm'
}

function DriverList({ drivers }) {
  return (
    <div className={cStyles.driversContainer}>
      {drivers ? drivers.map(driver => (
        <div className={cStyles.driver} key={driver.login.uuid}>
          <div className={cStyles.title}>
            <div>
              <span className="text-gray-400">Driver ID </span>
              <span className="text-red-500">{ driver.login.username }</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </div>

          <div className={cStyles.infoContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-gray-400 text-opacity-80" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
            <div className="text-sm flex flex-col">
              <div className="mb-3">
                <p className={cStyles.infoTitle}>Nama Driver</p>
                <span>{ driver.name.first }</span>, <span>{ driver.name.last }</span>
              </div>
              <div>
                <p className={cStyles.infoTitle}>Telepon</p>
                <span>{ driver.phone }</span>
              </div>
              <div className={cStyles.infoHidden}>
                <p className={cStyles.infoTitle}>Email</p>
                <span>{ driver.email }</span>
              </div>
              <div className={cStyles.infoHidden}>
                <p className={cStyles.infoTitle}>Tanggal Lahir</p>
                <span>{moment(driver.dob.date).format('DD-MM-YYYY')}</span>
              </div>
            </div>
          </div>
        </div>
      )) : <div>Not Found</div>}
    </div>
  )
}

export default DriverList
