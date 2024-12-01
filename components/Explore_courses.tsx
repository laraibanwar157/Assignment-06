import React from "react";
import Image from "next/image";

const ExploreCourses = () => {
    return (
        <div className="lg:w-screen lg:h-[1049px] lg:py-12 w-[428px] h-[862px] py-12">
            <div className="lg:w-[768px] lg:h-[109px] lg:mt-[100px] lg:mb-[80px] w-[385px] h-[162px] mx-auto mt-[30px] mb-[30px] bg-[#FFFFFF] items-center">
                <h1 className="lg:w-[786px] lg:h-[58px] lg:text-[48px] lg:leading-[57.6px] w-[385px] h-[84px] text-[32px] leading-[41.6px] font-bold mx-auto lg:text-left text-center">
                    Explore Courses By Category</h1>
                <p className="lg:w-[786px] lg:h-[27px] lg:mt-6 w-[385px] h-[54px] mt-5 text-[18px] leading-[27px] mx-auto lg:text-left text-center">
                    Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
                </p>
            </div>
            <div className="lg:w-screen lg:h-[636px] w-[380px] h-[556px] bg-[#FFFFFF] flex flex-col lg:gap-16 gap-[96px]">
                {/* 1st row */}
                <div className="flex lg:w-screen lg:h-[132px] lg:flex-row lg:gap-16 w-[382px] h-[132px] gap-6 flex-col mx-auto">
                    {/* Box-1 */}
                    <div className="lg:w-[410.67px] lg:h-[132px] lg:ml-0 w-[380px] h-[132px] bg-[#F7F7F7] rounded-[5px] p-4 gap-8 ml-6 flex flex-row ">
                        <div className="flex w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px] bg-[#FFFFFF] justify-center items-center">
                            <Image src={"/image/pen-tool-2.svg"} alt="Logo" width={32} height={32}/>
                        </div>
                        <div className="flex flex-col lg:w-[246.67px] lg:h-[57px] w-[216px] h-[57px] my-auto">
                            <h1 className="font-semibold text-[20px] leading-[30px] w-auto h-auto">Design & Development</h1>
                            <p className="text-[18px] leading-[27px] w-auto h-auto">50+ Courses Available</p>
                        </div>
                    </div>
                    {/* Box-2 */}
                    <div className="lg:w-[410.67px] lg:h-[132px] lg:ml-0 w-[380px] h-[132px] bg-[#F7F7F7] rounded-[5px] p-4 gap-8 ml-6 flex flex-row">
                        <div className="flex w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px] bg-[#FFFFFF] justify-center items-center">
                            <Image src={"/image/volume-high.svg"} alt="Logo" width={32} height={32}/>
                        </div>
                        <div className="flex flex-col lg:w-[246.67px] lg:h-[57px] w-[216px] h-[57px] my-auto">
                            <h1 className="font-semibold text-[20px] leading-[30px] w-auto h-auto">Marketing</h1>
                            <p className="text-[18px] leading-[27px] w-auto h-auto">50+ Courses Available</p>
                        </div>
                    </div>
                    {/* Box-3 */}
                    <div className="lg:w-[410.67px] lg:h-[132px] lg:ml-0 w-[380px] h-[132px] bg-[#F7F7F7] rounded-[5px] p-4 gap-8 ml-6 flex flex-row">
                        <div className="flex w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px] bg-[#FFFFFF] justify-center items-center">
                            <Image src={"/image/group.svg"} alt="Logo" width={32} height={32}/>
                        </div>
                        <div className="flex flex-col lg:w-[246.67px] lg:h-[57px] w-[216px] h-[57px] my-auto">
                            <h1 className="font-semibold text-[20px] leading-[30px] w-auto h-auto">Development</h1>
                            <p className="text-[18px] leading-[27px] w-auto h-auto">50+ Courses Available</p>
                        </div>
                    </div>
                </div>


                <div className="hidden lg:block">
                {/* 2nd row */}
                <div className="flex lg:w-screen lg:h-[132px] lg:flex-row lg:gap-16 w-[382px] h-[132px] flex-col mx-auto">
                    {/* Box-4 */}
                    <div className="lg:w-[410.67px] lg:h-[132px] w-[380px] h-[132px] bg-[#F7F7F7] rounded-[5px] lg:p-4 lg:gap-8 flex flex-row">
                        <div className="flex w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px] bg-[#FFFFFF] justify-center items-center">
                            <Image src={"/image/microphone.svg"} alt="Logo" width={32} height={32}/>
                        </div>
                        <div className="flex flex-col lg:w-[246.67px] lg:h-[57px] w-[216px] h-[57px] my-auto">
                            <h1 className="font-semibold text-[20px] leading-[30px] w-auto h-auto">Communication</h1>
                            <p className="text-[18px] leading-[27px] w-auto h-auto">50+ Courses Available</p>
                        </div>
                    </div>
                    {/* Box-5 */}
                    <div className="lg:w-[410.67px] lg:h-[132px] w-[380px] h-[132px] bg-[#F7F7F7] rounded-[5px] lg:p-4 lg:gap-8 flex flex-row">
                        <div className="flex w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px] bg-[#FFFFFF] justify-center items-center">
                            <Image src={"/image/link.svg"} alt="Logo" width={32} height={32}/>
                        </div>
                        <div className="flex flex-col lg:w-[246.67px] lg:h-[57px] w-[216px] h-[57px] my-auto">
                            <h1 className="font-semibold text-[20px] leading-[30px] w-auto h-auto">Digital Marketing</h1>
                            <p className="text-[18px] leading-[27px] w-auto h-auto">50+ Courses Available</p>
                        </div>
                    </div>
                    {/* Box-6 */}
                    <div className="lg:w-[410.67px] lg:h-[132px] w-[380px] h-[132px] bg-[#F7F7F7] rounded-[5px] lg:p-4 lg:gap-8 flex flex-row"> 
                        <div className="flex w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px] bg-[#FFFFFF] justify-center items-center">
                            <Image src={"/image/arrow-2.svg"} alt="Logo" width={32} height={32}/>
                        </div>
                        <div className="flex flex-col lg:w-[246.67px] lg:h-[57px] w-[216px] h-[57px] my-auto">
                            <h1 className="font-semibold text-[20px] leading-[30px] w-auto h-auto">Self Development</h1>
                            <p className="text-[18px] leading-[27px] w-auto h-auto">50+ Courses Available</p>
                        </div>
                    </div>
                </div>
                </div>

                <div className="hidden lg:block">
                {/* 3row */}
                <div className="flex lg:w-screen lg:h-[132px] lg:flex-row lg:gap-16 w-[382px] h-[132px] flex-col mx-auto">
                    {/* Box-7 */}
                    <div className="lg:w-[410.67px] lg:h-[132px] w-[380px] h-[132px] bg-[#F7F7F7] rounded-[5px] lg:p-4 lg:gap-8 flex flex-row">
                        <div className="flex w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px] bg-[#FFFFFF] justify-center items-center">
                            <Image src={"/image/briefcase.svg"} alt="Logo" width={32} height={32}/>
                        </div>
                        <div className="flex flex-col lg:w-[246.67px] lg:h-[57px] w-[216px] h-[57px] my-auto">
                            <h1 className="font-semibold text-[20px] leading-[30px] w-auto h-auto">Business</h1>
                            <p className="text-[18px] leading-[27px] w-auto h-auto">50+ Courses Available</p>
                        </div>
                    </div>
                    {/* Box-8 */}
                    <div className="lg:w-[410.67px] lg:h-[132px] w-[380px] h-[132px] bg-[#F7F7F7] rounded-[5px] lg:p-4 lg:gap-8 flex flex-row">
                        <div className="flex w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px] bg-[#FFFFFF] justify-center items-center">
                            <Image src={"/image/book.svg"} alt="Logo" width={32} height={32}/>
                        </div>
                        <div className="flex flex-col lg:w-[246.67px] lg:h-[57px] w-[216px] h-[57px] my-auto">
                            <h1 className="font-semibold text-[20px] leading-[30px] w-auto h-auto">Finance</h1>
                            <p className="text-[18px] leading-[27px] w-auto h-auto">50+ Courses Available</p>
                        </div>
                    </div>
                    {/* Box-9 */}
                    <div className="lg:w-[410.67px] lg:h-[132px] w-[380px] h-[132px] bg-[#F7F7F7] rounded-[5px] lg:p-4 lg:gap-8 flex flex-row">
                        <div className="flex w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px] bg-[#FFFFFF] justify-center items-center">
                            <Image src={"/image/book (1).svg"} alt="Logo" width={32} height={32}/>
                        </div>
                        <div className="flex flex-col lg:w-[246.67px] lg:h-[57px] w-[216px] h-[57px] my-auto">
                            <h1 className="font-semibold text-[20px] leading-[30px] w-auto h-auto">Consulting</h1>
                            <p className="text-[18px] leading-[27px] w-auto h-auto">50+ Courses Available</p>
                        </div>
                    </div>
                </div>
                </div>


                <div className="w-[155px] h-[48px] rounded-[5px] border-[1px] border-[#000000] py-3 px-4 mx-auto lg:mt-0 mt-[280px]">
                   <button className="w-[120px] h-[24px] text-[16px]">View All Courses</button>
                </div>
            </div>
        </div>
    );
};

export default ExploreCourses;
