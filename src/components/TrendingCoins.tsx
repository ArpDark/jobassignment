"use client"

import React,{useEffect} from "react";
import axios from "axios";

export default function Trending(){
    useEffect(()=>{
        const fetchTrendingCoins=async ()=>{
            const config={
              method:'get',
              url:'https://api.coingecko.com/api/v3/search/trending',
          };
          axios(config)
          .then((result)=>{
            console.log(result);
            
          })
          .catch((error)=>{console.log("Error occurred");});
          }
        fetchTrendingCoins();
    },[]);
    return(
        <div className=" flex flex-col h-[14rem] bg-white rounded-lg mt-5 p-5">
            <p className="text-[#0f1629] font-semibold text-2xl">Trending Coins (24h)</p>
            <div className="flex flex-col">

            </div>
        </div>
    );
}