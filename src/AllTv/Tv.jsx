import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Tv({input, setInput, search, setSearch, region, year}) {
    var [data, setData] = useState([]);
    const [item, setItem] = useState([]);
    const [page, setPage] = useState(1);
    const route = useNavigate();

    useEffect(() => {
        if (search && input!="") {
            console.log("inside")
            setData([]);
            data = []
            setPage(1);
        }
        if ((search && input!="") || (input!="" && page!==1)) {
            axios.get(`https://api.themoviedb.org/3/search/tv?api_key=c8b147e9fe4390650885295607b0a593&include_adult=false&page=${page}&query=${input}&region=${region}&year=${parseInt(year)}`)
                .then((res) => { setData([...data, ...res.data.results]) })
                .catch((error) => { console.error(error) });
            setSearch(false);
        }
    }, [search, page])

    useEffect(() => {
        if (page === 1) {
            console.log(page)
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
        if (!search && input === ""){
            axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=c8b147e9fe4390650885295607b0a593&include_adult=false&page=${page}`)
            .then((data1) => { setData([...data, ...data1.data.results]) })
            .catch((error) => { console.error(error); })
        }
    }, [page])


    return (
        <>
            <span className='justify-center mt-6 mb-8 flex flex-wrap'>
                {data && data.length && data.map((data1,index) => {
                    return (
                        <div key={data1.poster_path+""+index} className="w-[175px] mt-8 mx-2 cursor-pointer">
                            <div className='max-w-[400px] hover:grayscale-[70%] transition ease-in-out delay-150'>
                                <img onClick={() => { route(`/tv/${data1.id}/${data1.name}`); }} src={"https://image.tmdb.org/t/p/w500/" + data1.poster_path} alt="" className='max-w-[400px]' style={{ height: "256px" }} />
                            </div>
                        </div>
                    )
                }
                )}
            </span>
            <span className='text-[#ffffff] font-[400] px-2 mt-4 text-[15px] ml-8 rounded-[3px] border-2 border-[#ffffff] hover:bg-[#ffffff] cursor-pointer hover:text-[#ff0000] p-1 h-[30px]'
                onClick={() => { setPage(page + 1) }}>
                Load more
            </span>
        </>
    )
}

export default Tv


