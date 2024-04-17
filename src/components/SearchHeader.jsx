import Image from "next/image";
import Link from "next/link";
import SearchBox from "C/SearchBox";
import { TbGridDots } from "react-icons/tb";
import { RiSettings3Line } from "react-icons/ri";
import SearchHeaderOptions from "./SearchHeaderOptions";


const SearchHeader = () => {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center justify-between">
        <Link href="/">
          <Image
            src="/Images/GoogleIcon.svg"
            alt="Google-Icon"
            width={50}
            height={20}
            priority
            style={{ width: "auto", maxWidth: "120px" }}
          />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-2">
          <RiSettings3Line className="bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer"/>
          <TbGridDots className="bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer"/>
        </div>
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow ml-2">
            Sign In
          </button>
      </div>
      <SearchHeaderOptions />
    </header>
  );
};

export default SearchHeader;
