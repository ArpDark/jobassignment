"use client"

import React,{useState,useEffect,useRef} from "react";

const items = [
    { content: <div>Lorem ipsum dolor sit amet consectetur.</div>, color: 'blue' },
    { content: <div>Sed ut perspiciatis unde omnis iste natus error.</div>, color: 'green' },
    { content: <div>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.</div>, color: 'red' },
  ];


export default function Sentiment(){

    return(
        <div className="bg-white md:h-[34.75rem] mt-5 rounded-lg p-6">
            <p className=" text-2xl font-semibold">Sentiment</p>
            <div className=" flex items-center my-4">
                <p className=" text-[#44475B] text-lg font-semibold">Key Events</p>
                <img src="./info.png" alt="" className=" w-5 h-5 ml-1" />
            </div>
                {/* <div className="flex flex-col bg-[#E8F4FD] px-4 pt-4 pb-9 w-3/5">
                    <div className="flex">
                        <img src="./fluent_news.png" alt="" className=" w-10 h-10 bg-[#0082FF] p-2  rounded-full" />
                        <p className=" text-sm font-medium">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</p>
                    </div>
                    <p className="text-[#3E5765] text-sm">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
                </div>
                <div className="flex flex-col bg-[#EBF9F4] px-4 pt-4 pb-9 w-3/5">
                    <div className="flex">
                        <img src="./stonks.png" alt="" className="w-10 h-10 bg-[#0FBA83] p-2  rounded-full" />
                        <p className=" text-sm font-medium">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</p>
                    </div>
                    <p className="text-[#3E5765] text-sm">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
                </div> */}

        </div>
    );
}