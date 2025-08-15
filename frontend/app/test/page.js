"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Test() {
  const imgarr = ["/gb1.webp", "/gb2.webp"];
  const [currentindex, setCurrentindex] = useState(0);
  useEffect(()=>{
   const timer=  setInterval(()=>{
   setCurrentindex((prev)=> prev >=imgarr.length-1 ? 0 : prev+1)
},3000)
return ()=> {clearInterval(timer)}
  },[currentindex])

  return (
    <div className=" flex flex-col gap-10">
     <div className="relative w-[500px] h-[500px]"> {imgarr.map((el, i) => (
        <div key={i} className={` absolute  w-full h-full transition-opacity duration-1000  ${i==currentindex ? "opacity-100 " : " opacity-0"}`}>
          {" "}
          <Image
            src={el}
            width={600}
            height={400}
            alt="testing"
            className="w-full h-full object-cover"
          />
        </div>
        
      ))}</div>
      <div className="flex gap-20"><button>Prev</button>
      <button onClick={()=>{currentindex >= imgarr.length-1 ? setCurrentindex(0) : setCurrentindex((prev)=> prev+1)}}>Next</button></div>
    </div>
  );
}
