import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'

function Hero() {

  const [data, setdata] = useState(0);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c8b147e9fe4390650885295607b0a593&page=1`)
      .then((response) => { setdata(response.data.results) })
      .catch((error) => console.error(error))
  }, [])

  console.log(data)
  return (

    <>
      <div className='flex justify-around absolute top-0' style={{ width: "100%", height: "100%", backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(https://image.tmdb.org/t/p/original//sBOenwOZGRN5nZZGw4TxwtnfrEf.jpg)' }}>
        <div className='flex justify-around popup-background'>
          <span className=''>
            <h2 className='text-[#ffffff] font-[700] mt-72 ml-16 leading-[1px] text-[4rem]'>Violent Night</h2>
            <div className='text-[#ffffff] w-[650px] text-12 ml-16 mt-16 font-[700]'>When a team of mercenaries breaks into a wealthy family compound on Christmas Eve, taking everyone inside hostage, the team isn’t prepared for a surprise combatant: Santa Claus is on the grounds, and he’s about to show why this Nick is no saint.</div>
            <span className='flex'>
              <span style={{transition: "box-shadow .3s ease"}} className='text-[#ffffff] ml-16 mt-8 font-[600] text-[15.3px] hover:scale-100 shadow-[0_0_7px_8px_rgba(255,0,0,0.3)] rounded-[1px] border-2 border-[#4f0a1b] cursor-pointer px-6 p-2 h-[40px] bg-[#ff0000]'>
                Watch Full Movie
              </span>
              <span className='text-[#ffffff] font-[600] text-[15.3px] ml-4 mt-8 rounded-[1px] border-4 border-[#ffffff] hover:bg-[#ffffff] cursor-pointer hover:text-[#ff0000] px-4 p-2 h-[40px]'>
                Watch trailer
              </span>
            </span>
          </span>
          <div className=' mr-64 ml-16 mt-40 h-[1300px] w-[550px]'>
            <img src="https://image.tmdb.org/t/p/w500//1XSYOP0JjjyMz1irihvWywro82r.jpg" width={300} height={300} alt="Image" />
          </div>
        </div>
      </div>

      {/* <Carousel
        showThumbs={true}
        showStatus={false}
        infiniteLoop
        emulateTouch
        autoPlay
        useKeyboardArrows
        transitionTime={1000}
      >
      </Carousel > */}
    </>
  )
}

export default Hero