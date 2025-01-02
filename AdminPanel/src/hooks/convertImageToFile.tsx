

export async function downloadImage(filename: string) {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URI}/${filename}`,
  );
const blob= await res.blob()

const file=  new File([blob], filename.split("-")[1], {type:blob.type})
return file
}

