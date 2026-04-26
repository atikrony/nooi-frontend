"use client";

import { useRouter } from "next/navigation";

function ArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function GetStartPage() {
  const router = useRouter();

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      {/* Left panel — form */}
      <div className="w-162 shrink-0 flex flex-col justify-center px-12 py-10 overflow-y-auto bg-white">
        <div className="flex flex-col items-center justify-center">
          <div className="w-48 h-12 mb-6 mr-23">
            <img src="/asset/Logo.png" alt="Logo" />
          </div>
          <div className="text-left mr-7">
            <h1 className="text-[#272E35] text-2xl font-inter font-bold">
              Welcome to nooi
            </h1>
            <p className="text-[#9EA8B3] text-base font-inter text-[14px]">
              Let's set up your profile
            </p>
          </div>
          <button
            type="button"
            onClick={() => router.push("/authpage/signin")}
            className="mt-8 mr-13 w-42 h-12 inline-flex gap-0 bg-[#1B5E5E] hover:bg-[#154646] text-white font-inter font-semibold  rounded-xl transition-colors cursor-pointer"
          >
            <span className="font-medium text-[20px] flex items-center pl-2.5">
              Get Started
            </span>
            <div className="w-10 h-10 bg-white text-[#1B5E5E] rounded-lg flex items-center justify-center mt-1 ml-3">
              <ArrowRight />
            </div>
          </button>
        </div>
      </div>

      {/* Right panel — masonry image gallery */}
      <div className="flex-1 overflow-hidden bg-[#1a1a1a]">
        <div className="columns-3 gap-1.5 p-1.5 [column-fill:balance]">
          {/* Column 1 items */}
          <div className="break-inside-avoid mb-1.5 w-full aspect-4/3 bg-[#f17e7e] rounded-sm" />
          <div className="break-inside-avoid mb-1.5 w-full aspect-3/2 bg-[#e2ff9d] rounded-sm" />
          <div className="break-inside-avoid mb-1.5 w-full aspect-3/2 bg-[#e2ff9d] rounded-sm" />
          <div className="break-inside-avoid mb-1.5 w-full aspect-3/4 bg-[#442d2d] rounded-sm" />
          {/* <div className="break-inside-avoid mb-1.5 w-full aspect-4/3 bg-[#1f0b0b] rounded-sm" /> */}
          {/* Column 2 items */}
          <div className="break-inside-avoid mb-1.5 w-full aspect-video bg-[#3a3a3a] rounded-sm" />
          <div className="break-inside-avoid mb-1.5 w-full aspect-2/3 bg-[#3a3a3a] rounded-sm" />
          <div className="break-inside-avoid mb-1.5 w-full aspect-4/3 bg-[#3a3a3a] rounded-sm" />
          <div className="break-inside-avoid mb-1.5 w-full aspect-square bg-[#3a3a3a] rounded-sm" />
          {/* Column 3 items */}
          <div className="break-inside-avoid mb-1.5 w-full aspect-3/2 bg-[#3a3a3a] rounded-sm" />
          <div className="break-inside-avoid mb-1.5 w-full aspect-2/3 bg-[#3a3a3a] rounded-sm" />
          <div className="break-inside-avoid mb-1.5 w-full aspect-4/3 bg-[#3a3a3a] rounded-sm" />
          <div className="break-inside-avoid mb-1.5 w-full aspect-3/2 bg-[#3a3a3a] rounded-sm" />
        </div>
      </div>
    </div>
  );
}
