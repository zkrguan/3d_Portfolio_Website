"use client";
import React, { useEffect, useState } from "react";
import { SparklesPreview } from "@/components/assets/SparklesAsset";
import "./page.css";
import { BentoGridAsset } from "@/components/assets/BentoAsset";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // You can adjust this value according to your design
      const threshold = 200; // Adjust this value as needed
      setIsScrolled(scrollPosition > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <div className={isScrolled ? "blurred" : ""}>
        <SparklesPreview />
      </div>
      <div className="centeredComponent">
        <BentoGridAsset />
      </div>
    </main>
  );
}
