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
    <div className="w-[500px] h-[400px] flex">
      {imgarr.map((el, i) => (
        <div key={i} className={`${i==currentindex ? "block" : "hidden"}`}>
          {" "}
          <Image
            src={el}
            width={600}
            height={400}
            alt="testing"
            className="w-full h-full object-cover"
          />
        </div>
        
      ))}
      <div className="flex gap-20"><button>Prev</button>
      <button onClick={()=>{currentindex >= imgarr.length-1 ? setCurrentindex(0) : setCurrentindex((prev)=> prev+1)}}>Next</button></div>
    </div>
  );
}
