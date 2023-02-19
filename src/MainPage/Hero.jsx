import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Fade, Zoom } from 'react-reveal';
import { useNavigate } from 'react-router-dom';

function Hero() {

  const route = useNavigate();
  const [youtube, setyoutube] = useState("yYKzccguTOw");
  const [open, setopen] = useState(false);
  const [videoId, setvideoId] = useState("a53e4HHnx_s");

  return (
    <>
      {
        <div>
          <div className='flex'>
            <iframe className='video w-[100%] h-[40vh] md:h-[70vh] mx-2 md:w-[960px]'
              title='Youtube player'
              sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
              src={`https://youtube.com/embed/${youtube}?autoplay=0`}>
            </iframe>
          </div>
        </div>
      }
      <div className='flex justify-around absolute top-0' style={{ width: "100%", height: "100vh", backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(https://image.tmdb.org/t/p/original//sBOenwOZGRN5nZZGw4TxwtnfrEf.jpg)' }}>
        <div className='flex justify-around popup-background' style={{ width: "inherit" }}>
          <span className=''>
            <Fade Top duration={3000}>
              <h2 className='text-[#ffffff] w-max font-[700] mt-72 ml-8 md:ml-32 leading-[1px] text-[2rem]  md:text-[4rem]'>Violent Night</h2>
            </Fade>
            <Fade Top duration={4000}>
              <div className='text-[#ffffff] md:w-[650px] text-12 ml-8 md:ml-32 mt-16 font-[700]'>When a team of mercenaries breaks into a wealthy family compound on Christmas Eve, taking everyone inside hostage, the team isn’t prepared for a surprise combatant: Santa Claus is on the grounds, and he’s about to show why this Nick is no saint.</div>
            </Fade>
            <Fade Top duration={5000}>
              <span className='flex ml-4 md:ml-16 w-max'>
                <span onClick={() => { route("/movie/899112/Violent%20Night") }} style={{ transition: "box-shadow .3s ease" }} className='text-[#ffffff] ml-4 md:ml-16 mt-8 font-[600] text-[15.3px] hover:shadow-[0_0_7px_8px_rgba(255,0,0,0.6)] shadow-[0_0_7px_8px_rgba(255,0,0,0.3)] rounded-[3px] border-2 border-[#ff0000] cursor-pointer px-6 p-2 h-[40px] bg-[#ff0000]'>
                  Watch Full Movie
                </span>
                <span onClick={() => { setopen(true) }} className='text-[#ffffff] w-max font-[600] text-[15.3px] ml-4 mt-8 rounded-[3px] border-2 border-[#ffffff] hover:bg-[#ffffff] cursor-pointer hover:text-[#ff0000] px-6 p-2 h-[40px]'>
                  Watch trailer
                </span>
              </span>
            </Fade>
          </span>
          <div className='hidden lg:block ml-16 mt-40 h-[130px] w-[435px]'>
            <Zoom duration={1000}>
              <img src="https://image.tmdb.org/t/p/w500//1XSYOP0JjjyMz1irihvWywro82r.jpg" width={300} height={300} alt="Image" />
            </Zoom>
          </div>
        </div>
      </div>


    { open && 
    <Fade Top>
      <div className="popup-background">
        <div
          id="popup-modal"
          tabIndex="100"
          className=" overflow-y-auto absolute mt-[-354px] md:mt-[-500px] md:ml-[250px] w-[379px] md:w-[600px] h-[600px] overflow-x-hidden fixed tab:left-[30%] desktop:left-[37%] mobile:left-[10%] mobile:top-[0%] mobile:right-[0%] z-[100] md:inset-0"
          >
          <div className="relative p-4 ">
            <div className="relative bg-[#000000] rounded-lg shadow dark:bg-gray-700">
              <div className=" ">
                <p className="font-[500] text-[24px] mt-8 bg-[#000000] ml-8 w-[300px] cursor-pointer pl-[80%] md:pl-[90%] text-end text-[#ffffff]" onClick={()=>{setopen(false)}}>
                  x
                </p>
              
                <div className='flex'>
                        <iframe className='video w-[100%] h-[40vh] md:h-[70vh] mx-2 md:w-[960px]'
                            title='Youtube player'
                            sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                            src={`https://youtube.com/embed/${videoId}?autoplay=0`}>
                        </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
    }
    </>
  )
}

export default Hero