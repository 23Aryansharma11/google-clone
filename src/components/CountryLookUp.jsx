"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function CountryLookUp() {
  const [location, setLocation] = useState("India");
  const APIkey = process.env.NEXT_PUBLIC_API_KEY;
  function getLocationInfo(latitude, longitude) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C${longitude}&key=${APIkey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status.code === 200) {
          setLocation(data.results[0].components.country);
        } else {
          toast(
            <span className="flex justify-center items-center gap-2">
              <Image
                src="/Images/CannotFetch.svg"
                alt="Nothing to fetch"
                width={30}
                height={30}
                style={{height:"auto"}}
                className=""
              />
              <span>Cannot fetch Your Country!</span>
            </span>,
            { id: "Nothing to search" }
          );
        }
      })
      .catch((error) => console.error(error));
  }

  function success(pos) {
    var crd = pos.coords;
    getLocationInfo(crd.latitude, crd.longitude);
  }
  function errors(err) {
    console.log(err?.message);
  }
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
//   ! Turn it on when you want to use it.
//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.permissions
//         .query({ name: "geolocation" })
//         .then(function (result) {
//           if (result.state === "granted") {
//             navigator.geolocation.getCurrentPosition(success, errors, options);
//           } else if (result.state === "prompt") {
//             navigator.geolocation.getCurrentPosition(success, errors, options);
//           } else if (result.state === "denied") {
//             //If denied then you have to show instructions to enable location
//           }
//         });
//     } else {
//       console.log("Geolocation is not supported by this browser.");
//     }
//   }, []);

  return <div className="">{location}</div>;
}
