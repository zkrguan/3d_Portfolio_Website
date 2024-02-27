"use client";
import { SparklesPreview } from "@/components/assets/SparklesAsset";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import "./page.css";

export default function Home() {
  return (
    <main>
      <div>
        <SparklesPreview />
      </div>
      <div>
        {/* Your new content goes here */}
        <h1>Welcome to the new content!</h1>
      </div>
    </main>
  );
}
