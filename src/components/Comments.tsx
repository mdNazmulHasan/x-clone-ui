import React from 'react';
import Image from "@/components/Image";
import Post from "@/components/Post";

const Comments = () => {
    return (
        <div>
            <div className={"flex items-center justify-between gap-4 p-4"}>
                <div className={"relative w-10 h-10 rounded-full overflow-hidden"}>
                    <Image path={"general/avatar.png"} alt={"avatar"} width={100} height={100} tr/>
                </div>
                <input className={"flex-1 bg-transparent outline-none p-2 text-xl"} placeholder={"Post your reply"}/>
                <button className={"py-2 px-4 font-bold bg-white text-black rounded-full"}>Reply</button>
            </div>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
};

export default Comments;
