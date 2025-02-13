import Link from "next/link";
import React from "react";
import Image from "./Image";

const Recommendations = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGrey flex flex-col gap-4">
      {/* user card */}
      <div className="flex items-center justify-between">
        {/* image and user info */}
        <div className="flex items-center gap-2">
          <div className="relative rounded-full overflow-hidden w-10 h-10">
            <Image
              path="general/avatar.png"
              alt="john doe"
              width={100}
              height={100}
              tr
            />
          </div>
          <div>
            <h1 className="text-md font-bold">John Doe</h1>
            <span className="text-textGrey text-sm">@johnDoe</span>
          </div>
        </div>
        {/* button */}
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
          Follow
        </button>
      </div><div className="flex items-center justify-between">
        {/* image and user info */}
        <div className="flex items-center gap-2">
          <div className="relative rounded-full overflow-hidden w-10 h-10">
            <Image
              path="general/avatar.png"
              alt="john doe"
              width={100}
              height={100}
              tr
            />
          </div>
          <div>
            <h1 className="text-md font-bold">John Doe</h1>
            <span className="text-textGrey text-sm">@johnDoe</span>
          </div>
        </div>
        {/* button */}
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
          Follow
        </button>
      </div><div className="flex items-center justify-between">
        {/* image and user info */}
        <div className="flex items-center gap-2">
          <div className="relative rounded-full overflow-hidden w-10 h-10">
            <Image
              path="general/avatar.png"
              alt="john doe"
              width={100}
              height={100}
              tr
            />
          </div>
          <div>
            <h1 className="text-md font-bold">John Doe</h1>
            <span className="text-textGrey text-sm">@johnDoe</span>
          </div>
        </div>
        {/* button */}
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
          Follow
        </button>
      </div><div className="flex items-center justify-between">
        {/* image and user info */}
        <div className="flex items-center gap-2">
          <div className="relative rounded-full overflow-hidden w-10 h-10">
            <Image
              path="general/avatar.png"
              alt="john doe"
              width={100}
              height={100}
              tr
            />
          </div>
          <div>
            <h1 className="text-md font-bold">John Doe</h1>
            <span className="text-textGrey text-sm">@johnDoe</span>
          </div>
        </div>
        {/* button */}
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
          Follow
        </button>
      </div>
      <Link href="/" className="text-iconBlue">
        Show More
      </Link>
    </div>
  );
};

export default Recommendations;
