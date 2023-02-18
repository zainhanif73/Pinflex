import React from 'react'

function SearchFiler({ input, setInput, search, setSearch, region, setRegion, year, setYear }) {
     return (
        <>
            <div className='md:flex md:flex-wrap mt-4'>
                <div className='ml-4 md:ml-16 w-[300px] md:w-[400px] flex ' >
                    <input className='border-none focus:ring-0 !outline-none rounded-l-[10px] w-full h-12 pl-4' placeholder='Search any Season' type="text" name="" id="" onChange={(e) => { setInput(e.target.value) }} />
                    <button className='bg-[#FF0000] text-[13px] h-12 font-[500] rounded-r-[10px] px-4 text-white' onClick={() => setSearch(true)}>Search</button>
                </div>
                <div className='mt-2 md:mt-0 ml-4'>
                    <span>
                        <select className='focus:ring-0 !outline-none hover:bg-[#ffffff] hover:text-[#000000] p-4 bg-[#0F0F0F] cursor-pointer text-[#ffffff] h-12 text-[12px] font-[500] border rounded-[10px]' name="" id=""
                        >
                            <option value="Action" >Action</option>
                            <option value="Adventure" >Adventure</option>
                            <option value="Animation" >Animation</option>
                            <option value="Comedy" >Comedy</option>
                            <option value="Documentary" >Documentary</option>
                            <option value="Drama" >Drama</option>
                            <option value="Family" >Family</option>
                            <option value="Fantasy" >Fantasy</option>
                            <option value="History" >History</option>
                            <option value="Horror" >Horror</option>
                            <option value="Music" >Music</option>
                            <option value="Mystery" >Mystery</option>
                            <option value="Romance" >Romance</option>
                            <option value="Science Fiction" >Science Fiction</option>
                            <option value="Tv Movie" >Tv Movie</option>
                            <option value="Thriller" >Thriller</option>
                            <option value="War" >War</option>
                            <option value="Western" >Western</option>
                        </select>
                    </span>
                    <span className='ml-4 mr-4'>
                        <select className='focus:ring-0 !outline-none hover:bg-[#ffffff] hover:text-[#000000] p-4 bg-[#0F0F0F] cursor-pointer text-[#ffffff] h-12 text-[12px] font-[500] border rounded-[10px]' name="" id=""
                            onChange={(e) => { console.log(e.target.value); setYear(e.target.value) }}>
                            <option value="1971" >1971</option>
                            <option value="1972" >1972</option>
                            <option value="1973" >1973</option>
                            <option value="1974" >1974</option>
                            <option value="1975" >1975</option>
                            <option value="1976" >1976</option>
                            <option value="1977" >1977</option>
                            <option value="1978" >1978</option>
                            <option value="1979" >1979</option>
                            <option value="1980" >1980</option>
                            <option value="1981" >1981</option>
                            <option value="1982" >1982</option>
                            <option value="1983" >1983</option>
                            <option value="1984" >1984</option>
                            <option value="1985" >1985</option>
                            <option value="1986" >1986</option>
                            <option value="1987" >1987</option>
                            <option value="1988" >1988</option>
                            <option value="1989" >1989</option>
                            <option value="1990" >1990</option>
                            <option value="1991" >1991</option>
                            <option value="1992" >1992</option>
                            <option value="1993" >1993</option>
                            <option value="1994" >1994</option>
                            <option value="1995" >1995</option>
                            <option value="1996" >1996</option>
                            <option value="1997" >1997</option>
                            <option value="1998" >1998</option>
                            <option value="1999" >1999</option>
                            <option value="2000" >2000</option>
                            <option value="2001" >2001</option>
                            <option value="2002" >2002</option>
                            <option value="2003" >2003</option>
                            <option value="2004" >2004</option>
                            <option value="2005" >2005</option>
                            <option value="2006" >2006</option>
                            <option value="2007" >2007</option>
                            <option value="2008" >2008</option>
                            <option value="2009" >2009</option>
                            <option value="2010" >2010</option>
                            <option value="2011" >2011</option>
                            <option value="2012" >2012</option>
                            <option value="2013" >2013</option>
                            <option value="2014" >2014</option>
                            <option value="2015" >2015</option>
                            <option value="2016" >2016</option>
                            <option value="2017" >2017</option>
                            <option value="2018" >2018</option>
                            <option value="2019" >2019</option>
                            <option value="2020" >2020</option>
                            <option value="2021" >2021</option>
                            <option value="2022" >2022</option>
                            <option value="2023" >2023</option>
                        </select>
                    </span>
                    <span className='ml-0 md:ml-4'>
                        <select className='w-[200px] mt-4 md:mt-0 focus:ring-0 !outline-none hover:bg-[#ffffff] hover:text-[#000000] p-4 bg-[#0F0F0F] cursor-pointer text-[#ffffff] h-12 text-[12px] font-[500] border rounded-[10px]' name="" id=""
                            onChange={(e) => { setRegion(e.target.value) }}>
                            <option value="Andorra" >Andorra</option>
                            <option value="United Arab Emirates" >United Arab Emirates</option>
                            <option value="Afghanistan" >Afghanistan</option>
                            <option value="Antigua and Barbuda" >Antigua and Barbuda</option>
                            <option value="Anguilla" >Anguilla</option>
                            <option value="Albania" >Albania</option>
                            <option value="Armenia" >Armenia</option>
                            <option value="Netherlands Antilles" >Netherlands Antilles</option>
                            <option value="Angola" >Angola</option>
                            <option value="Argentina" >Argentina</option>
                            <option value="American Samoa" >American Samoa</option>
                            <option value="Australia" >Australia</option>
                            <option value="Aruba" >Aruba</option>
                            <option value="Azerbaijan" >Azerbaijan</option>
                            <option value="Bosnia and Herzegovina" >Bosnia and Herzegovina</option>
                            <option value="Barbados" >Barbados</option>
                            <option value="Bangladesh" >Bangladesh</option>
                            <option value="Belgium" >Belgium</option>
                            <option value="Burkina Faso" >Burkina Faso</option>
                            <option value="Bulgaria" >Bulgaria</option>
                            <option value="Bahrain" >Bahrain</option>
                            <option value="Burundi" >Burundi</option>
                            <option value="Benin" >Benin</option>
                            <option value="Bermuda" >Bermuda</option>
                            <option value="Brunei Darussalam" >Brunei Darussalam</option>
                            <option value="Bolivia" >Bolivia</option>
                            <option value="Brazil" >Brazil</option>
                            <option value="Bahamas" >Bahamas</option>
                            <option value="Bhutan" >Bhutan</option>
                            <option value="Burma" >Burma</option>
                            <option value="South Georgia and the south sandwich islands">South Georgia and the south sandwich islands</option>
                        </select>
                    </span>
                    <span className='hidden md:contents'>
                        <span style={{ transition: "box-shadow .3s ease" }} className='w-fit align-center px-4 py-4 rounded-[15px] ml-4 text-[#ffffff] text-[10px] font-[400] text-[15.3px] hover:shadow-[0_0_7px_8px_rgba(255,0,0,0.6)] shadow-[0_0_7px_8px_rgba(255,0,0,0.3)] rounded-[3px] border-2 border-[#ff0000] cursor-pointer h-[40px] bg-[#ff0000]'
                            onClick={() => setSearch(true)}>
                            Apply Filter
                        </span>
                    </span>
                    <span className='mt-4 contents md:hidden'>
                        <span style={{ transition: "box-shadow .3s ease" }} className='w-fit align-center px-4 py-4 rounded-[15px] ml-4 text-[#ffffff] text-[10px] font-[400] text-[15.3px] hover:shadow-[0_0_7px_8px_rgba(255,0,0,0.6)] shadow-[0_0_7px_8px_rgba(255,0,0,0.3)] rounded-[3px] border-2 border-[#ff0000] cursor-pointer h-[40px] bg-[#ff0000]'
                            onClick={() => setSearch(true)}>
                            Apply Filter
                        </span>
                    </span>
                </div>
            </div>
        </>
    )
}

export default SearchFiler
