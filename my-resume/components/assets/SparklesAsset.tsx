"use client";
import React from "react";
import { SparklesCore } from "../aceternity-ui-components/sparkles";

export function SparklesPreview() {
  return (
    // h-[60rem] this setting will affect the height of the starry pages
    <div className="h-[75rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={200}
          className="w-full h-full"
          particleColor="#0582f7"
        />
      </div>
      <h3 className="md:text-7xl text-3xl lg:text-3xl text-center text-white relative z-10 mb-20">
        There are 2 trillion planets in this universe,
      </h3>
      <h3 className="md:text-7xl text-3xl lg:text-3xl text-center text-white relative z-10 mb-20">
        and 8.1 billion human beings on this planet.
      </h3>
      <h3 className="md:text-7xl text-3xl lg:text-3xl text-center text-white relative z-10 mb-20">
        Hello and nice to meet you,stranger. My name is.
      </h3>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20 mb-10">
        Roger Guan 
      </h1>
    </div>
  );
}
