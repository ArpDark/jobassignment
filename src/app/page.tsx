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
        <TradingWidget/>
      </div>
    </div>
  );
}
