import React from "react";
import Image from "next/image";
import { resourceUsage } from "process";


const Hero = () => {
    return (
        <div className="lg:w-screen lg:h-[800px] lg:pt-0 w-[428px] h-[780px] pt-5 justify-center items-center">
            <div className="flex flex-col justify-center items-center sm:flex-row">
                <div className="flex flex-col w-[428px] h-[390px] lg:w-1/2 lg:h-[800px] justify-center items-center">
                   <h1 className="lg:w-[500px] lg:h-[134px] lg:leading-[67.2px] lg:text-[56px] w-[380px] h-[96px] leading-[48px] font-bold text-[40px] text-[#000000]">Learn new skills online with ease</h1>
                   <p className="lg:w-[500px] lg:h-[54px] w-[380px] h-[54px] text-[18px] leading-[27px]">Discover a wide range of courses covering a variety of <br className="hidden lg:block"/> subjects, taught by expert instructors.</p>
                   <div className="w-[358px] h-[64px] mt-[16px] gap-[16px] sm:flex-col-1 flex space-x-1 lg:mr-[140px] mr-6 justify-center items-center">
                        <button className="w-[178px] h-[48px] lg:gap-2 gap-1 text-[16px] border-[1px] rounded-[5px] bg-[#000000] text-[#FFFFFF] leading-[24px]">Start learning now</button>
                        <button className="w-[164px] h-[48px] lg:gap-2 gap-1 text-[16px] border-[1px] rounded-[5px] bg-[#FFFFFF] text-[#000000] leading-[24px]">Explore Courses</button>
                    </div>
                </div>

                <div className="lg:w-1/2 flex flex-col justify-center sm:flex-row items-center">
                    <Image src={"/image/girl_image.svg"} alt="Hero Image"  width={640} height={900} className="hidden lg:block"/>
                    <Image src={"/image/hero_image.svg"} alt="Hero Image"  width={428} height={390} className="block lg:hidden"/>
                </div>
            </div>
        </div>
    );
};

export default Hero;