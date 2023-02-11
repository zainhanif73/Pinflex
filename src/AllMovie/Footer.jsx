import React from 'react'
import { useNavigate } from 'react-router-dom';
import FooterImg from "../Img/footer.jpg"
import logo from "../Img/logo.png"

function Footer() {
    const router = useNavigate();

    return (
        <div className="flex items-center justify-center mt-16 mb-24" style={{ width: "100%", height: "40vh", backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundImage: `url(${FooterImg})` }}>
            <span className='flex'>
                <img width={50} height={50} src={logo} alt="" />
                <h1 className='text-[#ffffff] hover:text-[#ef2c2c] hover:cursor-pointer font-[600] text-3xl pt-2 ml-2' onClick={() => { router("/") }}>Pinflex</h1>
            </span>
        </div>
    )
}

export default Footer