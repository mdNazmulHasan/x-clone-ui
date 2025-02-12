import React from "react";
import Image from "./Image";

const PopularTags = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGrey flex flex-col gap-4">
      <h1 className="text-xl font-bold text-textGreyLight">
        {"What's"} Happening
      </h1>
      {/* trend event */}
      <div className="flex gap-4 ">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden">
          <Image
            path="general/post.jpeg"
            alt="event"
            width={120}
            height={120}
            tr
          />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-textGreyLight">mountain explore</h2>
          <span className="text-sm text-textGrey">last night</span>
        </div>
      </div>
      {/* topics */}
      <div>
        <div className="flex items-center justify-between">
          <span>Technology . Trending</span>
          <Image path="icons/infoMore.svg" alt="info" width={16} height={16}/>
        </div>
      </div>
    </div>
  );
};

export default PopularTags;
