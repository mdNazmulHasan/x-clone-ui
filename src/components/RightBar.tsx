import React from "react";
import Search from "./Search";
import PopularTags from "./PopularTags";
import Recommendations from "./Recommendations";
import Link from "next/link";

const RightBar = () => {
  return (
    <div>
      <Search />
      <PopularTags />
      <Recommendations />
      <div>
        <Link href="/">Terms of Service</Link>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Terms of Service</Link>
        <span>© 2025 Nazmul Hasan</span>
      </div>
    </div>
  );
};

export default RightBar;
