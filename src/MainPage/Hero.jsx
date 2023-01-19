import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Fade, Zoom } from 'react-reveal';
import { useNavigate } from 'react-router-dom';
import TrendingMovie from './TrendingMovie';

function Hero() {

  const route = useNavigate();

  return (
    <>

        <div className='flex justify-around absolute top-0' style={{ width: "100%", height: "100vh", backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(https://image.tmdb.org/t/p/original//sBOenwOZGRN5nZZGw4TxwtnfrEf.jpg)' }}>
          <div className='flex justify-around popup-background' style={{width:"inherit"}}>
            <span className=''>
              <Fade Top duration={3000}>
                <h2 className='text-[#ffffff] font-[700] mt-72 ml-32 leading-[1px] text-[4rem]'>Violent Night</h2>
              </Fade>
              <Fade Top duration={4000}>
                <div className='text-[#ffffff] w-[650px] text-12 ml-32 mt-16 font-[700]'>When a team of mercenaries breaks into a wealthy family compound on Christmas Eve, taking everyone inside hostage, the team isn’t prepared for a surprise combatant: Santa Claus is on the grounds, and he’s about to show why this Nick is no saint.</div>
              </Fade>
              <Fade Top duration={5000}>
                <span className='flex ml-16'>
                  <span onClick={() => { route("/movie/899112/Violent%20Night") }} style={{ transition: "box-shadow .3s ease" }} className='text-[#ffffff] ml-16 mt-8 font-[600] text-[15.3px] hover:shadow-[0_0_7px_8px_rgba(255,0,0,0.6)] shadow-[0_0_7px_8px_rgba(255,0,0,0.3)] rounded-[3px] border-2 border-[#ff0000] cursor-pointer px-6 p-2 h-[40px] bg-[#ff0000]'>
                    Watch Full Movie
                  </span>
                  <span onClick={() => { window.location.href = "https://www.youtube.com/watch?v=yYKzccguTOw&embeds_euri=https%3A%2F%2Fpinflex.xyz%2F&source_ve_path=MjM4NTE&feature=emb_title" }} className='text-[#ffffff] font-[600] text-[15.3px] ml-4 mt-8 rounded-[3px] border-2 border-[#ffffff] hover:bg-[#ffffff] cursor-pointer hover:text-[#ff0000] px-6 p-2 h-[40px]'>
                    Watch trailer
                  </span>
                </span>
              </Fade>
            </span>
            <div className='ml-16 mt-40 h-[130px] w-[435px]'>
              <Zoom duration={1000}>
                <img src="https://image.tmdb.org/t/p/w500//1XSYOP0JjjyMz1irihvWywro82r.jpg" width={300} height={300} alt="Image" />
              </Zoom>
            </div>
          </div>
        </div>
    </>
  )
}

export default Hero