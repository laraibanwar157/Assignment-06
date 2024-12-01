import React from "react";
import Image from "next/image";

// const OurTeam = () => {
//     return (
//         <div className="lg:w-screen lg:h-[895px] lg:px-[64px] lg:py-[112px] lg:gap-[80px] w-[428px] h-[1075px] px-[24px] py-[48px] gap-[48px] flex flex-col justify-center items-center bg-[#F7F7F7]">
//             <div className="lg:w-[768px] lg:h-[149px] w-[363px] h-[120px] flex flex-col gap-[16px] ml-[200px]">
//                 <div className="lg:w-[768px] lg:h-[109px] w-[363px] h-[120px] flex flex-col gap-[24px]">
//                     <h1 className="lg:w-[768px] lg:h-[58px] lg:text-[48px] text-center font-bold text-[#000000] w-[363px] h-[42px] text-[32px]">Our team</h1>
//                     <p className="lg:w-[768px] lg:h-[27px] w-[363px] h-[54px] text-[18px] text-center text-[#000000]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 </div>
//             </div>
//             <div className="lg:w-[1280px] lg:h-[610px] w-[380px] h-[723px] lg:gap-[96px] gap-[64px]">
//                 <div className="lg:w-[1280px] lg:h-[610px] w-[380px] h-[723px] gap-[64px] flex flex-col">
//                     {/* 1st row */}
//                     <div className="lg:w-[1280px] lg:h-[273] w-[380px] h-[723px] gap-[48px] flex lg:flex-row flex-col ml-[100px]">
//                         {/* 1st box */}
//                         <div className="w-[394.67px] lg:h-[273px] h-[723px] gap-[24px] flex flex-col items-center justify-center">
//                             <Image src={"/image/Team_Image_1.svg"} alt="Image" width={80} height={80}/>
//                             <div className="w-[394.67px] h-[121px] gap-[16px] flex flex-col">
//                                 <div className="w-[394.67px] h-[57px] flex flex-col text-[#000000]">
//                                     <h1 className="w-[394.67px] h-[30px] text-[20px] font-semibold text-center">James Nduku</h1>
//                                     <p className="w-[394.67px] h-[27px] text-[18px] text-center">Marketing Coordinator</p>
//                                 </div>
//                             </div>
//                             <div className="w-[100px] h-[24px] flex flex-row gap-[14px] justify-center items-center">
//                                 <Image src={"/image/Linkedin_Vector.svg"} alt="Linkedin icon" width={24} height={24}/>
//                                 <Image src={"/image/Twitter_Vector.svg"} alt="Twitter icon" width={24} height={24}/>
//                                 <Image src={"/image/Website_Vector.svg"} alt="Website icon" width={24} height={24}/>
//                             </div>
//                         </div>

//                         {/* 2nd box */}
//                         <div className="w-[394.67px] lg:h-[273px] h-[723px] gap-[24px] flex flex-col items-center justify-center">
//                             <Image src={"/image/Team_Image_2.svg"} alt="Image" width={80} height={80}/>
//                             <div className="w-[394.67px] h-[121px] gap-[16px] flex flex-col">
//                                 <div className="w-[394.67px] h-[57px] flex flex-col text-[#000000]">
//                                     <h1 className="w-[394.67px] h-[30px] text-[20px] font-semibold text-center">Joseph Munyambu</h1>
//                                     <p className="w-[394.67px] h-[27px] text-[18px] text-center">Nursing Assistant</p>
//                                 </div>
//                             </div>
//                             <div className="w-[100px] h-[24px] flex flex-row gap-[14px] justify-center items-center">
//                                 <Image src={"/image/Linkedin_Vector.svg"} alt="Linkedin icon" width={24} height={24}/>
//                                 <Image src={"/image/Twitter_Vector.svg"} alt="Twitter icon" width={24} height={24}/>
//                                 <Image src={"/image/Website_Vector.svg"} alt="Website icon" width={24} height={24}/>
//                             </div>
//                         </div>

