"use client"

import React,{useState,useEffect,Fragment} from "react";
import Navbar from "@/components/Navbar";
import TradingWidget from "@/components/TradingWidget";

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import axios from "axios";

export default function Home() {
  const [bitcoinUsdPrice,setBitcoinUsdPrice]=useState(0);
  const [bitcoinInrPrice,setBitcoinInrPrice]=useState(0);
  useEffect(()=>{
    const fetchBitcoinData=async ()=>{
      const config={
        method:'get',
        url:'https://api.coingecko.com/api/v3/simple/price/',
        params:{ids:'bitcoin',vs_currencies:'inr,usd', include_24hr_change:'true'}
    };
    axios(config)
    .then((result)=>{
      console.log(result.data.bitcoin);
      setBitcoinUsdPrice(result.data.bitcoin.usd);
      setBitcoinInrPrice(result.data.bitcoin.inr);
      
    })
    .catch((error)=>{console.log("Error occurred");});
    }
    fetchBitcoinData();
  },[]);
  return (
    <div className="flex flex-col relative min-h-screen max:w-screen h-fit overflow-y-auto bg-[#eff2f5]">
      <Navbar/>
      <div className="flex flex-col min:w-fit  border-2 border-pink-400 ml-14 ">

        <div className="flex my-[1.0625rem] ">
          <p className="text-[#3e5765]">Cryptocurrencies </p>
          <KeyboardDoubleArrowRightIcon sx={{color:'rgba(62, 87, 101, 1)'}} />
          <p className="text-[#0f1629] font-medium"> Bitcoin</p>
        </div>

        <div className="flex w-full border-2 border-green-400">
          <div className=" flex flex-col border-2 border-yellow-300 w-full">
            <div className=" bg-white md:h-[41rem] rounded-lg pt-6 pl-6 pb-8 border-2 border-blue-500">
              <div className="flex items-center w-full">
                <img src="./bitcoin.png" className="w-9 h-9 mr-2 border-2 border-orange-400" alt="" />
                <p className="text-[#0b1426] font-semibold text-2xl mr-2">Bitcoin</p>
                <p className="text-[#5d667b] font-semibold text-base">BTC</p>
                <button className=" bg-[#808a9d] text-white rounded-lg ml-10 w-20 h-10 text-base font-medium">Rank #1</button>
              </div>
              <div className=" flex flex-col">
                <div className="flex">
                  <p className=" font-semibold text-3xl text-[#0b1426]">$ {bitcoinUsdPrice}</p>
                  <div></div>
                  <div></div>
                </div>
                <p className="text-[#0b1426] text-base font-medium">&#8377; {bitcoinInrPrice}</p>
              </div>
              <div className="flex relative items-center">
                <div className="flex w-fit">
                  <p>Bitcoin Price Chart(USD)</p>
                </div>
                <div className="flex absolute right-0 border-2 border-gray-400 space-x-5 pr-5 ">
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
            <div className="mt-5">
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
            </div>
            <div className="bg-white md:h-[34.75rem] mt-5 rounded-lg">
            </div>
            <div className="bg-white md:h-[62.2rem] mt-5 rounded-lg">
            </div>
            <div className="bg-white md:h-[33.7rem] mt-5 rounded-lg">
            </div>
            <div className="bg-white md:h-[48.5rem] mt-5 rounded-lg">
            </div>
          </div>
          <div className="flex flex-col ml-5 mr-14">
            <div className="h-[32.2rem] bg-[#0052fe] rounded-lg px-4 py-8">
              <p className="text-white text-2xl">Get Started with KoinX </p>
              <p className="text-white text-2xl">for FREE</p>
            </div>
            <div className="h-[14rem] bg-white rounded-lg mt-5">
            hello world
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
