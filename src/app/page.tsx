"use client"

import React,{useState,useEffect,Fragment} from "react";
import Navbar from "@/components/Navbar";
import TradingWidget from "@/components/TradingWidget";

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import axios from "axios";

export default function Home() {
  useEffect(()=>{
    const fetchBitcoinData= ()=>{
      const config={
        method:'get',
        url:'https://api.coingecko.com/api/v3/simple/price/',
        params:{ids:'bitcoin',vs_currencies:'inr,usd', include_24hr_change:'true'}
    };
    axios(config)
    .then((result)=>{
      console.log(result);
      
    })
    .catch((error)=>{console.log("Error occurred");});
    }
    fetchBitcoinData();
  },[]);
  return (
    <div className="flex flex-col relative min-h-screen h-fit overflow-y-auto bg-[#eff2f5]">
      <Navbar/>
      <div className="flex flex-col ml-14">
        <div className="flex my-[1.0625rem] pb-">
          <p className="text-[#3e5765]">Cryptocurrencies </p>
          <KeyboardDoubleArrowRightIcon sx={{color:'rgba(62, 87, 101, 1)'}} />
          <p className="text-[#0f1629] font-medium"> Bitcoin</p>
        </div>

        <div className="flex">
          <div className=" flex flex-col">
            <div className=" bg-white md:h-[44.4rem] md:w-[55rem] rounded-lg">
              <div className="flex items-center">
                <img src="./bitcoin.png" className="w-9 h-9 mr-2" alt="" />
                <p className="text-[#0b1426] font-semibold text-2xl mr-2">Bitcoin</p>
                <p className="text-[#5d667b] font-semibold text-base">BTC</p>
              </div>
              <div className="flex ">
                <div>
                  <p>Bitcoin Price Chart(USD)</p>
                </div>
                <div className="flex justify-self-end">
                  <button className=" text-[#5d667b] font-medium text-xs">1H</button>
                  <button className=" text-[#5d667b] font-medium text-xs">24H</button>
                  <button className=" text-[#5d667b] font-medium text-xs">7D</button>
                  <button className=" text-[#5d667b] font-medium text-xs">1M</button>
                  <button className=" text-[#5d667b] font-medium text-xs">3M</button>
                  <button className=" text-[#5d667b] font-medium text-xs">6M</button>
                  <button className=" text-[#5d667b] font-medium text-xs">1Y</button>
                  <button className=" text-[#5d667b] font-medium text-xs">ALL</button>
                </div>
              </div>
              <TradingWidget/>
            </div>
            <div className="bg-white md:h-[34.75rem] md:w-[55rem] mt-5 rounded-lg">
            </div>
            <div className="bg-white md:h-[62.2rem] md:w-[55rem] mt-5 rounded-lg">
            </div>
            <div className="bg-white md:h-[33.7rem] md:w-[55rem] mt-5 rounded-lg">
            </div>
            <div className="bg-white md:h-[48.5rem] md:w-[55rem] mt-5 rounded-lg">
            </div>
          </div>
          <div className="flex flex-col ml-5">
            <div className="w-[26.6rem] h-[32.2rem] bg-[#0052fe] rounded-lg"></div>
            <div className="h-[14rem] w-[26.6rem] bg-white rounded-lg mt-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
