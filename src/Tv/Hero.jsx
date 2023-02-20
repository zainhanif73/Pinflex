import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Fade, Zoom } from 'react-reveal';
import { useNavigate } from 'react-router-dom';

function Hero({ id, setid }) {
    const route = useNavigate();
    const [cast, setCast] = useState();
    var [data, setData] = useState();
    var [imdb, setimdb] = useState("");
    var [season, setSeason] = useState(""); 
    var [episode, setEpisode] = useState([false]); 
    var [playSeason, setPlaySeason] = useState(1);
    var [playEpisode, setPlayEpisode] = useState(1);

    setid(window.location.pathname.split('/').at(-2))

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        axios.get(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=81ab096fe7e14921b2483fbc2b423c52`)
            .then((res) => {
                setCast(res.data.cast)
            })
            .catch((error) => {
                console.error(error.data)
            })

        axios.get(`https://api.themoviedb.org/3/tv/${id}?Expires=Thu%2C%2015%20Apr%202030%2020%3A00%3A00%20GMT&api_key=81ab096fe7e14921b2483fbc2b423c52`)
            .then((res) => {
                setData(res.data);
                setimdb(res.data.id)
                setSeason(res.data.seasons)
            })
            .catch((error) => {
                console.error(error.data)
            })

    }, [id])


    function ShowData(num){
        console.log(num)
        let check = [...episode];
        console.log(check)
        check[num] = check[num]===true?false:true;
        setEpisode(check)
    }

    return (
        <>
            <div className='flex justify-around absolute top-0' style={{ backgroundImage: "linear-gradient(0deg,#0f0f0f,rgba(22,19,19,0))", bottom: "0px", width: "100%", height: "50vh", backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat: 'no-repeat', backgroundImage: `url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})` }}>
                <div className='flex popup-background' style={{ backgroundImage: "linear-gradient(0deg,#0f0f0f,rgba(22,19,19,0))", bottom: "0px", width: "inherit" }}>
                    <div className='ml-8 mt-40 h-[130px] mr-8 hidden md:flex'>
                        <div className='hidden md:flex'>
                            <img className='h-[485px]' src={"https://image.tmdb.org/t/p/w500/" + data?.poster_path} width={300} height={300} alt="Image" />
                        </div>
                    </div>
                    <span className='ml-4'>
                        <div className='text-[#ffffff] font-[700] mt-48 cursor-pointer text-[48px]' style={{ textShadow: "1px 1px 0 #07bccc, 2px 2px 0 #e601c0, 3px 3px 0 #e9019a, 4px 4px 0 #f40468, 5px 5px 0 #482896" }}>{data?.name}</div>
                        <div className='flex flex-wrap mt-4'>
                            {data?.genres && data?.genres?.length && data?.genres?.map((genre) =>
                                <div key={genre.id} className='w-fit mr-2 px-4 py-[3px] text-[12px] text-[#ffffff] bg-[#0f0f0f] border-[1px] border-[#ffffff]'>
                                    {genre.name}
                                </div>
                            )
                            }
                        </div>
                        <p className='text-[#ffffff] md:w-[650px] text-[16px] mt-[27px] font-[400]'>{data?.overview}</p>
                        <span >
                            {
                                cast && cast.length != 0 && <>
                                    <p className='text-[#ffffff] text-[26px] mt-[20px] font-[700]'>Cast</p>
                                    <span className='flex flex-wrap'>
                                        {
                                            cast.map((data, index) => {
                                                return (
                                                    data.profile_path && index < 6 &&
                                                    <div key={data.id} className='mb-[25px] hover:scale-105 transition ease-in-out hover:grayscale-[0%] grayscale-[100%]  delay-150 cursor-pointer pt-[160px] mr-2 w-[103px] h-[107px] rounded-[7px]' style={{ backgroundSize: "cover", backgroundImage: `url("https://image.tmdb.org/t/p/w500/${data.profile_path}")` }}>
                                                        <div className='text-[#ffffff] font-[350] text-[15px]'>{data.name}</div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </span>
                                </>
                            }
                        </span>
                    </span>
                </div>
            </div>

            <div className='mb-[50rem] md:mb-[900px] md:mb-[770px]'>
            </div>
            <div>
                <h2 className='ml-2 text-[1.5rem] text-[#ffffff] font-bold'>Watch Full Movies Below here </h2>
                <span className='flex ml-0 w-max mb-8 absolute'>
                {
                season && season.length && season.map((data1, index)=>{
                    return (
                        <>
                            <div className='absoulte mt-4'>
                            <span style={{ transition: "box-shadow .3s ease" }} className='text-[#ffffff] relative mx-4 mt-4 mb-4 font-[600] text-[15.3px] hover:shadow-[0_0_7px_8px_rgba(255,0,0,0.6)] shadow-[0_0_7px_8px_rgba(255,0,0,0.3)] rounded-[3px] border-2 border-[#ff0000] cursor-pointer px-6 p-2 h-[40px] bg-[#ff0000]'
                                onClick={() => {ShowData(index)}} >
                                Season {index+1} 
                            </span>
                            {data1.episode_count!=0 &&  
                                    <span className={`mt-8 ml-2 h-[400px] overflow-scroll ${episode[index]===true? "block":"hidden"}`}>
                                    {[...Array(data1.episode_count)].map((e, i)=> {
                                        return( 
                                            <p className={`fixed z-10 hover:text-[#ff0000] hover:border-2 text-[#ffffff] relative font-[600] text-[15.3px] rounded-[3px] cursor-pointer px-6 p-2 h-[40px] bg-[#000000] ${i===0?"mt-0":""} `}
                                            onClick={()=>{ setPlayEpisode(i+1); setPlaySeason(index+1);}}> Episode {i+1}</p>
                                        )
                                    })}
                                    </span>
                            }
                            </div>  
                        </>
                    )
                })
                }
              </span>
                <iframe className='mt-[65px]' style={{ backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat: 'no-repeat' }} src={`https://www.2embed.to/embed/tmdb/tv?id=${imdb}&s=${playSeason}&e=${playEpisode}`} width="100%" height="480" ></iframe>
            </div>
        </>

    )
}

export default Hero