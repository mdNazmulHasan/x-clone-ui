import Feed from "@/components/Feed";
import Image from "@/components/Image";
import Share from "@/components/Share";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <div className="px-4 pt-4 flex justify-between text-textGrey font-bold border-b-[1px] border-borderGrey">
        <Link
          className="pb-3 flex items-center border-b-4 border-iconBlue"
          href="/"
        >
          For you
        </Link>
        <Link className="pb-3 flex items-center " href="/">
          Following
        </Link>{" "}
        <Link className="pb-3 flex items-center " href="/">
          React js
        </Link>{" "}
        <Link className="pb-3 flex items-center " href="/">
          JavaScript
        </Link>{" "}
        <Link className="pb-3 flex items-center " href="/">
          CSS
        </Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
};

export default HomePage;
