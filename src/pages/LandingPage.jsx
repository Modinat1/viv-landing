import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import BannerBottom from '../components/BannerBottom'
import Sale from '../components/Sale'
import NewArrivals from '../components/NewArrivals/NewArrivals'
import SpecialOffer from '../components/SpecialOffer'
import BestSelling from '../components/BestSelling'
import Footer from '../components/Footer/Footer'

const LandingPage = () => {
  return (
    <>
       <Header/>
    <section className="w-full mx-auto">
         
        <Banner/>
        <BannerBottom/>
        
        <div className="max-w-container mx-auto px-4">
        <NewArrivals/>
        <Sale/>
        <BestSelling/>
        <SpecialOffer/>
        </div>
        <Footer/>
    </section>
    </>
  )
}

export default LandingPage