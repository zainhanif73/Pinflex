import React, { useState } from 'react'
import Header from '../MainPage/Header'
import Hero from "../Movie/Hero"
import Footer from "../MainPage/Footer"
import Similar from "./Similar"
import { useEffect } from 'react'

function Main() {
  var [id,setid] = useState(window.location.pathname.split('/').at(-2))
  const [click , setClick] = useState(0)

  useEffect(()=>{
    setid(window.location.pathname.split('/').at(-2))
  },[])

  return (
    <>
    <Header click={click} setClick={setClick}/>
    <Hero id={id} setid={setid}/>
    <div className='mt-8'>
    <Similar id={id} setid={setid}/>
    </div>
    <Footer/>
    </>
  )
}

export default Main