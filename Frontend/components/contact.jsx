import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-20 pb-20 px-[10%] md:px-[100px]">
      <div className="">
        {" "}
        <Image
          src={"/gb4.jpg"}
          alt="gokarna hillside resort"
          width={400}
          height={200}
          className=" object-cover w-auto h-auto"
          priority
        ></Image>
      </div>
      <div className="bg-white shadow-lg flex flex-col gap-5 px-20 py-5 border rounded-md">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-1.5 bg-[#82B440]" />
          <span className="text-[#82B440] text-sm font-medium tracking-wider">
            GET IN TOUCH
          </span>
        </div>

        <h2 className="text-2xl lg:text-[32px] font-bold mb-8">
          Marketing For The Digital Age
        </h2>

        <form className="flex flex-col justify-center gap-10">
          <div className=" flex flex-col md:flex-row justify-center items-center gap-10">
            <input
              type="text"
              placeholder="Your Name"
              className="  p-4 outline-none ring-offset-0 border rounded-md"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="  p-4 outline-none border rounded-md"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <input
              type="text"
              placeholder="Your Number"
              className="  p-4 outline-none ring-offset-0 border rounded-md"
            />
            <input
              type="text"
              placeholder="Subject"
              className="  p-4 outline-none border rounded-md"
            />
          </div>
          <textarea
            name=""
            id=""
            rows={6}
            className="border p-4 outline-none rounded-md w-full ring-0"
            placeholder="Your Message"
          ></textarea>
          <input
            type="submit"
            className="p-5 text-white text-lg bg-primaryColor rounded-md "
            value={"Submit"}
          />
        </form>
      </div>
    </div>
  );
}
