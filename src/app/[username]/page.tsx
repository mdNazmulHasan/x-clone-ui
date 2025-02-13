import Image from "@/components/Image";
import Link from "next/link";
import React from "react";

const UserPage = () => {
  return (
    <div>
      {/* profile title */}
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
        <Link href="/">
          <Image path="icons/back.svg" alt="back" width={24} height={24} />
          <h1>nazmul</h1>
        </Link>
      </div>
      <Image path="general/cover.jpg" alt="cover" width={600} height={600} />
    </div>
  );
};

export default UserPage;
