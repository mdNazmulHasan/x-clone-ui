import Image from "@/components/Image";
import Link from "next/link";
import React from "react";

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
                        <Image path="general/cover.jpg" alt="cover" width={600} height={200} tr/>
                    </div>
                    {/*avatar*/}
                    <div className="w-1/6 aspect-square  rounded-full overflow-hidden border-black border-4 bg-green-300 absolute left-4 -translate-y-1/2">
                        <Image path="general/avatar.png" alt="cover" width={100} height={100} tr/>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default UserPage;
