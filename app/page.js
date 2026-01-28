"use client";

import { offers } from "@/app/offers";
import { useState } from "react";
import { getOfferByIndex } from "./utils";

export default function Home() {
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);

  function handleChangeOffer() {
    const nextIndex = getOfferByIndex();
    if (nextIndex === currentOfferIndex) {
      handleChangeOffer();
    } else {
      setCurrentOfferIndex(nextIndex);
    }
  }

  return (
    <div className="bg-black justify-center items-center flex flex-col  gap-8 p-4 h-screen">
      <h1 className=" px-4 py-4 text-3xl md:text-8xl text-center text-white">
        Welcome to Tesla World!
      </h1>
      <div className="  w-full max-w-3xl p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg flex flex-col items-center text-center shadow-2xl transition-all duration-300 hover:bg-white/10">
        <p className=" text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white mb-4">
          {offers[currentOfferIndex].title}
        </p>
        <span className="text-lg text-gray-300 leading-relaxed max-w-xl">
          {offers[currentOfferIndex].description}
        </span>
      </div>

      <button
        onClick={handleChangeOffer}
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition"
      >
        What Else?
      </button>
    </div>
  );
}
