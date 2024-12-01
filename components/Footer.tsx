import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="lg:w-screen lg:h-[684px] lg:p-[80px] lg:gap-[8opx] w-[428px] h-[1411px] px-[24px] bg-[#FFFFFF] text-[#000000] py-[48px] gap-[48px] flex flex-col justify-center items-center ">
            <div className="lg:w-[1120px] lg:h-[524px] lg:gap-[80px] w-[380px] h-[1315px gap-[48px] justify-center items-center">
                {/* 1st row */}
                <div className="flex lg:w-[1120px] lg:h-[82px] lg:justify-between lg:flex-row w-[380px] h-[261px] items-center justify-center flex-col">
                    <div className="lg:w-[500px] lg:h-[51px] lg:gap-0 w-[287px] h-[91px] flex flex-col gap-[16px] items-center justify-center">
                        <h1 className="lg:w-[500px] lg:h-[27px] w-[287px] h-[27px] font-semibold text-[18px]">Subscribe to our newsletter</h1>
                        <p className="lg:w-[500px] lg:h-[24px] w-[287px] h-[48px] text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="lg:w-[400px] lg:h-[82px] w-[380px] h-[146px] gap-4">
                        <div className="lg:w-[400px] lg:h-[48px] w-[380px] h-[112px] gap-[16px] lg:mt-0 mt-2">
                            <input type="text" placeholder="Enter your email" 
                              className="lg:w-[265px] lg:h-[48px] w-[380px] h-[48px] text-[16px] p-[12px] gap-[8px] mr-3 border-[1px] border-[#000000] rounded-[5px] text-[#505050] lg:mt-0 mt-2"
                            />
                            <button className="lg:w-[119px] lg:h-[48px] w-[380px] h-[48px] gap-2 px-6 py-3 border-[1px] border-[#000000] rounded-[5px] lg:mt-0 mt-2">
                              <div className="w-[71px] h-[24px] text-[16px]">Subscribe</div>
                            </button>
                        </div>
                        <p className="lg:w-[400px] lg:text-left w-[380px] h-[18px] text-[12px] text-center mt-3">
                            By subscribing you agree to our <span className="underline text-[#000000]">Privacy Policy</span>
                        </p>
                    </div>
                </div>

                {/* 2nd row */}
                <div className="lg:w-[1120px] lg:h-[225px] lg:gap-[40px] lg:justify-start lg:items-start lg:flex-row lg:mt-5 w-[172px] h-[811px] mt-10 justify-center items-center gap-[32px] flex flex-col">
                    {/* 1st column */}
                    <div className="lg:w-[250px] lg:h-[40px] w-[172px] h-[255px] flex flex-col">
                        <div className="w-[130.6px] h-[40px] py-[29px] gap-[10.5px] flex lg:flex-row flex-col">
                            <div className="w-[130.6px] h-[40px] gap-[8.02px] flex flex-row">
                                <Image src={"/image/logo.svg"} alt="Logo" width={32.58} height={30.38}/>
                                <h1 className="w-[90px] h-[30px] text-[25.07px] font-bold">Ddsgnr</h1>
                            </div>
                        </div>
                    </div>

                    {/* 2nd column */}
                    <div className="lg:w-[250px] w-[172px] h-[225px] gap-[16px] text-[#000000] flex flex-col mt-8">
                        <h1 className="lg:w-[250px] w-[172px] h-[24px] font-semibold text-[16px] flex flex-col text-center lg:text-left">Courses</h1>
                        <div className="lg:w-[250px] w-[172px] h-[185px] flex flex-col">
                            <Link href="/" className="lg:w-[250px] w-[172px] h-[37px] py-2">
                               <h1 className="lg:w-[250px] w-[172px] h-[21px] text-[14px] text-center lg:text-left">Business</h1>
                            </Link> 
                            <Link href="/" className="lg:w-[250px] w-[172px] h-[37px] py-2">
                               <h1 className="lg:w-[250px] w-[172px] h-[21px] text-[14px] text-center lg:text-left">Development</h1>
                            </Link>
                            <Link href="/" className="lg:w-[250px] w-[172px] h-[37px] py-2">
                               <h1 className="lg:w-[250px] w-[172px] h-[21px] text-[14px] text-center lg:text-left">Technology</h1>
                            </Link>
                            <Link href="/" className="lg:w-[250px] w-[172px] h-[37px] py-2">
                               <h1 className="lg:w-[250px] w-[172px] h-[21px] text-[14px] text-center lg:text-left">Design</h1>
                            </Link>
                            <Link href="/" className="lg:w-[250px] w-[172px] h-[37px] py-2">
                               <h1 className="lg:w-[250px] w-[172px] h-[21px] text-[14px] text-center lg:text-left">Programming</h1>
                            </Link>
                        </div>
                    </div>

                    {/* 3rd column */}
                    <div className="lg:w-[250px] w-[172px] h-[225px] gap-[16px] text-[#000000] flex flex-col mt-8">
                        <h1 className="lg:w-[250px] w-[172px] h-[24px] font-semibold text-[16px] flex flex-col text-center lg:text-left">Resources</h1>
                        <div className="lg:w-[250px] w-[172px] h-[185px] flex flex-col">
                            <Link href="/" className="lg:w-[250px] w-[172px] h-[37px] py-2">
                               <h1 className="lg:w-[250px] w-[172px] h-[21px] text-[14px] text-center lg:text-left">Career</h1>
                            </Link> 
                            <Link href="/" className="lg:w-[250px] w-[172px] h-[37px] py-2">
                               <h1 className="lg:w-[250px] w-[172px] h-[21px] text-[14px] text-center lg:text-left">Resume</h1>
                            </Link>
                            <Link href="/" className="lg:w-[250px] w-[172px] h-[37px] py-2">
                               <h1 className="lg:w-[250px] w-[172px] h-[21px] text-[14px] text-center lg:text-left">Learning</h1>
                            </Link>
                            <Link href="/" className="lg:w-[250px] w-[172px] h-[37px] py-2">
                               <h1 className="lg:w-[250px] w-[172px] h-[21px] text-[14px] text-center lg:text-left">Interview Preparation</h1>
                            </Link>
                            <Link href="/" className="lg:w-[250px] w-[172px] h-[37px] py-2">
                               <h1 className="lg:w-[250px] w-[172px] h-[21px] text-[14px] text-center lg:text-left">Jobs</h1>
                            </Link>
                        </div>
                    </div>

                    {/* 4th column */}
                    <div className="lg:w-[250px] w-[172px] h-[225px] gap-[16px] text-[#000000] flex flex-col mt-8">
                        <h1 className="lg:w-[250px] w-[172px] h-[24px] font-semibold text-[16px] flex flex-col text-center lg:text-left">About Us</h1>
                        <div className="lg:w-[250px] w-[172px] h-[185px] flex flex-col">
                            <Link href="/" className="lg:w-[250px] w-[172px] h-[37px] py-2">
                               <h1 className="lg:w-[250px] w-[172px] h-[21px] text-[14px] text-center lg:text-left">Contact</h1>
                            </Link> 
                            <Link href="/" className="lg:w-[250px] w-[172px] h-[37px] py-2">
                               <h1 className="lg:w-[250px] w-[172px] h-[21px] text-[14px] text-center lg:text-left">Help/Support</h1>
                            </Link>
                            <Link href="/" className="lg:w-[250px] w-[172px] h-[37px] py-2">
                               <h1 className="lg:w-[250px] w-[172px] h-[21px] text-[14px] text-center lg:text-left">FAQ</h1>
                            </Link>
                            <Link href="/" className="lg:w-[250px] w-[172px] h-[37px] py-2">
                               <h1 className="lg:w-[250px] w-[172px] h-[21px] text-[14px] text-center lg:text-left">Terms and Conditions</h1>
                            </Link>
                            <Link href="/" className="lg:w-[250px] w-[172px] h-[37px] py-2">
                               <h1 className="lg:w-[250px] w-[172px] h-[21px] text-[14px] text-center lg:text-left">Partners</h1>
                            </Link>
                        </div>
                    </div>

                </div>

                {/* 3rd row */}
                <div className="lg:w-[1120px] lg:h-[57px] w-[380px] h-[147px] gap-[32px] flex flex-col lg:mt-[120px] mt-[80px]">
                    <div className="lg:w-[1120px] w-[380px] h-[1px] bg-[#000000]"></div>
                    <div className="lg:w-[1120px] lg:h-[24px] w-[380px] h-[114px] lg:justify-between item justify-center flex lg:flex-row flex-col">
                        {/* Credits */}
                        <div className="lg:w-[564px] lg:h[21px] w-[345px] h-[66px] gap-[24px] flex lg:flex-row flex-col items-center justify-center">
                            <h1 className="w-[195px] h-[21px] text-[14px] text-center lg:text-left">2023 Ddsgnr. All right reserved.</h1>
                            <div className="w-[345px] h-[21px] gap-[24px] flex flex-row">
                                <h1 className="w-[87px] h-[21px] text-[14px] text-[#000000] underline">Privacy Policy</h1>
                                <h1 className="w-[105px] h-[21px] text-[14px] text-[#000000] underline">Terms of Service</h1>
                                <h1 className="w-[105px] h-[21px] text-[14px] text-[#000000] underline">Cookies Settings</h1>
                            </div>
                        </div>

                        {/* Social icon */}
                        <div className="w-[132px] h-[24px] gap-[12px] flex flex-row justify-center items-center mt-5">
                            <Image src={"/image/facebook_icon.svg"} alt="Facebbok icon" width={10} height={18} className="w-[10px] h-[18px]"/>
                            <Image src={"/image/instagram_icon.svg"} alt="Instagram icon" width={18} height={18} className="w-[18px] h-[18px]"/>
                            <Image src={"/image/twitter_icon.svg"} alt="Twitter icon" width={18} height={15.3} className="w-[18px] h-[15.3px]"/>
                            <Image src={"/image/linkedin_icon.svg"} alt="Linkedin icon" width={18} height={18} className="w-[18px] h-[18px]"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;