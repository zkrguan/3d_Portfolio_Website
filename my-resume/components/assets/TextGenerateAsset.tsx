"use client";
import { TextGenerateEffect } from "../aceternity-ui-components/text-generate-effect";

const words = `A Swiss Army Knife-like developer, proficient in server side programming and database tasks.\n A machine learning enthusiast who has passed the AI-900 test and is certified by Azure. \n A GIS hobbyist completed Micro-credential program hosted by Eco-Canada, Esri Canada, and Seneca College.\n  `;

export function TextGenerateEffectAsset() {
  return <TextGenerateEffect words={words} />;
}
