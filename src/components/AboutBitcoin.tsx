export default function AboutBitcoin(){
    return (
        <div className="bg-white md:h-fit mt-5 rounded-lg p-6">
            <p className=" text-2xl font-semibold">About Bitcoin</p>
            <p className=" font-bold text-lg mt-6">What is Bitcoin?</p>
            <p className="font-medium text-base text-[#3E424A] mt-2">Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p>
            <hr className=" my-4" />
            <p className="font-bold text-lg">Lorem ipsum dolor sit amet</p>
            <p className="font-medium text-base text-[#3E424A] mt-2">Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.  
            <br />
            <br />
            Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.
            <br />
            <br />
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
            <hr className=" my-4" />
            <p className="text-2xl font-semibold flex items-center">Already Holding Bitcoin?</p>
            <div className="flex space-x-8 mt-2">
                <div className="flex p-3 bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD] rounded-md">
                    <img src="./greencard.png"  alt="" />
                    <div className="flex flex-col ml-5 w-1/2">
                        <p className=" text-xl font-bold text-white">Calculate your Profits</p>
                        <button className="flex p-2 rounded-lg items-center bg-white text-sm font-semibold text-[#0F1629] w-32 mt-4">
                            Check Now
                            <img src="./arrow_right.png" className=" ml-2" alt="" />
                        </button>
                    </div>
                </div>
                <div className="flex p-3 bg-gradient-to-br from-[#FF9865] to-[#EF3031] rounded-md">
                    <img src="./orangecard.png"  alt="" />
                    <div className="flex flex-col ml-5 w-1/2">
                        <p className=" text-xl font-bold text-white">Calculate your tax liability</p>
                        <button className="flex p-2 rounded-lg items-center bg-white text-sm font-semibold text-[#0F1629] w-32 mt-4">
                            Check Now
                            <img src="./arrow_right.png" className=" ml-2" alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <hr className=" my-4" />
            <p className="font-medium text-base text-[#3E424A]">Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
        </div>
    );
}