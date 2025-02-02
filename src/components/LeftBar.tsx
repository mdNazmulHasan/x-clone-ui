import Link from "next/link";
import React from "react";
import Image from "./Image";

const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

const LeftBar = () => {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      <div className="flex flex-col gap-4 text-lg items-center 2xl:items-start">
        <Link
          href="/"
          className="p-2 hover:bg-[#181818] rounded-full cursor-pointer"
        >
          <Image path="icons/logo.svg" alt="logo" width={24} height={24} />
        </Link>
        <div className="flex flex-col">
          {menuList.map((menu) => (
            <Link href={menu.link} key={menu.id}>
              <div className="p-2 hover:bg-[#181818] rounded-full cursor-pointer flex items-center gap-4">
                <Image
                  path={`icons/${menu.icon}`}
                  alt={menu.name}
                  width={24}
                  height={24}
                />
                <span className="hidden 2xl:inline">{menu.name}</span>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/"
          className="bg-white text-black p-2 rounded-full font-bold w-12 h-12 items-center justify-center cursor-pointer 2xl:hidden"
        >
          <Image path="icons/post.svg" alt="post" width={24} height={24} />
        </Link>
        <Link
          href="/"
          className="hidden 2xl:block bg-white text-black p-2 rounded-full font-bold py-2 px-20 cursor-pointer"
        >
          Post
        </Link>
      </div>
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image path="/general/avatar.png" alt="avatar" width={100} height={100} tr />
          </div>
          <div className="hidden 2xl:flex flex-col ">
            <span className="font-bold ">nazmul</span>
            <span className="text-sm text-textGrey">@mdNazmulHasan</span>
          </div>
        </div>
        <div className="hidden 2xl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  );
};

export default LeftBar;
