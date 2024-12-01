import React from "react";
import Image from "next/image";

const Miniheader = () => {
    return (
        <div className="lg:w-screen lg:h-[54px] pr-16 pl-[62px] bg-[#F7F7F7] lg:flex hidden border-[1px] border-b-[#000000] sm:block justify-between items-center mx-auto mb-8">
            <div className="flex items-center gap-4 ml-5">
                <p className="lg:w-auto lg:h-auto text-[14px]">Phone Number: 956 742 455 678</p>
                <div className="lg:w-[30px] border-[1px] rotate-90 border-[#676767]"></div>
                <p className="lg:w-auto lg:h-auto text-[14px]">Email:info@ddsgnr.com</p>
            </div>
            <div className="flex items-center gap-4">
                <Image src={"/image/facebook_icon.svg"} alt="Facebbok icon" width={24} height={24} className="h-6 w-6"/>
                <Image src={"/image/instagram_icon.svg"} alt="Instagram icon" width={24} height={24}/>
                <Image src={"/image/twitter_icon.svg"} alt="Twitter icon" width={24} height={24}/>
                <Image src={"/image/linkedin_icon.svg"} alt="Linkedin icon" width={24} height={24}/>
            </div>
        </div>
    );
};

export default Miniheader;
