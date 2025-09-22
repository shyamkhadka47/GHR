export async function getslider() {
  const res = await fetch(`${process.env.BACKEND_URL}/api/getallslider`, {
    next: { tags: ["sliders"] },
  });
  const data = await res.json();
  return data;
}
export async function getsitesettings() {
  const res = await fetch(`${process.env.BACKEND_URL}/api/sitesettings`, {
    next: { tags: ["sitesettings"] },
  });
  const data = await res.json();
  return data;
}

export async function getaboutus() {
  const res = await fetch(`${process.env.BACKEND_URL}/api/getaboutus`, {
    next: { tags: ["aboutus"] },
  });
  const data = await res.json();
  return data;
}

export async function getwhychooseus() {
  const res = await fetch(`${process.env.BACKEND_URL}/api/getallwhychooseus`, {
    next: { tags: ["whychooseus"] },
  });
  const data = await res.json();
  return data;
}
export async function getourteam() {
  const res = await fetch(`${process.env.BACKEND_URL}/api/getallourteam`, {
    next: { tags: ["ourteam"] },
  });
  const data = await res.json();
  return data;
}

export async function gettestimonials() {
  const res = await fetch(`${process.env.BACKEND_URL}/api/getalltestimonial`, {
    next: { tags: ["testimonials"] },
  });
  const data = await res.json();
  return data;
}
export async function getservices() {
  const res = await fetch(`${process.env.BACKEND_URL}/api/getallservices`, {
    next: { tags: ["services"] },
  });
  const data = await res.json();
  return data;
}

export async function getfaq() {
  const res = await fetch(`${process.env.BACKEND_URL}/api/getfaq`, {
    next: { tags: ["faq"] },
  });
  const data = await res.json();
  return data;
}
