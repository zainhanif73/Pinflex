import React from 'react'
import Header from '../MainPage/Header'
import Hero from "../Movie/Hero"
import Footer from "../MainPage/Footer"
import Similar from "./Similar"

function Main() {
  const id = window.location.pathname.split('/').at(-2)

  return (
    <>
    <Header/>
    <Hero id={id} />
    <Similar id={id}/>
    <Footer/>
    </>
  )
}

export default Main