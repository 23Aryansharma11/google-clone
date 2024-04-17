import ImageSearchResult from "C/ImageSearchResult";
import WebSearchResult from "C/WebSearchResult"; 
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ImageSearchPage = async ({ searchParams }) => {
  const startIndex = searchParams?.start || 1;
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
  );
  if (!response.ok) throw new Error("Something went wrong");
  const data = await response.json();
  const results = data.items;
  if (!results) {
    return (
      <div className="flex flex-col justify-center text-center items-center ">
        <Image
          src="/Images/BoredMan.svg"
          alt="Bored man"
          width={500}
          height={100}
          style={{ width: "auto", maxWidth: "500px" }}
        />
        <h1 className=" text-2xl font-semibold">No result found for</h1>
        <span className=" text-lg font-medium"> {searchParams.searchTerm}</span>
        <p className="text-lg text-center">
          Try searching for Something else
          <Link
            className="text-blue-500 cursor-pointer hover:underline ml-2"
            href="/"
          >
            Home
          </Link>
        </p>
      </div>
    );
  }
  return (
    <div>
      <ImageSearchResult results={data} />
    </div>
  );
};

export default ImageSearchPage;
