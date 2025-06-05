import React from 'react'
import Hero from '../components/HeroSection/Hero'
import Slider from '../components/HeroSection/ServicesGrid'
import GrowSection from '../components/HeroSection/Grow'
import Goal from '../components/HeroSection/Goal'
import WhyChoose from '../components/HeroSection/Choose'
import ProjectManagementSection from '../components/HeroSection/Manage'
import Experties from '../components/HeroSection/Experties'
import Counter from '../components/HeroSection/Counter'
import QualityBusiness from '../components/HeroSection/QBWebsite'
import MobileAppBusiness from '../components/HeroSection/MABussiness'
import SEO from '../components/HeroSection/SEO'
import TraningProgram from '../components/HeroSection/TraningProgram'
import LatestNews from '../components/HeroSection/LatestNews'
import ActiveUsers from './ActiveUser'

const Home = () => {
  return (
    <div>
        <Hero/>
         <Slider/>
         <GrowSection/>
         <Goal/>
         <WhyChoose/>
         <ProjectManagementSection/>
         <Experties/>
         <Counter/>
         <QualityBusiness/>
         <MobileAppBusiness/>
         <SEO/>
         <TraningProgram/>
         <LatestNews/>
         <ActiveUsers/>
    </div>
  )
}

export default Home