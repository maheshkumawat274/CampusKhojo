import React from 'react'
import About from '../../components/about/intex'
import Header from '../../components/header/Header'
import UniversityCards from '../../components/about/Section'
import CollegeInfo from '../../components/about/Section2'

const AboutPage = () => {
  return (
    <>
    <Header/>
     <About/>
     <UniversityCards/>
     <CollegeInfo/>
    </>
  )
}

export default AboutPage