import React from "react";
import Image from "next/image";

const Courses = () => {
    return (
        <div className="lg:w-screen lg:h-[1742px] lg:gap-[60px] w-[428px] h-[2135px] gap-12 flex flex-col justify-center items-center">
            <div className="lg:w-[786px] lg:h-[118px] w-[249px] h-[93px] gap-4 text-[#000000]">
                <div className="lg:w-[786px] lg:h-[118px] w-[249px] h-[93px] gap-6 text-[#000000]">
                    <h1 className="lg:w-[768px] lg:h-[67px] lg:text-[56px] w-[119px] h-[42px] text-[32px] text-center font-bold ">Courses</h1>
                    <p className="lg:w-[768px] lg:h-[27px] w-[249px] h-[27px] text-[18px] text-center py-5">Your Ultimate Guide to learning</p>
                </div>
            </div>
            <div className="lg:w-[1152px] lg:h-[1340px] gap-[64px] w-[380px] h-[1898px] flex flex-col justify-center items-center">
                <div className="w-[336px] h-[40px] lg:gap-[8px] justify-center items-center">
                    <div className="flex flex-row text-[16px] text-[#000000]">
                      <p className="w-[87px] h-[40px] text-center boder border-b-[1px] border-[#676767]">Popular</p>
                      <p className="w-[140px] h-[40px] text-center">Recommended</p>
                      <p className="w-[109px] h-[40px] text-center">Best Price</p>
                    </div>
                </div>
                <div className="flex lg:w-[1152px] lg:h-[1132px] lg:gap-16 w-[380px] h-[1690px] flex-col gap-8 lg:mr-[130px]">
                    {/* 1st row */}
                    <div className="lg:w-[1312px] lg:h-[534px] lg:gap-8 w-[380px] h-[558px] gap-6 rounded-[5px] text-[#000000] flex lg:flex-row flex-col">
                        {/* 1st pic */}
                        <div className="lg:w-[416px] lg:h-[534px] lg:gap-[24px] bg-[#F7F7F7]">
                            <Image src={"/image/Image.svg"} alt="Image" width={416} height={300} className="lg:w-[416px] w-[380px] h-[300px]"/>
                            <div className="lg:w-[416px] lg:h-[210px] w-[380px] h-[210px] gap-[24px] px-4 pb-6">
                                <div className="lg:w-[382px] lg:h-[122px] w-[380px] h-[234px] lg:gap-2 flex flex-col lg:mt-3">
                                    <div className="w-[382px] h-[24px] gap-2 flex flex-row justify-center items-center">
                                        <h1 className="w-[326px] h-[21px] font-semibold text-[14px]">Design</h1>
                                        <div className="w-[48px] h-[24px] gap-1 flex flex-row">
                                            <Image src={"/image/Star.svg"} alt="Star" width={20} height={20} className="rounded-[1px]"/>
                                            <h1 className="w-[20px] h-[24px] text-[14px] font-semibold">5.0</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="lg:w-[382px] lg:h-[34px] w-[191px] h-[34px] font-bold text-[24px] mt-2">UX/UI Design 201</h1>
                                        <p className="lg:w-[382px] lg:h-[48px] w-[326px] h-[72px] text-[16px] mt-2">
                                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                        </p>
                                    </div>
                                </div>
                                <div className="w-[382px] h-[40px] gap-[16px] flex flex-row lg:mt-8">
                                    <button className="w-[117px] h-[40px] gap-2 rounded-[5px] border-[1px] border-[#000000] px-5 py-2">
                                        <h1 className="w-[77px] h-[24px] text-[16px] leading-[24px]">Enroll Now</h1>
                                    </button>
                                    <button className="w-[77px] h-[40px] gap-2 rounded-[5px] px-5 py-2">
                                        <h1 className="w-[37px] h-[24px] text-[16px] leading-[24px] font-medium">$400</h1>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* 2nd pic */}
                        <div className="lg:w-[416px] lg:h-[534px] lg:gap-[24px] bg-[#F7F7F7]">
                            <Image src={"/image/Image_1.svg"} alt="Image" width={416} height={300} className="lg:w-[416px] w-[380px] h-[300px]"/>
                            <div className="lg:w-[416px] lg:h-[210px] w-[380px] h-[210px] gap-[24px] px-4 pb-6">
                                <div className="lg:w-[382px] lg:h-[122px] w-[380px] h-[234px] gap-2 flex flex-col mt-3">
                                    <div className="w-[382px] h-[24px] gap-2 flex flex-row justify-center items-center">
                                        <h1 className="w-[326px] h-[21px] font-semibold text-[14px]">Programming</h1>
                                        <div className="w-[48px] h-[24px] gap-1 flex flex-row">
                                            <Image src={"/image/Star.svg"} alt="Star" width={20} height={20} className="rounded-[1px]"/>
                                            <h1 className="w-[20px] h-[24px] text-[14px] font-semibold">5.0</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="lg:w-[382px] lg:h-[34px] w-[191px] h-[34px] font-bold text-[24px] mt-2">Introduction to Python</h1>
                                        <p className="lg:w-[382px] lg:h-[48px] w-[326px] h-[72px] text-[16px] mt-2">
                                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                        </p>
                                    </div>
                                </div>
                                <div className="w-[382px] h-[40px] gap-[16px] flex flex-row lg:mt-8">
                                    <button className="w-[117px] h-[40px] gap-2 rounded-[5px] border-[1px] border-[#000000] px-5 py-2">
                                        <h1 className="w-[77px] h-[24px] text-[16px] leading-[24px]">Enroll Now</h1>
                                    </button>
                                    <button className="w-[77px] h-[40px] gap-2 rounded-[5px] px-5 py-2">
                                        <h1 className="w-[37px] h-[24px] text-[16px] leading-[24px] font-medium">$400</h1>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* 3rd pic */}
                        <div className="lg:w-[416px] lg:h-[534px] lg:gap-[24px] bg-[#F7F7F7]">
                            <Image src={"/image/Image_2.svg"} alt="Image" width={416} height={300} className="lg:w-[416px] w-[380px] h-[300px]"/>
                            <div className="lg:w-[416px] lg:h-[210px] w-[380px] h-[210px] gap-[24px] px-4 pb-6">
                                <div className="lg:w-[382px] lg:h-[122px] w-[380px] h-[234px] gap-2 flex flex-col mt-3">
                                    <div className="w-[382px] h-[24px] gap-2 flex flex-row justify-center items-center">
                                        <h1 className="w-[326px] h-[21px] font-semibold text-[14px]">Business</h1>
                                        <div className="w-[48px] h-[24px] gap-1 flex flex-row">
                                            <Image src={"/image/Star.svg"} alt="Star" width={20} height={20} className="rounded-[1px]"/>
                                            <h1 className="w-[20px] h-[24px] text-[14px] font-semibold">5.0</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="lg:w-[382px] lg:h-[34px] w-[191px] h-[34px] font-bold text-[24px] mt-2">Data Analysis for Beginners</h1>
                                        <p className="lg:w-[382px] lg:h-[48px] w-[326px] h-[72px] text-[16px] mt-2">
                                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                        </p>
                                    </div>
                                </div>
                                <div className="w-[382px] h-[40px] gap-[16px] flex flex-row lg:mt-8">
                                    <button className="w-[117px] h-[40px] gap-2 rounded-[5px] border-[1px] border-[#000000] px-5 py-2">
                                        <h1 className="w-[77px] h-[24px] text-[16px] leading-[24px]">Enroll Now</h1>
                                    </button>
                                    <button className="w-[77px] h-[40px] gap-2 rounded-[5px] px-5 py-2">
                                        <h1 className="w-[37px] h-[24px] text-[16px] leading-[24px] font-medium">$400</h1>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* 2nd row */}
                    <div className="hidden lg:block">
                    <div className="lg:w-[1312px] lg:h-[534px] lg:gap-8 w-[380px] h-[558px] gap-6 rounded-[5px] text-[#000000] flex flex-row">
                        {/* 4rd pic */}
                        <div className="lg:w-[416px] lg:h-[534px] lg:gap-[24px] bg-[#F7F7F7]">
                            <Image src={"/image/Image_3.svg"} alt="Image" width={416} height={300} className="lg:w-[416px] w-[380px] h-[300px]"/>
                            <div className="lg:w-[416px] lg:h-[210px] w-[380px] h-[210px] gap-[24px] px-4 pb-6">
                                <div className="lg:w-[382px] lg:h-[122px] w-[380px] h-[234px] gap-2 flex flex-col mt-3">
                                    <div className="w-[382px] h-[24px] gap-2 flex flex-row justify-center items-center">
                                        <h1 className="w-[326px] h-[21px] font-semibold text-[14px]">Art</h1>
                                        <div className="w-[48px] h-[24px] gap-1 flex flex-row">
                                            <Image src={"/image/Star.svg"} alt="Star" width={20} height={20} className="rounded-[1px]"/>
                                            <h1 className="w-[20px] h-[24px] text-[14px] font-semibold">5.0</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="lg:w-[382px] lg:h-[34px] w-[191px] h-[34px] font-bold text-[24px] mt-2">Art Specialization</h1>
                                        <p className="lg:w-[382px] lg:h-[48px] w-[326px] h-[72px] text-[16px] mt-2">
                                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                        </p>
                                    </div>
                                </div>
                                <div className="w-[382px] h-[40px] gap-[16px] flex flex-row mt-8">
                                    <button className="w-[117px] h-[40px] gap-2 rounded-[5px] border-[1px] border-[#000000] px-5 py-2">
                                        <h1 className="w-[77px] h-[24px] text-[16px] leading-[24px]">Enroll Now</h1>
                                    </button>
                                    <button className="w-[77px] h-[40px] gap-2 rounded-[5px] px-5 py-2">
                                        <h1 className="w-[37px] h-[24px] text-[16px] leading-[24px] font-medium">$400</h1>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* 5th pic */}
                        <div className="lg:w-[416px] lg:h-[534px] lg:gap-[24px] bg-[#F7F7F7]">
                            <Image src={"/image/Image_4.svg"} alt="Image" width={416} height={300} className="lg:w-[416px] w-[380px] h-[300px]"/>
                            <div className="lg:w-[416px] lg:h-[210px] w-[380px] h-[210px] gap-[24px] px-4 pb-6">
                                <div className="lg:w-[382px] lg:h-[122px] w-[380px] h-[234px] gap-2 flex flex-col mt-3">
                                    <div className="w-[382px] h-[24px] gap-2 flex flex-row justify-center items-center">
                                        <h1 className="w-[326px] h-[21px] font-semibold text-[14px]">Law</h1>
                                        <div className="w-[48px] h-[24px] gap-1 flex flex-row">
                                            <Image src={"/image/Star.svg"} alt="Star" width={20} height={20} className="rounded-[1px]"/>
                                            <h1 className="w-[20px] h-[24px] text-[14px] font-semibold">5.0</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="lg:w-[382px] lg:h-[34px] w-[191px] h-[34px] font-bold text-[24px] mt-2">Rule of Law</h1>
                                        <p className="lg:w-[382px] lg:h-[48px] w-[326px] h-[72px] text-[16px] mt-2">
                                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                        </p>
                                    </div>
                                </div>
                                <div className="w-[382px] h-[40px] gap-[16px] flex flex-row mt-8">
                                    <button className="w-[117px] h-[40px] gap-2 rounded-[5px] border-[1px] border-[#000000] px-5 py-2">
                                        <h1 className="w-[77px] h-[24px] text-[16px] leading-[24px]">Enroll Now</h1>
                                    </button>
                                    <button className="w-[77px] h-[40px] gap-2 rounded-[5px] px-5 py-2">
                                        <h1 className="w-[37px] h-[24px] text-[16px] leading-[24px] font-medium">$400</h1>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* 6th pic */}
                        <div className="lg:w-[416px] lg:h-[534px] lg:gap-[24px] bg-[#F7F7F7]">
                            <Image src={"/image/Image_5.svg"} alt="Image" width={416} height={300} className="lg:w-[416px] w-[380px] h-[300px]"/>
                            <div className="lg:w-[416px] lg:h-[210px] w-[380px] h-[210px] gap-[24px] px-4 pb-6">
                                <div className="lg:w-[382px] lg:h-[122px] w-[380px] h-[234px] gap-2 flex flex-col mt-3">
                                    <div className="w-[382px] h-[24px] gap-2 flex flex-row justify-center items-center">
                                        <h1 className="w-[326px] h-[21px] font-semibold text-[14px]">Tech</h1>
                                        <div className="w-[48px] h-[24px] gap-1 flex flex-row">
                                            <Image src={"/image/Star.svg"} alt="Star" width={20} height={20} className="rounded-[1px]"/>
                                            <h1 className="w-[20px] h-[24px] text-[14px] font-semibold">5.0</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="lg:w-[382px] lg:h-[34px] w-[191px] h-[34px] font-bold text-[24px] mt-2">Introduction to webflow</h1>
                                        <p className="lg:w-[382px] lg:h-[48px] w-[326px] h-[72px] text-[16px] mt-2">
                                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                        </p>
                                    </div>
                                </div>
                                <div className="w-[382px] h-[40px] gap-[16px] flex flex-row mt-8">
                                    <button className="w-[117px] h-[40px] gap-2 rounded-[5px] border-[1px] border-[#000000] px-5 py-2">
                                        <h1 className="w-[77px] h-[24px] text-[16px] leading-[24px]">Enroll Now</h1>
                                    </button>
                                    <button className="w-[77px] h-[40px] gap-2 rounded-[5px] px-5 py-2">
                                        <h1 className="w-[37px] h-[24px] text-[16px] leading-[24px] font-medium">$400</h1>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                </div>
                <button className="w-[152px] h-[40px] border-[1px] border-[#000000] rounded-[5px] gap-2 px-4 py-2">
                    <h1 className="w-[120px] h-[24px] text-[16px] text-[#000000]">View All Courses</h1>
                </button>
            </div>
        </div>
    );
};

export default Courses;