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
        <div>
          {/* top section */}
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1>nazmul</h1>
              <span>@mdNazmulHasan</span>
              <span>1 day ago</span>
            </div>
            <PostInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
