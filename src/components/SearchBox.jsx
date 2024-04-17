"use client";
import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";
export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(term == ''){
        toast(
            <span className="flex justify-center items-center gap-2">
              <Image
                src="/Images/NothingToSearch.svg"
                alt="Nothing to search"
                width={30}
                height={30}
                style={{height:"auto"}}
                className=""
              />
              <span>Nothing to search !</span>
            </span>,
            { id: "Nothing to search" }
          );
    }
    router.push(`/search/web?searchTerm=${term}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl  items-center "
    >
      <input
        type="text"
        className="focus:outline-none w-full focus:shadow-sm transition-shadow"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <RxCross2
        className=" text-2xl text-gray-500 cursor-pointer sm:mr-2"
        onClick={() => setTerm("")}
      />
      <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 border-l-2 border-gray-300 mr-3 pl-4 cursor-pointer" />
      <AiOutlineSearch
        className="text-2xl hidden sm:inline-flex text-blue-500 cursor:pointer "
        onClick={handleSubmit}
      />
    </form>
  );
}
