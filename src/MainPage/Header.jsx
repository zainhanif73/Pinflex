import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Img/logo.png";

function Header({ click, setClick }) {
  const router = useNavigate();
  return (
    <div className="flex z-[100] relative justify-between mt-8">
      <span className="flex ml-8 h-30">
        <img
          className="mr-2"
          width={"35px"}
          height={"20px"}
          src={logo}
          alt=""
        />
        <h1
          className="header-logo cursor-pointer"
          onClick={() => {
            router("/");
            setClick(0);
          }}
        >
          Pinflex
        </h1>
      </span>
      <span className="mr-16 hidden sm:flex">
        <h1
          className={
            "text-[#ffffff] ml-4 hover:text-[#ef2c2c] hover:cursor-pointer font-[550] text-[24px] pt-2 ml-2 " +
            (click === 0 ? "border-b-2 border-[#ef2c2c]" : "")
          }
          style={{ fontFamily: "'Montserrat',sans-serif" }}
          onClick={() => {
            setClick(0);
            router("/");
          }}
        >
          Home{" "}
        </h1>
        <h1
          className={
            "text-[#ffffff] pl-0 hover:text-[#ef2c2c] hover:cursor-pointer font-[550] text-[24px] pt-2 ml-4 " +
            (click === 1 ? "border-b-2 border-[#ef2c2c]" : "")
          }
          onClick={() => {
            setClick(1);
            router("/movie");
          }}
        >
          {" "}
          Movie
        </h1>
        <h1
          className={
            "text-[#ffffff] pl-0 hover:text-[#ef2c2c] hover:cursor-pointer font-[550] text-[24px] pt-2 ml-4 " +
            (click === 2 ? "border-b-2 border-[#ef2c2c]" : "")
          }
          onClick={() => {
            setClick(2);
            router("/tv");
          }}
        >
          {" "}
          Tv Shows
        </h1>
      </span>
    </div>
  );
}

export default Header;
