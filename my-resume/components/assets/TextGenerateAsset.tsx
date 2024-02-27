"use client";
import { TextGenerateEffect } from "../aceternity-ui-components/text-generate-effect";

const words = `A Swiss Army Knife like Developer, strong in server side programming and database tasks.\n A machine learning enthusiast passed AI-900 test certified by Azure \n A GIS hobbyist completed Micro-credential program from Eco-Canada, Esri Canada and Seneca College  `;

export function TextGenerateEffectAsset() {
  return <TextGenerateEffect words={words} />;
}
