'use client'
import React from 'react';
import Image from "@/components/Image";
import {useRouter} from "next/navigation";
import Comments from "@/components/Comments";

const PostModal = () => {
    const router = useRouter();
    const closeModal = () => {
        router.back();
    }
    return (
        <div className="absolute w-screen h-screen top-0 left-0 z-20 bg-[#293139a6] flex justify-center">
            <div className={"py-4 px-8 rounded-xl bg-black w-[600px] h-max mt-12"}>
                {/*top section*/}
                <div className={"flex items-center justify-between"}>
                    <div onClick={closeModal} className={"cursor-pointer "}>X</div>
                    <div className={"text-iconBlue font-bold"}>Drafts</div>
                </div>
                {/*center*/}
                <div className={"py-8 flex gap-4"}>
                    <div className={"relative flex rounded-full h-10 w-10 overflow-hidden"}>
                        <Image path="general/avatar.png" alt="avatar" width={100} height={100} tr/>
                    </div>
                    <input type={"text"} placeholder={"What is Happening?"}
                           className={"flex-1 bg-transparent outline-none text-lg"}/>
                </div>
                {/*bottom*/}
                <div className={"flex items-center justify-between gap-4 flex-wrap border-t border-borderGrey pt-4"}>
                    <div className="flex gap-4 flex-wrap">

                        <Image
                            path="/icons/image.svg"
                            alt="image"
                            width={20}
                            height={20}
                            className="cursor-pointer"
                        />

                        <Image
                            path="/icons/gif.svg"
                            alt="image"
                            width={20}
                            height={20}
                            className="cursor-pointer"
                        />
                        <Image
                            path="/icons/poll.svg"
                            alt="image"
                            width={20}
                            height={20}
                            className="cursor-pointer"
                        />
                        <Image
                            path="/icons/emoji.svg"
                            alt="image"
                            width={20}
                            height={20}
                            className="cursor-pointer"
                        />
                        <Image
                            path="/icons/schedule.svg"
                            alt="image"
                            width={20}
                            height={20}
                            className="cursor-pointer"
                        />
                        <Image
                            path="/icons/location.svg"
                            alt="image"
                            width={20}
                            height={20}
                            className="cursor-pointer "
                        />
                    </div>
                    <button className={"py-2 px-5 text-black bg-white rounded-full font-bold"}>Post</button>

                </div>

            </div>
        </div>
    );
};

export default PostModal;
