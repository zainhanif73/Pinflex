import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Similar({ id, setid }) {
  const [data, setData] = useState();
  const route = useNavigate();

  useEffect(() => {
    setid(window.location.pathname.split("/").at(-2));
  }, [id]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}/similar?api_key=81ab096fe7e14921b2483fbc2b423c52`
      )
      .then((res) => {
        setData(res?.data?.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <>
      <div>
        <span className="ml-4 md:ml-4 mr-4 mt-4 flex justify-between">
          <div className="text-[#ffffff] text-[20px] font-[600]">
            Shows you would like to Watch
          </div>
        </span>

        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          breakpoints={{
            320: {
              spaceBetween: 0,
              slidesPerView: 1.6,
            },
            479: {
              spaceBetween: 0,
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
            1140: {
              slidesPerView: 6.6,
            },
          }}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
          }}
          loop
          //onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
        >
          {data &&
            data.length &&
            data.map((data1) => (
              <SwiperSlide>
                <div
                  key={data1.poster_path}
                  className=" w-[175px] ml-4 cursor-pointer"
                >
                  <div className="border-2 border-[#252a41]">
                    <div className="">
                      <div className=" max-w-[400px] hover:grayscale-[70%] transition ease-in-out delay-150">
                        <img
                          onClick={() => {
                            route(`/tv/${data1.id}/${data1.name}`);
                          }}
                          src={
                            "https://image.tmdb.org/t/p/w500/" +
                            data1.poster_path
                          }
                          alt=""
                          className="max-w-[400px]"
                          style={{ height: "256px" }}
                        />
                      </div>
                    </div>
                    <div
                      className="flex"
                      style={{
                        justifyContent: "start",
                        border: "1px solid #ffff;",
                        borderStyle: "dotted",
                      }}
                    >
                      <div className="year-box">
                        {(data1?.first_air_date + "").split("-")[0]}
                      </div>
                      <div className="year-box ml-8">
                        {parseInt(data1.vote_average).toFixed(1)} ⭐️
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
}

export default Similar;
