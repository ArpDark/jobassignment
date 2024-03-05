"use client"

import React,{useState,Fragment} from "react";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div className="flex flex-col relative min-h-screen h-fit overflow-y-auto bg-[#eff2f5]">
      <Navbar/>
      <div className="">
        <p className="text-[#3e5765]">Cryptocurrencies</p>
        <p className="text-[#0f1629]">Bitcoin</p>
      </div>
    </div>
  );
}