//                         {/* 3rd box */}
//                         <div className="w-[394.67px] lg:h-[273px] h-[723px] gap-[24px] flex flex-col items-center justify-center">
//                             <Image src={"/image/Team_Image_3.svg"} alt="Image" width={80} height={80}/>
//                             <div className="w-[394.67px] h-[121px] gap-[16px] flex flex-col">
//                                 <div className="w-[394.67px] h-[57px] flex flex-col text-[#000000]">
//                                     <h1 className="w-[394.67px] h-[30px] text-[20px] font-semibold text-center">Joseph Ngumbau</h1>
//                                     <p className="w-[394.67px] h-[27px] text-[18px] text-center">Medical Assistant</p>
//                                 </div>
//                             </div>
//                             <div className="w-[100px] h-[24px] flex flex-row gap-[14px] justify-center items-center">
//                                 <Image src={"/image/Linkedin_Vector.svg"} alt="Linkedin icon" width={24} height={24}/>
//                                 <Image src={"/image/Twitter_Vector.svg"} alt="Twitter icon" width={24} height={24}/>
//                                 <Image src={"/image/Website_Vector.svg"} alt="Website icon" width={24} height={24}/>
//                             </div>
//                         </div>
//                     </div>

//                     {/* 2nd row */}
//                     <div className="lg:w-[1280px] lg:h-[273] w-[380px] h-[723px] gap-[48px] flex lg:flex-row flex-col ml-[100px]">
//                         {/* 4rd box */}
//                         <div className="w-[394.67px] lg:h-[273px] h-[723px] gap-[24px] flex flex-col items-center justify-center">
//                             <Image src={"/image/Team_Image_4.svg"} alt="Image" width={80} height={80}/>
//                             <div className="w-[394.67px] h-[121px] gap-[16px] flex flex-col">
//                                 <div className="w-[394.67px] h-[57px] flex flex-col text-[#000000]">
//                                     <h1 className="w-[394.67px] h-[30px] text-[20px] font-semibold text-center">Erick Kipkemboi</h1>
//                                     <p className="w-[394.67px] h-[27px] text-[18px] text-center">Web Designer</p>
//                                 </div>
//                             </div>
//                             <div className="w-[100px] h-[24px] flex flex-row gap-[14px] justify-center items-center">
//                                 <Image src={"/image/Linkedin_Vector.svg"} alt="Linkedin icon" width={24} height={24}/>
//                                 <Image src={"/image/Twitter_Vector.svg"} alt="Twitter icon" width={24} height={24}/>
//                                 <Image src={"/image/Website_Vector.svg"} alt="Website icon" width={24} height={24}/>
//                             </div>
//                         </div>

//                         {/* 5th box */}
//                         <div className="w-[394.67px] lg:h-[273px] h-[723px] gap-[24px] flex flex-col items-center justify-center">
//                             <Image src={"/image/Team_Image_5.svg"} alt="Image" width={80} height={80}/>
//                             <div className="w-[394.67px] h-[121px] gap-[16px] flex flex-col">
//                                 <div className="w-[394.67px] h-[57px] flex flex-col text-[#000000]">
//                                     <h1 className="w-[394.67px] h-[30px] text-[20px] font-semibold text-center">Stephen Kerubo</h1>
//                                     <p className="w-[394.67px] h-[27px] text-[18px] text-center">President of Sales</p>
//                                 </div>
//                             </div>
//                             <div className="w-[100px] h-[24px] flex flex-row gap-[14px] justify-center items-center">
//                                 <Image src={"/image/Linkedin_Vector.svg"} alt="Linkedin icon" width={24} height={24}/>
//                                 <Image src={"/image/Twitter_Vector.svg"} alt="Twitter icon" width={24} height={24}/>
//                                 <Image src={"/image/Website_Vector.svg"} alt="Website icon" width={24} height={24}/>
//                             </div>
//                         </div>

//                         {/* 6th box */}
//                         <div className="w-[394.67px] lg:h-[273px] h-[723px] gap-[24px] flex flex-col items-center justify-center">
//                             <Image src={"/image/Team_Image_6.svg"} alt="Image" width={80} height={80}/>
//                             <div className="w-[394.67px] h-[121px] gap-[16px] flex flex-col">
//                                 <div className="w-[394.67px] h-[57px] flex flex-col text-[#000000]">
//                                     <h1 className="w-[394.67px] h-[30px] text-[20px] font-semibold text-center">John Leboo</h1>
//                                     <p className="w-[394.67px] h-[27px] text-[18px] text-center">Dog Trainer</p>
//                                 </div>
//                             </div>
//                             <div className="w-[100px] h-[24px] flex flex-row gap-[14px] justify-center items-center">
//                                 <Image src={"/image/Linkedin_Vector.svg"} alt="Linkedin icon" width={24} height={24}/>
//                                 <Image src={"/image/Twitter_Vector.svg"} alt="Twitter icon" width={24} height={24}/>
//                                 <Image src={"/image/Website_Vector.svg"} alt="Website icon" width={24} height={24}/>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default OurTeam;



