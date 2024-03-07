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
import Sentiment from "@/components/Sentiment";
import AboutBitcoin from "@/components/AboutBitcoin";
import Tokenomics from "@/components/Tokenomics";
import axios from "axios";
import Team from "@/components/Team";
import Recommendation from "@/components/Recommendation";

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
    <div className="flex flex-col max:w-screen h-fit overflow-y-auto bg-[#eff2f5]">
      <Navbar/>
      <div className="flex flex-col lg:w-fit w-11/12 lg:ml-14 ml-4">

        <div className="flex my-[1.0625rem] ">
          <p className="text-[#3e5765]">Cryptocurrencies </p>
          <KeyboardDoubleArrowRightIcon sx={{color:'rgba(62, 87, 101, 1)'}} />
          <p className="text-[#0f1629] font-medium"> Bitcoin</p>
        </div>

        <div className="flex lg:flex-row flex-col w-full ">
          <div className=" flex flex-col w-full ">
            <div className=" bg-white lg:border-none  h-fit lg:w-full lg:h-[44rem] rounded-lg pt-6 lg:pl-6 pl-1 pb-8 border-[1px] border-[#DEE1E6]">
              <div className="flex items-center w-fit">
                <img src="./bitcoin.png" className="w-9 h-9 mr-2" alt="" />
                <p className="text-[#0b1426] font-semibold text-2xl mr-2">Bitcoin</p>
                <p className="text-[#5d667b] font-semibold text-base">BTC</p>
                <button className=" bg-[#808a9d] text-white rounded-lg ml-10 w-20 h-10 text-base font-medium">Rank #1</button>
              </div>
              <div className=" flex flex-col mt-10  w-fit">
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
              <hr className="bg-[#dee1e6] lg:mr-7 w-full my-6"/>
              <div className="flex lg:relative flex-col lg:flex-row lg:items-center lg:justify-normal justify-center w-fit lg:w-full ">
                <div className="flex w-fit">
                  <p className=" text-base font-semibold">Bitcoin Price Chart(USD)</p>
                </div>
                <div className="flex lg:absolute lg:right-0 space-x-5 pr-5 ">
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
            <AboutBitcoin/>
            <Tokenomics/>
            <Team/>
            <div className="lg:hidden">
              <Recommendation/>
            </div>
          </div>
          <div className="flex flex-col lg:ml-5 lg:mr-14 lg:w-fit w-full">
            <GetStartedCard/>
            <TrendingCoins/>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <Recommendation/>
      </div>
    </div>
  );
}
