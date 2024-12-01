import React from "react";
import Image from "next/image";

const Logo = () =>{
    return (
        <div className="flex lg:w-screen lg:h-[228px] lg:bg-[#F7F7F7] lg:flex-row w-[428px] h-[239.34px] bg-[#FFFFFF] flex-col px-6 py-12 justify-center items-center p-6">
            <div className="lg:w-[320px] lg:h-[68px] lg:text-[24px] w-[327px] h-[54px] text-[18px] mb-1 font-bold text-[#000000] justify-center items-center">
                <h1 className="hidden sm:block">Trusted by 2000+ companies worldwide.</h1>
                <h1 className="lg:hidden block">Trusted by the world's best companies <br/> [social proof to build credibility]</h1>
            </div>
            <div className="flex lg:w-[880px] lg:h-[56px] lg:items-center lg:mr-10 lg:mt-0 w-[107.15px]  h-[33.34px] mt-4 justify-center items-center mx-auto">
                <Image src={"/image/Airbnb Logo.svg"} alt="" width={123.8} height={38.52}/>
                <Image src={"/image/Airbnb Logo (1).svg"} alt="Logo" width={123.8} height={38.52} className="w-[80px] lg:w-auto lg:h-auto"/>
                <Image src={"/image/Airbnb Logo (2).svg"} alt="Logo" width={123.8} height={38.52} className="w-[80px] lg:w-auto lg:h-auto"/>
                <Image src={"/image/Airbnb Logo (3).svg"} alt="Logo" width={123.8} height={38.52} className="w-[80px] lg:w-auto lg:h-auto"/>
                <Image src={"/image/Airbnb Logo (4).svg"} alt="Logo" width={123.8} height={38.52} className="w-[80px] lg:w-auto lg:h-auto"/>
                <Image src={"/image/Airbnb Logo (5).svg"} alt="Logo" width={123.8} height={38.52} className="w-[80px] lg:w-auto lg:h-auto"/>
            </div>
        </div>
    );
};

export default Logo;