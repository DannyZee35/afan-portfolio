import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="mt-20">
      <Image
        src={"/Star6.svg"}
        width={400}
        height={400}
        className="absolute top-[-9%]  right-0   -z-10"
      />

      <h1 className="font-bold text-[42px] text-white w-[1200px]">
        I help developers become{" "}
        <span className="text-primary">problem-solvers</span> with{" "}
        <span className="text-primary">Programming</span> and{" "}
        <span className="text-primary">Artificial <br/>Intelligence.</span>
      </h1>
      <div className="flex items-end justify-between  gap-10 -mt-[100px]">
        {/* 1st main flex section */}
        <div className="bg-card p-5 rounded-xl w-[650px] flex flex-col gap-3 relative">
          <Image
            src={"/cube2.png"}
            width={48}
            height={51}
            className="absolute  top-2 right-2"
          />

          <div className="flex items-start gap-5 relative ">
            <Image src={"/cloud.svg"} width={300} height={100} className="z-10"/>
            <div className="p-4 bg-transparentCard rounded-xl bg-opacity-60  z-10">
              <p className="text-[#FBFCFE] opacity-70 text-[12px]">
                Any fool can write code that a computer can understand. Good
                programmers write code that humans can understand.
              </p>
              <Image
                src={"/coma.png"}
                width={28}
                height={28}
                className="z-50 absolute bottom-0 right-0"
              />
            </div>
          </div>
          <Image
            src={"/circle.png"}
            height={150}
            width={150}
            className="absolute   top-[23%] left-[40%]  right-0"
          />

          <div className="flex items-start gap-5 z-10">
            <button class="bg-button-image flex w-full items-center justify-between gap-3 text-[#FBFCFE] text-[18px] font-medium p-7 px-8 rounded-xl">
              My Button
              <span className=" ">
                <Image src={"/call.png"} height={15} width={15} />
              </span>
            </button>
            <Image src={"/tweet.png"} height={70} width={400} />
          </div>
        </div>
        {/* 2nd main flex section */}
        <div className="bg-card rounded-xl relative w-[600px] ">
          <div className="relative w-[370px] h-[370px]">
            <Image src={"/profile.png"} layout="fill" className="" />
          </div>
          <Image
            src={"/circle2.png"}
            width={120}
            height={120}
            className="absolute top-[22%]  left-[45%] right-auto  "
          />
            <Image
            src={"/cube1.png"}
            width={90}
            height={90}
            className="absolute top-[35%]  left-auto -right-2  "
          />
          <div className="absolute top-[8%] right-auto  left-[50%] ">
            <div className=" p-4 mb-5 bg-transparentCard rounded-xl bg-opacity-60  z-10 flex items-center flex-col justify-between gap-5">
              <div className="flex items-center justify-between gap-5">
                <div className="bg-[#04060B] h-[40px] w-[40px] rounded-full"></div>
                <div className="bg-[#04060B] h-[40px] w-[40px] rounded-full"></div>
                <div className="bg-[#04060B] h-[40px] w-[40px] rounded-full"></div>{" "}
                <div className="bg-[#04060B] h-[40px] w-[40px] rounded-full"></div>
              </div>
              <div className="flex items-center justify-between gap-5">
                <div className="bg-[#04060B] h-[40px] w-[40px] rounded-full"></div>
                <div className="bg-[#04060B] h-[40px] w-[40px] rounded-full"></div>
                <div className="bg-[#04060B] h-[40px] w-[40px] rounded-full"></div>{" "}
                <div className="bg-[#04060B] h-[40px] w-[40px] rounded-full"></div>
              </div>
            </div>
            <div className="p-4 bg-transparentCard rounded-xl bg-opacity-60  z-10 flex items-center flex-col justify-between gap-5">
              <div>
                <h2 className="text-[16px] font-bold text-[#FBFCFE] inline me-10">
                  Location
                </h2>
                <h2 className="text-[16px] font-bold text-[#FBFCFE] inline  ">
                  Mumbai, India
                </h2>
              </div>
              <Image src={"/map.png"} height={90} width={150} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
