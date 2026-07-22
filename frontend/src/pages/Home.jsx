import React from 'react'
import Navbar from '../components/common/Navbar'
import HeroSection from '../components/HomePageComponent/HeroSection'
import Services from '../components/HomePageComponent/Services'
import FeaturedDoctors from '../components/HomePageComponent/FeaturedDoctors'
import WhyChooseUs from '../components/HomePageComponent/WhyChooseUs'
import Statistics from '../components/HomePageComponent/Statistics'
import AppointmentCTA from '../components/HomePageComponent/AppointmentCTA'
import Testimonials from '../components/HomePageComponent/Testimonials'
import Gallery from '../components/HomePageComponent/Gallery'
import FAQs from '../components/HomePageComponent/FAQs'
import Footer from '../components/common/Footer'


const Home = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <Services />
    <FeaturedDoctors />
    <WhyChooseUs />
    <Statistics />
    <AppointmentCTA />
    <Testimonials />
    <Gallery />
    <FAQs />
    <Footer />

      
    </>
  )
}

export default Home