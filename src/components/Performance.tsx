"use client"

// import ArrowDropUp from "@mui/icons-material/ArrowDropUp";

export default function Performance(){

    return (
        <div className="bg-white md:h-[34.75rem] mt-5 rounded-lg p-6">
            <p className=" text-2xl font-semibold">Performance</p>
            <div className="flex mt-6 items-center border-2 border-yellow-300">
                <div className="flex flex-col">
                    <p className=" text-sm font-normal">Today's Low</p>
                    <p className=" text-base font-medium mt-2">46,930.22</p>
                </div>
                <div className="flex flex-col w-8/12 mx-8 items-center justify-center">
                    <div className=" h-1 mt-8 w-full bg-gradient-to-r from-[#FF4949] via-[#FFAF11] to-[#11EB68] rounded-lg"></div>
                    <img src="./uparrow.png" className=" h-2 w-3" alt="" />
                    <p className=" border-2 border-gray-400 text-xs mt-1">$48,637.83</p>
                </div>
                <div className="flex flex-col">
                    <p className=" text-sm font-normal">Today's High</p>
                    <p className=" text-base font-medium mt-2">49,343.83</p>
                </div>
            </div>
            <div className="flex mt-4 items-center pb-4">
                <div className="flex flex-col">
                    <p className=" text-sm font-normal">52W Low</p>
                    <p className=" text-base font-medium mt-2">16,930.22</p>
                </div>
                <div className="h-1 w-8/12 bg-gradient-to-r from-[#FF4949] via-[#FFAF11] to-[#11EB68] rounded-lg mx-8 "></div>
                <div className="flex flex-col">
                    <p className=" text-sm font-normal">52W High</p>
                    <p className=" text-base font-medium mt-2">49,743.83</p>
                </div>
            </div>
            <p className="flex items-center mt-6  text-lg font-semibold">
                Fundamentals
                <img src="./info.png" className=" ml-1 h-5 w-5" alt="" />
            </p>
            <div className="grid md:grid-rows-5 grid-rows-10 grid-flow-col mt-4 gap-x-20">
                <div className="flex relative items-center border-[#DEE2E6] border-b-[1px] py-3">
                    <p className=" text-[#768396] text-sm font-medium ">Bitcoin Price</p>
                    <p className="font-medium text-xs absolute right-0">$16,815.46</p>
                </div>
                <div className="flex relative items-center border-[#DEE2E6] border-b-[1px] py-3">
                    <p className=" text-[#768396] text-sm font-medium ">24h Low / 24h High</p>
                    <p className="font-medium text-xs absolute right-0">$16,382.07 / $16,874.12</p>
                </div>
                <div className="flex relative items-center border-[#DEE2E6] border-b-[1px] py-3">
                    <p className=" text-[#768396] text-sm font-medium ">7d Low / 7d High</p>
                    <p className="font-medium text-xs absolute right-0">$16,382.07 / $16,874.12</p>
                </div>
                <div className="flex relative items-center border-[#DEE2E6] border-b-[1px] py-3">
                    <p className=" text-[#768396] text-sm font-medium ">Trading Volume</p>
                    <p className="font-medium text-xs absolute right-0">$23,249,202,782</p>
                </div>
                <div className="flex relative items-center border-[#DEE2E6] border-b-[1px] py-3">
                    <p className=" text-[#768396] text-sm font-medium ">Market Cap Rank</p>
                    <p className="font-medium text-xs absolute right-0">#1</p>
                </div>
                <div className="flex relative items-center border-[#DEE2E6] border-b-[1px] py-3">
                    <p className=" text-[#768396] text-sm font-medium ">Market Cap</p>
                    <p className="font-medium text-xs absolute right-0">$323,507,290,047</p>
                </div>
                <div className="flex relative items-center border-[#DEE2E6] border-b-[1px] py-3">
                    <p className=" text-[#768396] text-sm font-medium ">Market Cap Dominance</p>
                    <p className="font-medium text-xs absolute right-0">38.343%</p>
                </div>
                <div className="flex relative items-center border-[#DEE2E6] border-b-[1px] py-3">
                    <p className=" text-[#768396] text-sm font-medium ">Volume / Market Cap</p>
                    <p className="font-medium text-xs absolute right-0">0.0718</p>
                </div>
                <div className="flex relative items-center border-[#DEE2E6] border-b-[1px] py-3">
                    <p className=" text-[#768396] text-sm font-medium ">All-Time High</p>
                    <div className=" flex flex-col absolute right-0">
                        <div className="flex font-medium text-xs ml-6">$69,044.77
                            <p className="ml-1 text-[#F7324C]"> -75.6%</p>
                        </div>
                        <p className=" text-[#111827] text-[0.625rem] font-normal">
                            Nov 10, 2021 (about 1 year)
                        </p>
                    </div>
                </div>
                <div className="flex relative items-center border-[#DEE2E6] border-b-[1px] py-3">
                    <p className=" text-[#768396] text-sm font-medium ">All-Time Low</p>
                    <div className=" flex flex-col absolute right-0">
                        <div className="flex font-medium text-xs ml-6">$67.81
                            <p className=" ml-1 text-[#0FBA83]">24729.1%</p>
                        </div>
                        <p className=" text-[#111827] text-[0.625rem] font-normal">
                            Jul 06, 2013 (over 9 years)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}