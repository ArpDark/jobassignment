"use client"

import React,{useState, useEffect} from "react";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import axios from "axios";


export default function TrendingCoins(){
    const [trendingCoins,setTrendingCoins]=useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchTrendingCoins=()=>{
            const config={
              method:'get',
              url:'https://api.coingecko.com/api/v3/search/trending/',
          };
          axios(config)
          .then((result)=>{
            // console.log(result.data.coins);
            // console.log(typeof(result.data.coins));
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

    // console.log(typeof(trendingCoins[0]));
    // console.log(trendingCoins[0]);
    return(
        <div className=" flex flex-col h-[14rem] bg-white rounded-lg mt-5 p-5">
            <p className="text-[#0f1629] font-semibold text-2xl">Trending Coins (24h)</p>
            {trendingCoins.length<=0?  (<p>Loading...</p>):(
                <div className="flex flex-col mt-6 space-y-5">
                    <div className="flex relative w-full items-center">
                        <img className=" h-6 w-6" src={trendingCoins[0].item.small} alt="" />
                        <p className=" font-medium text-base text-[#0f1629]">{trendingCoins[0].item.name}</p>

                        <div className={`flex absolute  items-center right-0 h-7 w-fit rounded font-medium ml-8 p-2 text-base ${trendingCoins[0].item.data.price_change_percentage_24h.usd>0?'bg-[#ebf9f4] text-[#14b079]' :'bg-[#EE68551B] text-[#e96975]'}`}>

                            <ArrowDropUpIcon sx={trendingCoins[0].item.data.price_change_percentage_24h.usd>0?{display:'block'}:{display:'none'}} />
                            <ArrowDropDownIcon sx={trendingCoins[0].item.data.price_change_percentage_24h.usd>0?{display:'none'}:{display:'block'}}/>

                            <p>{trendingCoins[0].item.data.price_change_percentage_24h.usd.toFixed(2)}%</p>
                        </div>
                    </div>
                    <div className="flex relative w-full items-center">
                        <img className=" h-6 w-6" src={trendingCoins[1].item.small} alt="" />
                        <p className=" font-medium text-base text-[#0f1629]">{trendingCoins[1].item.name}</p>

                        <div className={`flex absolute right-0 h-7 items-center w-fit rounded font-medium ml-8 p-2 text-base ${trendingCoins[1].item.data.price_change_percentage_24h.usd>0?'bg-[#ebf9f4] text-[#14b079]' :'bg-[#EE68551B] text-[#e96975]'}`}>

                            <ArrowDropUpIcon sx={trendingCoins[1].item.data.price_change_percentage_24h.usd>0?{display:'block'}:{display:'none'}} />
                            <ArrowDropDownIcon sx={trendingCoins[1].item.data.price_change_percentage_24h.usd>0?{display:'none'}:{display:'block'}}/>
                            
                            <p>{trendingCoins[1].item.data.price_change_percentage_24h.usd.toFixed(2)}%</p>
                        </div>
                    </div>
                    <div className="flex relative w-full items-center">
                        <img className=" h-6 w-6" src={trendingCoins[2].item.small} alt="" />
                        <p className=" font-medium text-base text-[#0f1629]">{trendingCoins[2].item.name}</p>

                        <div className={`flex absolute right-0 h-7 items-center w-fit rounded font-medium ml-8 p-2 text-base ${trendingCoins[2].item.data.price_change_percentage_24h.usd>0?'bg-[#ebf9f4] text-[#14b079]' :'bg-[#EE68551B] text-[#e96975]'}`}>

                            <ArrowDropUpIcon sx={trendingCoins[2].item.data.price_change_percentage_24h.usd>0?{display:'block'}:{display:'none'}} />
                            <ArrowDropDownIcon sx={trendingCoins[2].item.data.price_change_percentage_24h.usd>0?{display:'none'}:{display:'block'}}/>
                            
                            <p>{trendingCoins[2].item.data.price_change_percentage_24h.usd.toFixed(2)}%</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}