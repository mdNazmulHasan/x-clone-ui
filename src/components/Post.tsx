import React from "react";
import Image from "./Image";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteractions";
import { imagekit } from "@/utils";
import Video from "./Video";

interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  customMetadata: { sensitive: boolean };
}

const Post = async () => {
  const getFileDetails = async (
    fileId: string
  ): Promise<FileDetailsResponse> => {
    return new Promise((resolve, reject) => {
      imagekit.getFileDetails(fileId, function (error, result) {
        if (error) reject(error);
        else resolve(result as unknown as FileDetailsResponse);
      });
    });
  };
  const fileDetails = await getFileDetails("67a5cd1a432c476416fbd086");
  console.log("🚀 ~ Post ~ fileDetails:", fileDetails);
  return (
    <div className="p-4 border-y-[1px] border-borderGrey">
      {/* Post type */}
      <div className="flex items-center gap-2 text-sm text-textGrey mb-2 font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="#71767b"
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
          />
        </svg>
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
        <div className="flex-1 flex flex-col gap-2">
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
          {fileDetails && fileDetails.fileType === "image" ? (
            <Image
              path={fileDetails.filePath}
              alt="post"
              width={fileDetails.width}
              height={fileDetails.height}
              className={fileDetails.customMetadata.sensitive ? "blur-lg" : ""}
            />
          ) : (
            <Video
              path={fileDetails.filePath}
              className={fileDetails.customMetadata.sensitive ? "blur-lg" : ""}
            />
          )}
          <PostInteractions />
        </div>
      </div>
    </div>
  );
};

export default Post;
