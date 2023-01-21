import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Similar({ id,setid}) {
  const [data, setData] = useState();
  const route = useNavigate();

  useEffect(()=>{
    setid(window.location.pathname.split('/').at(-2))
  },[id])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=81ab096fe7e14921b2483fbc2b423c52`)
      .then((res) => {
        setData(res?.data?.results);
      })
      .catch((error) => {
        console.error(error)
      })
  }, [id])

  return (
    <>
      <div className='mt-[100vh]'>
        <span className='ml-8 mr-4 flex justify-between'>
          <div className='text-[#ffffff] text-[20px] font-[600]'>Shows you would like to Watch</div>
        </span>

        <span className='mx-8 mt-4 flex overflow-scroll'>
          {data && data.length && data.map((data1) => {
            return (
              <div key={data1.poster_path} className=" w-[175px] mx-2 cursor-pointer">
                <div className='max-w-[400px] hover:grayscale-[70%] transition ease-in-out delay-150'>
                  <img onClick={() => { route(`/tv/${data1.id}/${data1.name}`); setid(data1.id) }} src={"https://image.tmdb.org/t/p/w500/" + data1.poster_path} alt="" className='max-w-[400px]' style={{ height: "256px" }} />
                </div>
              </div>
            )
          }
          )}
        </span>
      </div>
    </>
  )
}

export default Similar