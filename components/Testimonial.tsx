import React from "react";
import Image from "next/image";

const Testimonial = () => {
    return (
        <div className="lg:w-screen lg:h-[830.89] lg:gap-[80px] lg:px-[64px] lg:py-[112px] w-[428px] h-[681.89px] gap-[48px] px-[24px] py-[48px] lg:bg-[#F7F7F7] bg-[#FFFFFF]">
            <div className="lg:w-[560px] lg:h-[109px] w-[361px] h-[120px] gap-[24px] flex flex-col">
                <h1 className="w-[560px] h-[58px] font-bold text-[48px] hidden lg:block">Customer testimonials</h1>
                <h1 className="w-[315px] h-[42px] font-bold text-[32px] lg:hidden">What Our Student Say</h1>
                <p className="lg:w-[560px] lg:h-[27px] w-[361px] h-[54px] text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="lg:w-[1152px] lg:h-[417.89px] w-[380px] h-[417.89px] gap-[48px] mt-14">
                {/* 1st row */}
                <div className="lg:w-[1152px] w-[380px] h-[321.89px] gap-[32px] flex flex-row">
                    {/* 1st box */}
                    <div className="lg:w-[362.67px] w-[380px] h-[321.89] gap-[24px] p-[32px] border-[1px] border-[#000000]">
                        <Image src={"/image/Stars.svg"} alt="Stars" width={116} height={18.89} className="flex gap-[4px]"/>
                        <div className="lg:w-[298.67px] w-[316px] h-[215px] gap-[24px] mt-6">
                            <p className="lg:w-[298.67px] w-[316px] h-[135px] text-[18px] text-[#000000]">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
                            </p>
                            <div className="lg:w-[215px] w-[254px] h-[56px] gap-[20px] flex flex-row">
                                <Image src={"/image/Testimonial_Image_1.svg"} alt="Image" width={56} height={56}/>
                                <div className="w-[178px] h-[48px]">
                                    <h1 className="w-[99px] h-[24px] font-semibold text-[16px]">James Nduku</h1>
                                    <p className="w-[139pxpx] h-[24px] text-[16px]">Software Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2nd box */}
                    <div className="hidden lg:block">
                    <div className="lg:w-[362.67px] w-[380px] h-[321.89] gap-[24px] p-[32px] border-[1px] border-[#000000]">
                        <Image src={"/image/Stars.svg"} alt="Stars" width={116} height={18.89} className="flex gap-[4px]"/>
                        <div className="lg:w-[298.67px] w-[316px] h-[215px] gap-[24px] mt-6">
                            <p className="lg:w-[298.67px] w-[316px] h-[135px] text-[18px] text-[#000000]">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
                            </p>
                            <div className="lg:w-[215px] w-[254px] h-[56px] gap-[20px] flex flex-row">
                                <Image src={"/image/Testimonial_Image_2.svg"} alt="Image" width={56} height={56}/>
                                <div className="w-[178px] h-[48px]">
                                    <h1 className="w-[117px] h-[24px] font-semibold text-[16px]">Erick Kipkemboi</h1>
                                    <p className="w-[139pxpx] h-[24px] text-[16px]">Scrum Master</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    {/* 3rd box */}
                    <div className="hidden lg:block">
                    <div className="lg:w-[362.67px] w-[380px] h-[321.89] gap-[24px] p-[32px] border-[1px] border-[#000000]">
                        <Image src={"/image/Stars.svg"} alt="Stars" width={116} height={18.89} className="flex gap-[4px]"/>
                        <div className="lg:w-[298.67px] w-[316px] h-[215px] gap-[24px] mt-6">
                            <p className="lg:w-[298.67px] w-[316px] h-[135px] text-[18px] text-[#000000]">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
                            </p>
                            <div className="lg:w-[215px] w-[254px] h-[56px] gap-[20px] flex flex-row">
                                <Image src={"/image/Testimonial_Image_3.svg"} alt="Image" width={56} height={56}/>
                                <div className="w-[178px] h-[48px]">
                                    <h1 className="w-[117px] h-[24px] font-semibold text-[16px]">Stephen Kerubo</h1>
                                    <p className="w-[139pxpx] h-[24px] text-[16px]">UI/UX Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                </div>

                {/* 2nd row */}
                <div className="lg:w-[1152px] w-[380px] h-[48px] justify-between flex flex-row mt-4">
                    <Image src={"/image/Slider Dots.svg"} alt="Dots" width={72} height={8} className="gap-2"/>
                    <div className="w-[111px] h-[48px] gap-[15px] flex flex-row">
                        <button className="w-[48px] h-[48px] border-[1px] rounded-[50px] border-[#000000] p-3 gap-2">
                            <Image src={"/image/left_icon.svg"} alt="Left Arrow" width={24} height={24}/>
                        </button>
                        <button className="w-[48px] h-[48px] border-[1px] rounded-[50px] border-[#000000] p-3 gap-2">
                            <Image src={"/image/right_icon.svg"} alt="Right Arrow" width={24} height={24}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;