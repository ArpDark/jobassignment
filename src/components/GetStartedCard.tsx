"use client"

export default function GetStartedCard(){
    return(
        <div className=" flex flex-col items-center h-[32.2rem] w-fit bg-[#0052fe] rounded-lg px-4 py-8">
              <div className="flex flex-col w-80 items-center  border-2 border-purple-500 pb-5 ">
                <p className="flex text-white text-2xl font-bold">Get Started with KoinX</p>
                <p className="text-white text-2xl font-bold">for FREE</p>
                <p className="text-[#F2F2F2] font-medium text-sm text-center mt-3.5">With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
              </div>
              <img src="./frame.png" alt="" className=" mt-5" />
              <button className=" flex px-6 mt-5 py-2 justify-between items-center rounded-lg bg-white text-base font-semibold text-[#0f1629]">
                <p className="text-base font-semibold text-[#0f1629]">Get Started for FREE</p>
                <img src="./arrow_right.png" alt=""  className="ml-4"/>
              </button>
        </div>
    );
}