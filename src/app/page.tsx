"use client"

import React,{useState,useEffect,Fragment} from "react";
import Navbar from "@/components/Navbar";
import TradingWidget from "@/components/TradingWidget";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import GetStartedCard from "@/components/GetStartedCard";
import TrendingCoins from "@/components/TrendingCoins";
import Performance from "@/components/Performance";

import axios from "axios";
import Sentiment from "@/components/Sentiment";

export default function Home() {
  const [bitcoinUsdPrice,setBitcoinUsdPrice]=useState(0);
  const [bitcoinInrPrice,setBitcoinInrPrice]=useState(0);
  const [usd24hChange,setUsd24hChange] = useState(0);
  const [usd24hChangePositive, setUsd24hChangePositive] = useState(false);
  useEffect(()=>{
    const fetchBitcoinData=async ()=>{
      const config={
        method:'get',
        url:'https://api.coingecko.com/api/v3/simple/price/',
        params:{ids:'bitcoin',vs_currencies:'inr,usd', include_24hr_change:'true'}
    };
    axios(config)
    .then((result)=>{
      // console.log(result.data.bitcoin);
      setBitcoinUsdPrice(result.data.bitcoin.usd);
      setBitcoinInrPrice(result.data.bitcoin.inr);
      setUsd24hChange(result.data.bitcoin.usd_24h_change);
      if(usd24hChange>0){
        setUsd24hChangePositive(true);
      }
      else{
        setUsd24hChangePositive(false);
      }
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

        <div className="flex md:flex-row flex-col w-full border-2 border-green-400">
          <div className=" flex flex-col border-2 border-yellow-300 w-full">
            <div className=" bg-white md:h-[41rem] rounded-lg pt-6 pl-6 pb-8 border-2 border-blue-500">
              <div className="flex items-center w-full">
                <img src="./bitcoin.png" className="w-9 h-9 mr-2 border-2 border-orange-400" alt="" />
                <p className="text-[#0b1426] font-semibold text-2xl mr-2">Bitcoin</p>
                <p className="text-[#5d667b] font-semibold text-base">BTC</p>
                <button className=" bg-[#808a9d] text-white rounded-lg ml-10 w-20 h-10 text-base font-medium">Rank #1</button>
              </div>
              <div className=" flex flex-col mt-10">
                <div className="flex items-center">
                  <p className=" font-semibold text-3xl text-[#0b1426]">$ {bitcoinUsdPrice}</p>
                  <div className={`flex h-7 items-center w-fit rounded font-medium ml-8 p-2 text-base ${usd24hChangePositive?'bg-[#ebf9f4] text-[#14b079]' :'bg-[#EE68551B] text-[#e96975]'}`}>

                    <ArrowDropUpIcon sx={usd24hChangePositive?{display:'block'}:{display:'none'}} />
                    <ArrowDropDownIcon sx={usd24hChangePositive?{display:'none'}:{display:'block'}}/>
                    <p>{usd24hChange.toFixed(2)}%</p>
                  </div>
                  <div className=" font-medium text-sm ml-3 text-[#768396]">(24H)</div>
                </div>
                <p className="text-[#0b1426] text-base font-medium leading-7">&#8377; {bitcoinInrPrice}</p>
              </div>
              <hr className="bg-[#dee1e6] mr-7 my-6"/>
              <div className="flex relative items-center">
                <div className="flex w-fit">
                  <p className=" text-base font-semibold">Bitcoin Price Chart(USD)</p>
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
            <div className="flex mt-5 space-x-6 overflow-x-auto border-b-[1px] border-[#d3e0e6] ">
              <button className=" text-[#3e424a] text-base font-medium hover:text-[#0141cf] hover:underline underline-offset-[0.25rem] decoration-2 flex-shrink-0">Overview</button>
              <button className=" text-[#3e424a] text-base font-medium hover:text-[#0141cf] hover:underline underline-offset-[0.25rem] decoration-2 flex-shrink-0">Fundamentals</button>
              <button className=" text-[#3e424a] text-base font-medium hover:text-[#0141cf] hover:underline underline-offset-[0.25rem] decoration-2 flex-shrink-0">News Insights</button>
              <button className=" text-[#3e424a] text-base font-medium hover:text-[#0141cf] hover:underline underline-offset-[0.25rem] decoration-2 flex-shrink-0">Sentiments</button>
              <button className=" text-[#3e424a] text-base font-medium hover:text-[#0141cf] hover:underline underline-offset-[0.25rem] decoration-2 flex-shrink-0">Team</button>
              <button className=" text-[#3e424a] text-base font-medium hover:text-[#0141cf] hover:underline underline-offset-[0.25rem] decoration-2 flex-shrink-0">Technicals</button>
              <button className=" text-[#3e424a] text-base font-medium hover:text-[#0141cf] hover:underline underline-offset-[0.25rem] decoration-2 flex-shrink-0">Tokenomics</button>
            </div>
            <Performance/>
            <Sentiment/>
            <div className="bg-white md:h-[33.7rem] mt-5 rounded-lg">
            </div>
            <div className="bg-white md:h-[48.5rem] mt-5 rounded-lg">
            </div>
          </div>
          <div className="flex flex-col ml-5 mr-14 w-fit border-2 border-gray-600">
            <GetStartedCard/>
            <TrendingCoins/>
          </div>
        </div>
      </div>
    </div>
  );
}
