

export async function downloadImage(filename: string) {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URI}/${filename}`,
  );
const blob= await res.blob()
const namearr= filename.split("-")
console.log(namearr[namearr.length-1])
const file=  new File([blob], namearr[namearr.length-1], {type:blob.type})
return file
}

