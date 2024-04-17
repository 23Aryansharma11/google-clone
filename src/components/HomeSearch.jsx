"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
export default function HomeSearch() {
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
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
      return;
    }
    router.push(`/search/web?searchTerm=${input}`);
  };

  const randomSearch = async (e) => {
    e.preventDefault();
    setRandomSearchLoading(true);
    const randomWord = await fetch(`https://random-word-api.herokuapp.com/word`)
      .then((res) => res.json())
      .then((data) => data[0])
      .catch((error) => console.log(error));
    console.log(randomWord);
    if (!randomWord) return;
    setRandomSearchLoading(false);
    router.push(`/search/web?searchTerm=${randomWord}`);
  };
  return (
    <>
      <form
        className=" flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
        onSubmit={handleSubmit}
      >
        <AiOutlineSearch
          className=" text-xl text-gray-500 mr-3"
          onClick={handleSubmit}
        />
        <input
          type="text"
          className=" flex-grow focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className=" flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4">
        <button
          className=" bg-[#F8F9FA] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow"
          onClick={handleSubmit}
        >
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          className={`bg-[#F8F9FA] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow ${
            randomSearchLoading && "animate-spin"
          } disabled:opacity-80 disabled:shadow-sm`}
          onClick={randomSearch}
        >
          {randomSearchLoading ? "Searching.." : "I am feeling lucky"}
        </button>
      </div>
    </>
  );
}
