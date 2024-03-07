"use client"

export default function Sentiment(){

    return(
        <div className="bg-white h-fit mt-5 rounded-lg p-6">
            <p className=" text-2xl font-semibold">Sentiment</p>
            <div className=" flex items-center my-4">
                <p className=" text-[#44475B] text-lg font-semibold">Key Events</p>
                <img src="./info.png" alt="" className=" w-5 h-5 ml-1" />
            </div>
            <div className="flex overflow-x-auto md:w-[43rem] flex-shrink-0 space-x-3">
                <div className="flex rounded-xl bg-[#E8F4FD] px-4 pt-4 pb-9 h-fit w-fit ">
                    <img src="./fluent_news.png" alt="" className=" w-10 h-10 bg-[#0082FF] p-2  rounded-full" />
                    <div className="flex flex-col ml-2 space-y-2">
                        <p className=" text-sm font-medium">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</p>
                        <p className="text-[#3E5765] text-sm w-96">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
                    </div>
                </div>
                <div className="flex rounded-xl bg-[#EBF9F4] px-4 pt-4 pb-9 h-fit w-fit ">
                        <img src="./stonks.png" alt="" className="w-10 h-10 bg-[#0FBA83] p-2  rounded-full" />
                    <div className="flex flex-col ml-2 space-y-2">
                        <p className=" text-sm font-medium">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</p>
                        <p className="text-[#3E5765] text-sm w-96">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center mt-8">
                <p className=" text-[#44475B] text-lg font-semibold">Analyst Estimates</p>
                <img src="./info.png"  className="h-5 w-5" alt="" />
            </div>
            <div className="flex items-center mt-6">
                <div className="flex justify-center items-center text-4xl text-[#0FBA83] bg-[#EBF9F4] font-medium h-fit w-fit py-8 px-6 rounded-full">76 <p className=" text-base">%</p></div>
                <div className=" ml-10 flex flex-col w-full">
                    <div className="flex w-full items-center">
                        <p className="font-medium text-sm text-[#7C7E8C]">Buy</p>
                        <div className=" ml-6 w-7/12 bg-[#00B386] rounded-sm h-2 "></div>
                        <p className=" ml-2 font-medium text-sm text-[#7C7E8C]">76%</p>
                    </div>
                    <div className="flex w-full items-center">
                        <p className="font-medium text-sm text-[#7C7E8C]">Hold</p>
                        <div className=" ml-6 w-1/12 bg-[#C7C8CE] rounded-sm h-2 "></div>
                        <p className=" ml-2 font-medium text-sm text-[#7C7E8C]">8%</p>
                    </div>
                    <div className="flex w-full items-center">
                        <p className="font-medium text-sm text-[#7C7E8C]">Sell</p>
                        <div className=" ml-6 w-2/12 bg-[#F7324C] rounded-sm h-2 "></div>
                        <p className=" ml-2 font-medium text-sm text-[#7C7E8C]">16%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}