const OurTeam = () => {
    return (
        <div className="lg:w-screen lg:h-[895px] lg:px-[64px] lg:py-[112px] lg:gap-[80px] w-[428px] h-[1075px] px-[24px] py-[48px] gap-[48px] flex flex-col justify-center items-center bg-[#F7F7F7]">
            <div className="lg:w-[768px] lg:h-[149px] w-[363px] h-[120px] flex flex-col gap-[16px]">
                <div className="lg:w-[768px] lg:h-[109px] w-[363px] h-[120px] flex flex-col gap-[24px]">
                    <h1 className="lg:w-[768px] lg:h-[58px] lg:text-[48px] text-center font-bold text-[#000000] w-[363px] h-[42px] text-[32px]">Our team</h1>
                    <p className="lg:w-[768px] lg:h-[27px] w-[363px] h-[54px] text-[18px] text-center text-[#000000]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className="lg:w-[1280px] lg:h-[610px] w-[380px] h-[723px] lg:gap-[96px] gap-[64px]">
                <div className="lg:w-[1280px] lg:h-[610px] w-[380px] h-[723px] gap-[64px] flex flex-col">
                    {/* 1st row */}
                    <div className="lg:w-[1280px] lg:h-[273] w-[380px] h-[723px] gap-[48px] flex lg:flex-row flex-col">
                        {/* 1st box */}
                        <div className="w-[394.67px] h-[273px] lg:gap-[24px] gap-1 flex flex-col items-center justify-center">
                            <Image src={"/image/Team_Image_1.svg"} alt="Image" width={80} height={80}/>
                            <div className="w-[394.67px] h-[121px] gap-[16px] flex flex-col">
                                <div className="w-[394.67px] h-[57px] flex flex-col text-[#000000]">
                                    <h1 className="w-[394.67px] h-[30px] text-[20px] font-semibold text-center">James Nduku</h1>
                                    <p className="w-[394.67px] h-[27px] text-[18px] text-center">Marketing Coordinator</p>
                                </div>
                            </div>
                            <div className="w-[100px] h-[24px] flex flex-row gap-[14px] justify-center items-center">
                                <Image src={"/image/Linkedin_Vector.svg"} alt="Linkedin icon" width={24} height={24}/>
                                <Image src={"/image/Twitter_Vector.svg"} alt="Twitter icon" width={24} height={24}/>
                                <Image src={"/image/Website_Vector.svg"} alt="Website icon" width={24} height={24}/>
                            </div>
                        </div>

                        {/* 2nd box */}
                        <div className="w-[394.67px] lg:h-[273px] h-[723px] lg:gap-[24px] gap-1 flex flex-col items-center justify-center">
                            <Image src={"/image/Team_Image_2.svg"} alt="Image" width={80} height={80}/>
                            <div className="w-[394.67px] h-[121px] gap-[16px] flex flex-col">
                                <div className="w-[394.67px] h-[57px] flex flex-col text-[#000000]">
                                    <h1 className="w-[394.67px] h-[30px] text-[20px] font-semibold text-center">Joseph Munyambu</h1>
                                    <p className="w-[394.67px] h-[27px] text-[18px] text-center">Nursing Assistant</p>
                                </div>
                            </div>
                            <div className="w-[100px] h-[24px] flex flex-row gap-[14px] justify-center items-center">
                                <Image src={"/image/Linkedin_Vector.svg"} alt="Linkedin icon" width={24} height={24}/>
                                <Image src={"/image/Twitter_Vector.svg"} alt="Twitter icon" width={24} height={24}/>
                                <Image src={"/image/Website_Vector.svg"} alt="Website icon" width={24} height={24}/>
                            </div>
                        </div>

                        {/* 3rd box */}
                        <div className="w-[394.67px] lg:h-[273px] h-[723px] lg:gap-[24px] gap-1 flex flex-col items-center justify-center">
                            <Image src={"/image/Team_Image_3.svg"} alt="Image" width={80} height={80}/>
                            <div className="w-[394.67px] h-[121px] gap-[16px] flex flex-col">
                                <div className="w-[394.67px] h-[57px] flex flex-col text-[#000000]">
                                    <h1 className="w-[394.67px] h-[30px] text-[20px] font-semibold text-center">Joseph Ngumbau</h1>
                                    <p className="w-[394.67px] h-[27px] text-[18px] text-center">Medical Assistant</p>
                                </div>
                            </div>
                            <div className="w-[100px] h-[24px] flex flex-row gap-[14px] justify-center items-center">
                                <Image src={"/image/Linkedin_Vector.svg"} alt="Linkedin icon" width={24} height={24}/>
                                <Image src={"/image/Twitter_Vector.svg"} alt="Twitter icon" width={24} height={24}/>
                                <Image src={"/image/Website_Vector.svg"} alt="Website icon" width={24} height={24}/>
                            </div>
                        </div>
                    </div>

                    {/* 2nd row */}
                    <div className="hidden lg:block">
                    <div className="lg:w-[1280px] lg:h-[273] w-[380px] h-[723px] gap-[48px] flex lg:flex-row flex-col">
                        {/* 4rd box */}
                        <div className="w-[394.67px] lg:h-[273px] h-[723px] gap-[24px] flex flex-col items-center justify-center">
                            <Image src={"/image/Team_Image_4.svg"} alt="Image" width={80} height={80}/>
                            <div className="w-[394.67px] h-[121px] gap-[16px] flex flex-col">
                                <div className="w-[394.67px] h-[57px] flex flex-col text-[#000000]">
                                    <h1 className="w-[394.67px] h-[30px] text-[20px] font-semibold text-center">Erick Kipkemboi</h1>
                                    <p className="w-[394.67px] h-[27px] text-[18px] text-center">Web Designer</p>
                                </div>
                            </div>
                            <div className="w-[100px] h-[24px] flex flex-row gap-[14px] justify-center items-center">
                                <Image src={"/image/Linkedin_Vector.svg"} alt="Linkedin icon" width={24} height={24}/>
                                <Image src={"/image/Twitter_Vector.svg"} alt="Twitter icon" width={24} height={24}/>
                                <Image src={"/image/Website_Vector.svg"} alt="Website icon" width={24} height={24}/>
                            </div>
                        </div>

                        {/* 5th box */}
                        <div className="w-[394.67px] lg:h-[273px] h-[723px] gap-[24px] flex flex-col items-center justify-center">
                            <Image src={"/image/Team_Image_5.svg"} alt="Image" width={80} height={80}/>
                            <div className="w-[394.67px] h-[121px] gap-[16px] flex flex-col">
                                <div className="w-[394.67px] h-[57px] flex flex-col text-[#000000]">
                                    <h1 className="w-[394.67px] h-[30px] text-[20px] font-semibold text-center">Stephen Kerubo</h1>
                                    <p className="w-[394.67px] h-[27px] text-[18px] text-center">President of Sales</p>
                                </div>
                            </div>
                            <div className="w-[100px] h-[24px] flex flex-row gap-[14px] justify-center items-center">
                                <Image src={"/image/Linkedin_Vector.svg"} alt="Linkedin icon" width={24} height={24}/>
                                <Image src={"/image/Twitter_Vector.svg"} alt="Twitter icon" width={24} height={24}/>
                                <Image src={"/image/Website_Vector.svg"} alt="Website icon" width={24} height={24}/>
                            </div>
                        </div>

                        {/* 6th box */}
                        <div className="w-[394.67px] lg:h-[273px] h-[723px] gap-[24px] flex flex-col items-center justify-center">
                            <Image src={"/image/Team_Image_6.svg"} alt="Image" width={80} height={80}/>
                            <div className="w-[394.67px] h-[121px] gap-[16px] flex flex-col">
                                <div className="w-[394.67px] h-[57px] flex flex-col text-[#000000]">
                                    <h1 className="w-[394.67px] h-[30px] text-[20px] font-semibold text-center">John Leboo</h1>
                                    <p className="w-[394.67px] h-[27px] text-[18px] text-center">Dog Trainer</p>
                                </div>
                            </div>
                            <div className="w-[100px] h-[24px] flex flex-row gap-[14px] justify-center items-center">
                                <Image src={"/image/Linkedin_Vector.svg"} alt="Linkedin icon" width={24} height={24}/>
                                <Image src={"/image/Twitter_Vector.svg"} alt="Twitter icon" width={24} height={24}/>
                                <Image src={"/image/Website_Vector.svg"} alt="Website icon" width={24} height={24}/>
                            </div>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurTeam;