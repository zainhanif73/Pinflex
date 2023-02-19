import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function TopRatedShows() {
    const [data, setdata] = useState(0);
    const route = useNavigate();
  
    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=c8b147e9fe4390650885295607b0a593&page=1`)
        .then((response) => { setdata(response.data.results) })
        .catch((error) => console.error(error))
    }, [])

  
  return (
    <div className='mt-8'>
    <span className='ml-8 mr-4 flex justify-between'>
      <div className='text-[#ffffff] text-[20px] font-[600]'>Top Rated Shows</div>
      <span className='text-[#ffffff] font-[400] px-2 text-[15px] ml-4 rounded-[3px] border-2 border-[#ffffff] hover:bg-[#ffffff] cursor-pointer hover:text-[#ff0000] p-1 h-[30px]' onClick={() => { route("/movie") }}>
        View more
      </span>
    </span>
      <span className='mt-4 mx-8 flex w-[auto] flex overflow-scroll'>
      <Swiper
          modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          breakpoints={{
            320: {
              spaceBetween:0,
              slidesPerView: 1.6,
            },
            479: {
              spaceBetween:0,
              slidesPerView: 2.3,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            970: {
              slidesPerView: 5,
            },
            1210: {
              slidesPerView: 6.6,
            },
          }}        
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: false,
            disableOnInteraction: false
           }}
           
          loop
          //onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
          >
        {data && data.length && data.map((data1,index) => (
          <SwiperSlide>
              <div key={data1.poster_path+""+index} className=" w-[175px] ml-2 cursor-pointer">
                <div className='max-w-[400px] hover:grayscale-[70%] transition ease-in-out delay-150'>
                  <img onClick={() => { route(`/tv/${data1.id}/${data1.name}`) }} src={"https://image.tmdb.org/t/p/w500/" + data1.poster_path} alt="" className='max-w-[400px]' style={{ height: "256px" }} />
                </div>
              </div>
            </SwiperSlide>
        ))}
        </Swiper>
      </span>
  </div>
  )
}

export default TopRatedShows