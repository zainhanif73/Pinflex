import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom'
import logo from "../Img/logo.png"

function Header() {
    const router = useNavigate();
    const [click, setClick] = useState(0);
    return (
        <div className='flex z-[100] relative justify-between mt-8'>
            <span className='flex ml-8'>
                <img width={50} height={50} src={logo} alt="" />
                <h1 className='text-[#ffffff] hover:text-[#ef2c2c] hover:cursor-pointer font-[600] text-3xl pt-2 ml-2' onClick={() => { router("/") }}>Pinflex</h1>
            </span>
            <span className='flex mr-16'>
                <h1 className={'text-[#ffffff] ml-4 hover:text-[#ef2c2c] hover:cursor-pointer font-[600] text-[24px] pt-2 ml-2 ' + (click === 0 ? "border-b-2 border-[#ef2c2c]" : "")} onClick={() => setClick(0)}>Home </h1>
                <h1 className={'text-[#ffffff] pl-4 hover:text-[#ef2c2c] hover:cursor-pointer font-[600] text-[24px] pt-2 ml-2 ' + (click === 1 ? "border-b-2 border-[#ef2c2c]" : "")} onClick={() => setClick(1)}> Movie</h1>
                <h1 className={'text-[#ffffff] pl-4 hover:text-[#ef2c2c] hover:cursor-pointer font-[600] text-[24px] pt-2 ml-2 ' + (click === 2 ? "border-b-2 border-[#ef2c2c]" : "")} onClick={() => setClick(2)}> Tv Shows</h1>
            </span>
        </div>
    )
}

export default Header