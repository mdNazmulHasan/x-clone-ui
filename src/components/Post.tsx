import React from "react";
import Image from "./Image";
import PostInfo from "./PostInfo";

const Post = () => {
  return (
    <div className="p-4 border-y-[1px] border-borderGrey">
      {/* Post type */}
      <div className="flex items-center gap-2 text-sm text-textGrey mb-2 font-bold">
        icon
        <span>nazmul reposted</span>
      </div>
      {/* POST CONTENT */}
      <div className="flex gap-4">
        {/* avatar */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            path="/general/avatar.png"
            alt="avatar"
            width={40}
            height={40}
            tr
          />
        </div>
        {/* content */}
        <div className="flex-1">
          {/* top section */}
          <div className="flex items-center gap-2 justify-between">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-md font-bold">nazmul</h1>
              <span className="text-textGrey">@mdNazmulHasan</span>
              <span className="text-textGrey">1 day ago</span>
            </div>
            <PostInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
