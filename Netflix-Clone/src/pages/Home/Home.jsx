import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
// import NetflixBanner from '../../Components/Banner/NetflixBanner'
import Banner from '../../Components/Banner/Banner'
function Home() {
  return (
      <>
      <Header />
      <Banner />
      {/* <NetflixBanner/> */}
      <Footer />
      </>
  )
}

export default Home