import React from "react";
import Image from "next/image";

const Header = () => {
    return (
        <div className="lg:w-screen lg:h-[72px] lg:-mt-[14px] lg:bg-[#F7F7F7] border-[1px] border-b-[#676767] bg-[#FFFFFF] w-[428px] h-[72px] mt-0">
            <div className="lg:w-[1152px] lg:h-[44px] lg:pt-6 w-[380px] h-[48px] pt-0 flex justify-between items-center mx-auto gap-8">
                <div className="flex items-center gap-2 ">
                    <Image src={"/image/logo.svg"} alt="Logo" width={32.58} height={30.38} className="lg:ml-0 ml-[16px]"/>
                    <h1 className="font-bold text-[25.07px] text-[#000000] py-[29px]">Ddsgnr</h1>
                    <Image src={"/image/menu_icon.svg"} alt="Menu" width={48} height={48} className="lg:hidden block ml-[150px] py-[29px]"/>
                </div>

                <div className="lg:flex w-[910px] h-[44px] gap-8 mx-auto bg-[#FFFFFF] ml-[160px] mr-6 hidden sm:block">
                    <ul className="flex w-[687px] h-[44px] gap-8 mx-auto text-[16px] bg-[#FFFFFF]">
                       <li className="w-[64px] h-[44px] p-[10px] border-b-[1px] border-[#000000]">Home</li>
                       <li className="w-[79px] h-[44px] p-[10px]">Courses</li>
                       <li className="w-[81px] h-[44px] p-[10px]">Services</li>
                       <li className="w-[113px] h-[44px] p-[10px]">Achievement</li>
                       <li className="w-[86px] h-[44px] p-[10px]">About Us</li>
                       <li className="w-[104px] h-[44px] p-[10px]">Testimonial</li>
                    </ul>
                    <div className="flex flex-row gap-2 bg-[#FFFFFF]">
                       <button className="flex w-[80px] h-[44px] border-[1px] rounded-[5px] border-[#000000] justify-center items-center">Login</button>
                       <button className="flex w-[105px] h-[44px] border-[1px] rounded-[5px] border-[#000000] bg-[#000000] text-[#FFFFFF] justify-center items-center">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;