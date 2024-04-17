"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";
const SearchHeaderOptions = () => {
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get("searchTerm");
    const router = useRouter();
    const handleTabSwitch = (tab) =>{
        router.push(`/search/${tab === 'Images' ? "images" : "web"}?searchTerms=${searchTerm}`)
    }
  return (
    <div className="flex space-x-2 select-none border-b justify-center w-full lg:justify-start lg:pl-52 text-gray-700 text-sm">
      <div className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathName == "/search/web" && "!text-blue-600 !border-blue-600"}`} onClick={() => handleTabSwitch("All")}>
        <AiOutlineSearch className="text-md " />
        <p>All</p>
      </div>
      <div className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathName == "/search/images" && "!text-blue-600 !border-blue-600"}`} onClick={() => handleTabSwitch("Images")}>
        <p>Images</p>
      </div>
    </div>
  )
}

export default SearchHeaderOptions
