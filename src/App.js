import PageNavigations from './components/PageNavigations'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import MainContentContainer from './components/MainContentContainer'
import PageContainer from './components/PageContainer'
import DriverManagement from './components/DriverManagement'
import DriverList from './components/DriverList'
import generateArrOf5Data from './helpers/generateArrOf5Data'
// import useFetch from './hooks/useFetch'
import { useState, useEffect } from 'react'

function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const [data, setData] = useState(null)
  const [drivers, setDrivers] = useState([])
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  // because there are 30 drivers, and each page contains 5 driver, so total number pages is 6.
  const [numOfPages, setNumOfPages] = useState(6)

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=30')
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data')
        }
        return res.json()
      })
      .then(data => {
        setData(data)
        setDrivers(generateArrOf5Data(data.results))
        setIsPending(false)
        setError(null)
      })
      .catch(err => {
        setIsPending(false)
        setError(err.message)
      })
  }, [])

  const handleSearch = (e) => {
    let filteredData = data.results.filter(driver => driver.name.first.toLowerCase().includes(e.target.value.toLowerCase()))
    setDrivers(generateArrOf5Data(filteredData))
    setNumOfPages(generateArrOf5Data(filteredData).length)
  }

  const handleClickPrev = () => {
    if (currentPage !== 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleClickNext = () => {
    if (currentPage !== drivers.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div>
      <PageContainer>
        <Navbar />
        <Sidebar />
        <MainContentContainer>
          <DriverManagement handleSearch={handleSearch} />
          {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
          {drivers.length ? <DriverList drivers={drivers[currentPage]} /> : <div>Not Found</div>}
          {drivers.length && (
            <PageNavigations
              handleClickNext={handleClickNext}
              handleClickPrev={handleClickPrev}
              currentPage={currentPage}
              numOfPages={numOfPages}
            />
          )}
        </MainContentContainer>
      </PageContainer>
    </div>
  )
}

export default App
