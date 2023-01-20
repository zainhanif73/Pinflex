import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function TrendingMovie() {
    const [data, setdata] = useState(0);
    const route = useNavigate();
  
    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c8b147e9fe4390650885295607b0a593&page=1`)
        .then((response) => { setdata(response.data.results) })
        .catch((error) => console.error(error))
    }, [])

    

  return (
    <div className='mt-[90vh]'>
      <span className='ml-8 mr-4 flex justify-between'>
        <div className='text-[#ffffff] text-[20px] font-[600]'>Trending Movie</div>
        <span className='text-[#ffffff] font-[400] px-2 text-[15px] ml-4 rounded-[3px] border-2 border-[#ffffff] hover:bg-[#ffffff] cursor-pointer hover:text-[#ff0000] p-1 h-[30px]' onClick={() => { route("/movie") }}>
          View more
        </span>
      </span>

      <span className='mx-8 mt-4 flex overflow-scroll'>
        {data && data.length && data.map((data1) => {
          return (
            <div key={data1.poster_path} className=" w-[175px] ml-2 cursor-pointer">
              <div >
                <img onClick={() => { route(`/movie/${data1.id}/${data1.title}`) }} src={"https://image.tmdb.org/t/p/w500/" + data1.poster_path} alt="" className='max-w-[400px]' style={{ height: "256px" }} />
              </div>
            </div>
          )
        }
        )}
      </span>
    </div>
  )
}

export default TrendingMovie