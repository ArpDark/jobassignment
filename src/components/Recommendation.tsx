"use client"

import React,{useState,useEffect} from "react";
import axios from "axios";

interface TrendingCoin {
    item: {
      small: string;
      name: string;
      symbol:string;
      data: {
        sparkline:string;
        price:number;
        price_change_percentage_24h: {
          usd: number;
        };
      };
    };
  }


export default function Recommendation(){

    const [trendingCoins,setTrendingCoins]=useState<TrendingCoin[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchTrendingCoins=()=>{
            const config={
              method:'get',
              url:'https://api.coingecko.com/api/v3/search/trending/',
          };
          axios(config)
          .then((result)=>{
            setTrendingCoins(result.data.coins);
            setLoading(false);
          })
          .catch((error)=>{
            console.log("Error occurred");
            setLoading(false);
            });
        }
        fetchTrendingCoins();
    },[]);

    console.log(trendingCoins);
    

    return (
        <div className="flex flex-col bg-white h-fit lg:mt-16 mt-8 lg:rounded-none rounded-lg p-6 space-y-6">
            <p className=" text-[#202020] font-semibold text-2xl">You May Also Like</p>
            <div className=" flex mt-5 pb-7 overflow-x-auto ">
                {trendingCoins.map((coin)=>(
                    <div className="flex flex-col items-center p-4 flex-shrink-0 border-[1px] border-[#E3E3E3] rounded-lg mr-2">
                        <div className="flex w-full">
                            <img src={coin.item.small} className=" h-6 w-6" alt="" />
                            <p className="text-base font-normal ml-2">{coin.item.symbol}</p>
                            <div className={`flex items-center px-1 w-fit rounded font-medium ml-1 text-base ${coin.item.data.price_change_percentage_24h.usd>0?'bg-[#ebf9f4] text-[#32BE88]' :'bg-[#EE68551B] text-[#E96975]'}`}>
                                <p className={`${coin.item.data.price_change_percentage_24h.usd>0?'':'hidden'}`}>+</p>
                                {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                            </div>
                        </div>
                        <p className=" mt-3 w-full font-medium text-xl">{coin.item.data.price}</p>
                        <img src={coin.item.data.sparkline} className=" w-32" alt="" />
                    </div>
                ))}
            </div>
            <p className=" text-[#202020] font-semibold text-2xl">Trending Coins</p>
            <div className=" flex mt-5 pb-7 overflow-x-auto ">
                {trendingCoins.map((coin)=>(
                    <div className="flex flex-col items-center p-4 flex-shrink-0 border-[1px] border-[#E3E3E3] rounded-lg mr-2">
                        <div className="flex w-full">
                            <img src={coin.item.small} className=" h-6 w-6" alt="" />
                            <p className="text-base font-normal ml-2">{coin.item.symbol}</p>
                            <div className={`flex items-center px-1 w-fit rounded font-medium ml-1 text-base ${coin.item.data.price_change_percentage_24h.usd>0?'bg-[#ebf9f4] text-[#32BE88]' :'bg-[#EE68551B] text-[#E96975]'}`}>
                                <p className={`${coin.item.data.price_change_percentage_24h.usd>0?'':'hidden'}`}>+</p>
                                {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                            </div>
                        </div>
                        <p className=" mt-3 w-full font-medium text-xl">{coin.item.data.price}</p>
                        <img src={coin.item.data.sparkline} className=" w-32" alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
}