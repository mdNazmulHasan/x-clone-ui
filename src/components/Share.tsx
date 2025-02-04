"use client";
import React from "react";
import Image from "./Image";
import NextJSImage from "next/image";
import { shareAction } from "@/actions";
import ImageEditor from "./ImageEditor";

const Share = () => {
  const [media, setMedia] = React.useState<File | null>(null);
  const [isEditorOpen, setIsEditorOpen] = React.useState(false);
  const [settings, setSettings] = React.useState<{
    type: "original" | "wide" | `square`;
    sensitive: boolean;
  }>({
    type: "original",
    sensitive: false,
  });

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setMedia(e.target.files[0]);
    }
  };

  const previewUrl = media ? URL.createObjectURL(media) : "";

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
        {/* preview image */}
        {previewUrl && (
          <div className="relative rounded-xl overflow-hidden">
            <NextJSImage
              src={previewUrl}
              alt="preview"
              layout="responsive"
              width={600}
              height={600}
            />
            <div
              className="absolute top-2 left-2 bg-black bg-opacity-50 text-white py-1 px-4 rounded-full font-bold text-sm cursor-pointer"
              onClick={() => setIsEditorOpen(true)}
            >
              Edit
            </div>
          </div>
        )}
        {/* editor */}
        {isEditorOpen && previewUrl && (
          <ImageEditor
            onClose={() => setIsEditorOpen(false)}
            previewUrl={previewUrl}
            settings={settings}
            setSettings={setSettings}
          />
        )}
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
