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
          {/* Text & media */}
          <p>
            The sun dipped below the horizon, casting a warm golden glow across
            the tranquil lake. Birds chirped softly in the distance, their
            melodies blending with the gentle rustling of leaves in the evening
            breeze. A lone fisherman stood at the water's edge, his silhouette
            framed by the fading light, patiently waiting for a bite. The world
            seemed to pause, if only for a moment, as nature embraced the quiet
            transition from day to night. Somewhere nearby, a campfire crackled,
            its flickering flames dancing in harmony with the stars that began
            to dot the darkening sky.
          </p>
          <Image
            path="/general/post.jpeg"
            alt="post"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
