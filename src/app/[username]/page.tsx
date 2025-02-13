import Image from "@/components/Image";
import Link from "next/link";
import React from "react";
import Feed from "@/components/Feed";

const UserPage = () => {
    return (
        <div>
            {/* profile title */}
            <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
                <Link href="/">
                    <Image path="icons/back.svg" alt="back" width={24} height={24}/>
                </Link>
                <h1 className="font-bold text-lg">nazmul</h1>
            </div>
            {/*info*/}
            <div>
                {/*cover and avatar container*/}
                <div className="relative w-full">
                    {/*cover*/}
                    <div className="w-full aspect-[3/1] relative ">
                        <Image
                            path="general/cover.jpg"
                            alt="cover"
                            width={600}
                            height={200}
                            tr
                        />
                    </div>
                    {/*avatar*/}
                    <div
                        className="w-1/6 aspect-square  rounded-full overflow-hidden border-black border-4 bg-green-300 absolute left-4 -translate-y-1/2">
                        <Image
                            path="general/avatar.png"
                            alt="cover"
                            width={100}
                            height={100}
                            tr
                        />
                    </div>
                </div>
                <div className="flex w-full items-center justify-end gap-2 p-2">
                    <div
                        className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                        <Image path="icons/more.svg" alt="more" height={20} width={20}/>
                    </div>
                    <div
                        className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                        <Image path="icons/explore.svg" alt="more" height={20} width={20}/>
                    </div>
                    <div
                        className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                        <Image path="icons/message.svg" alt="more" height={20} width={20}/>
                    </div>
                    <button className="py-2 px-4 bg-white text-black font-bold rounded-full ">Follow</button>
                </div>
                {/*details*/}
                <div className="p-4 flex flex-col gap-2">
                    {/*username and handle*/}
                    <div>
                        <h1 className="text-2xl font-bold">nazmul</h1>
                        <span className="text-textGrey text-sm">@mdNazmulHasan</span>
                    </div>
                    <p>Nazmul youtube channel</p>
                    {/*job, location and date*/}
                    <div className="flex gap-4 text-textGrey text-[15px]">
                        <div className="flex items-center gap-2">
                            <Image path="icons/userLocation.svg" alt="userLocation" height={20} width={20}/>
                            <span>Bangladesh</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image path="icons/date.svg" alt="date" height={20} width={20}/>
                            <span>Joined May 2021</span>
                        </div>

                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                            <span className='font-bold'>100</span>
                            <span className="text-textGrey text-[15px]">followers</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className='font-bold'>100</span>
                            <span className="text-textGrey text-[15px]">following</span>
                        </div>
                    </div>
                </div>
                {/*following and followers*/}

            </div>
            {/*feed*/}
            <Feed />
        </div>
    );
};

export default UserPage;
