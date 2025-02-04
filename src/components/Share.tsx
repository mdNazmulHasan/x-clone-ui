"use client";
import React from "react";
import Image from "./Image";
import { shareAction } from "@/actions";

const Share = () => {
  const [media, setMedia] = React.useState<File | null>(null);

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setMedia(e.target.files[0]);
    }
  };

  return (
    <form className="p-4 flex gap-4" action={shareAction}>
      {/* avatar */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <Image
          path="/general/avatar.png"
          alt="avatar"
          width={100}
          height={100}
          tr
        />
      </div>
      {/* others */}
      <div className="flex-1 flex flex-col gap-4">
        <input
          name="desc"
          type="text"
          placeholder="What is happening?!"
          className="bg-transparent outline-none placeholder-text-textGrey text-xl"
        />
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <input
              type="file"
              hidden
              onChange={handleMediaChange}
              id="file"
              name="file"
            />
            <label htmlFor="file">
              <Image
                path="/icons/image.svg"
                alt="image"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </label>

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
              className="cursor-pointer"
            />
          </div>
          <button className="bg-white text-black font-bol rounded-full py-2 px-4">
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default Share;
