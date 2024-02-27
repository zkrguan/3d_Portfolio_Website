import { cn } from "@/utils/cn";
import React, { useState } from "react";
import { BentoGrid, BentoGridItem } from "../aceternity-ui-components/bento-grid";

export function BentoGridAsset() {
  return (
    <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[25rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}

interface LanguageBarProps {
    language: string;
    familiarityPercentage: number;
}

const LanguageBar: React.FC<LanguageBarProps> = ({
    language,
    familiarityPercentage,
  }) => {
    return (
        <div className="language-bar">
          <div className="language-name">{language}</div>
          <progress value={familiarityPercentage} max={100}/>
        </div>
    );
  };




  const Skeleton1: React.FC = () => (
    <div className="flex flex-wrap w-full gap-5 p-2">
    <LanguageBar language="JS/TS" familiarityPercentage={80} />
    <LanguageBar language="C#" familiarityPercentage={75} />
    <LanguageBar language="C++" familiarityPercentage={70} />
    <LanguageBar language="Java" familiarityPercentage={65} />
    <LanguageBar language="C" familiarityPercentage={65} />
    <LanguageBar language="SQL" familiarityPercentage={80} />
    <LanguageBar language="Python" familiarityPercentage={60} />
    <LanguageBar language="R" familiarityPercentage={40} />
  </div>
  );

const Skeleton2 = () =>{
    const [selectedCloud, setSelectedCloud] = useState('AWS');

const handleCloudToggle = (cloud: string) => {
  setSelectedCloud(cloud);
};
return(
    <div className="flex flex-col w-full gap-9 max-h-[30rem] overflow-y-auto">
      <div className="flex justify-center gap-4">
      <button
        className={`p-1 rounded-md text-sm focus:outline-none ${
            selectedCloud === 'AWS' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
        }`}
        onClick={() => handleCloudToggle('AWS')}
        >
        AWS
        </button>
        <button
        className={`p-1 rounded-md text-sm focus:outline-none ${
            selectedCloud === 'Azure' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
        }`}
        onClick={() => handleCloudToggle('Azure')}
        >
        Azure
        </button>
      </div>
      {selectedCloud === 'AWS' && (
        <div className="p-2 rounded-md">
          <div>AWS</div>
          <ul className="mt-2">
            <li>Elastic Compute Cloud (EC2)</li>
            <li>Simple Storage Service (S3)</li>
            <li>Dynamo DB</li>
            <li>Cognito Service</li>
            {/* Add more AWS services */}
          </ul>
        </div>
      )}
      {selectedCloud === 'Azure' && (
        <div className="p-2 rounded-md">
          <div>Azure</div>
          <ul className="mt-2">
            <li>Virtual Machines</li>
            <li>Azure SQL Database</li>
            <li>Azure Cosmos Database</li>
            <li>Azure Machine Learning Kits</li>
            <li>Azure Web Services</li>
            {/* Add more Azure services */}
          </ul>
        </div>
      )}
    </div>
  );
}


const Skeleton3 = () => (
    <div className="flex flex-1 w-full h-full min-h-[10rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
      inside 
    </div>
  );

const Skeleton4 = () => (
<div className="flex flex-1 w-full h-full min-h-[10rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    inside 
</div>
);
const items = [
  {
    title: "Coding Languages",
    description: "Honest rating about my coding skills and proficiency levels",
    header: <Skeleton1 />,
    className: "md:col-span-2 p-6",
  },
  {
    title: "Cloud Platforms",
    description: "Eager to experiment",
    header: <Skeleton2 />,
    className: "md:col-span-1 p-6",
  },
  {
    title: "Web Development Frameworks",
    description: "Know why, and know how.",
    header: <Skeleton3 />,
    className: "md:col-span-1",
  },
  {
    title: "More than just a developer",
    description:"Can serve as a bridge between business and tech teams",
    header: <Skeleton4 />,
    className: "md:col-span-2",
  },
];
