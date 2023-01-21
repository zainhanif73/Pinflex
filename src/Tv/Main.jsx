import React, { useState } from 'react'
import Header from '../MainPage/Header'
import Hero from "./Hero"
import Footer from "../MainPage/Footer"
import Similar from "./Similar"
import { useEffect } from 'react'

function Main() {
  var [id,setid] = useState(window.location.pathname.split('/').at(-2))

  useEffect(()=>{
    setid(window.location.pathname.split('/').at(-2))
  },[])

  return (
    <>
    <Header/>
    <Hero id={id} setid={setid}/>
    <Similar id={id} setid={setid}/>
    <Footer/>
    </>
  )
}

export default Main