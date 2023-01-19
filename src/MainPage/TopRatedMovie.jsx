import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function TopRatedMovie() {
    const [data, setdata] = useState(0);
    const route = useNavigate();
  
    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=c8b147e9fe4390650885295607b0a593&page=1`)
        .then((response) => { setdata(response.data.results) })
        .catch((error) => console.error(error))
    }, [])

    console.log(data)

  return (
    <div className='mt-8'>
    <span className='ml-8 mr-4 flex justify-between'>
        <div className='text-[#ffffff] text-[20px] font-[600]'>Top Rated Movie</div>
        <span className='text-[#ffffff] font-[600] text-[15px] ml-4 rounded-[3px] border-2 border-[#ffffff] hover:bg-[#ffffff] cursor-pointer hover:text-[#ff0000] p-1 h-[30px]' onClick={()=>{route("/movie")}}>
            View more
        </span>
    </span>
    <span className='mx-8 mt-4 flex w-[97%] overflow-scroll'>
        {data && data.length && data.map((data1)=>
            <img key={data1.poster_path} onClick={() => { route("/movie/899112/Violent%20Night") }} src={"https://image.tmdb.org/t/p/w500/"+data1.poster_path} alt="" style={{height:"256px"}} className="ml-2 cursor-pointer"/>
        )}
    </span>
    </div>
  )
}

export default TopRatedMovie