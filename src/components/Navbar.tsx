"use client"

import React,{useState,Fragment} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, Transition } from '@headlessui/react';


export default function Navbar(){
    return (
        <div className="flex w-full h-16 bg-white drop-shadow-[0_0_0.75rem_rgba(16, 38, 73, 0.06)] items-center  z-10 ">
          <div className="hidden lg:visible lg:flex w-full  h-fit ">
            <div className="flex items-center ml-[3.75rem] ">
              <img src="./logo.png" className="w-24 h-6 " alt="logo" />
            </div>

            <div className="w-full flex justify-end items-center space-x-8 mr-14 ">
              <a href="#" className=" font-semibold text-base">Crypto Taxes</a>
              <a href="#" className=" font-semibold text-base">Free Tools</a>
              <a href="#" className=" font-semibold text-base">Resource Center</a>
              <button className=" font-semibold text-base bg-blue-600 rounded-md p-2 text-white">Get Started</button>
            </div>
            
          </div>

          <div className="lg:hidden w-full flex items-center">
          <img src="./logo.png" className="w-20 h-5  ml-6" alt="logo" />
          <Menu as="div" className="flex text-left justify-end justify-self-end w-full mr-6">
            <div >
              <Menu.Button className="inline-flex w-full justify-center bg-transparent ">
                <MenuIcon sx={{fontSize:27 }}/>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute z-10 mt-14 ml-16 w-5/6  origin-top-right bg-white shadow-lg ">
                <div className="">
                  <Menu.Item>
                      <a href="#home" className=" font-semibold text-base block px-4 py-2">
                        Crypto Taxes
                      </a>
                  </Menu.Item>
                  <Menu.Item>
                      <a href="#about" className=" font-semibold text-base block px-4 py-2">
                        Free Tools
                      </a>
                  </Menu.Item>
                  <Menu.Item>
                      <a href="#" className=" font-semibold text-base block px-4 py-2">
                        Resource Center
                      </a>
                  </Menu.Item>
                  <Menu.Item>
                    <div className="block px-4 py-2">
                      <button className=" font-semibold text-base bg-blue-600 rounded-md p-2 text-white">Get Started</button>
                    </div>
                  </Menu.Item>
                  
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    );
}