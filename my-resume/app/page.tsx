"use client";
import React, { useEffect, useState } from "react";
import { SparklesPreview } from "@/components/assets/SparklesAsset";
import "./page.css";
import { BentoGridAsset } from "@/components/assets/BentoAsset";
import { TextGenerateEffectAsset } from "@/components/assets/TextGenerateAsset";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTextEffect, setShowTextEffect] = useState(false); // New state to control rendering of TextGenerateEffectAsset

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // You can adjust this value according to your design
      const threshold = 200; // Adjust this value as needed
      setIsScrolled(scrollPosition > threshold);

      // If the user has scrolled past the threshold and TextGenerateEffectAsset is not yet shown, set showTextEffect to true
      if (scrollPosition > threshold && !showTextEffect) {
        setShowTextEffect(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showTextEffect]); // Added showTextEffect as a dependency

  return (
    <main>
      <div className={isScrolled ? "blurred" : ""}>
        <SparklesPreview />
      </div>
      <div className="container">
        <div className="text-container">
          {showTextEffect && <TextGenerateEffectAsset />}
        </div>
        <div className="bento-container" style={{ paddingBottom: '5em' }}>
          <BentoGridAsset />
        </div>
        <div className="bottom-text" style={{ textAlign: 'center', paddingBottom:'10em'}}>
          <a href="https://github.com/zkrguan">This project is done only in one day. Click me to discover more projects that I spent weeks or even months on GitHub</a>
        </div>
      </div>
    </main>
  );
}
