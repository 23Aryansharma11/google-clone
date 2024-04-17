import HomeSearch from "C/HomeSearch";
import HomeHeader from "C/HomeHeader";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
export default function Home() {
  return (
    <div className="">
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          src="/Images/GoogleIcon.svg"
          alt="Google-Icon"
          width={300}
          height={100}
          priority
          style={{ width: "auto", maxWidth: "250px" }}
        />
        <HomeSearch />
        <Toaster
          toastOptions={{
            duration: 900,
          }}
        />
      </div>
    </div>
  );
}
