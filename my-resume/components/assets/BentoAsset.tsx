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
          <ul className="mt-2 text-sm leading-relaxed">
            <li>Elastic Compute Cloud </li>
            <li>Simple Storage Service</li>
            <li>Dynamo DB</li>
            <li>Cognito Service</li>
            <li>Elastic Container registry</li>
            {/* Add more AWS services */}
          </ul>
        </div>
      )}
      {selectedCloud === 'Azure' && (
        <div className="p-2 rounded-md">
          <ul className="mt-2 text-sm leading-relaxed">
            <li>Azure Virtual Machines</li>
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
    <div className="flex flex-col w-full gap-9 max-h-[30rem] overflow-y-auto">
      <LanguageBar language="Express" familiarityPercentage={90} />
      <LanguageBar language="Nest" familiarityPercentage={90} />
      <LanguageBar language=".Net Stack" familiarityPercentage={80} />
      <LanguageBar language="OracleSQL" familiarityPercentage={95} />
      <LanguageBar language="MongoDB" familiarityPercentage={80} />
      <LanguageBar language="MySQL" familiarityPercentage={75} />
      <LanguageBar language="Angular" familiarityPercentage={75} />
      <LanguageBar language="Next" familiarityPercentage={70} />
    </div>
  );

const Skeleton4 = () => {
    return (
        <div className="flex flex-col w-full gap-4">
            <div className="text-sm">
                Learned how to dockerize the project and building CI/CD pipelines on Github.
            </div>
            <div className="text-sm">
                Helped another data scientist in data cleaning and data modelling using Pandas, Scikit-Learn, and more Python Packages.
            </div>
            <div className="text-sm">
                Learned how to write trigger, package, function, procedure in OracleSQL by using PL/SQL. Successfully implemented triggers in MongoDB at work.
            </div>
            <div className="text-sm">
                Convinced the external stakeholder that his sudden idea is not possible to implement within the existing time frame during coop. 
            </div>
            <div className="text-sm">
                Proficient in interpreting and assessing 3rd-party API (REST/GraphQL) and webhook documentation.
            </div>
      </div>
    );
  };
const items = [
  {
    title: "Coding Languages",
    description: "Honest rating about my coding skills and proficiency levels",
    header: <Skeleton1 />,
    className: "md:col-span-2 p-6",
  },
  {
    title: "Cloud Tools",
    description: "Eager to experiment",
    header: <Skeleton2 />,
    className: "md:col-span-1 p-6",
  },
  {
    title: "Web Development Frameworks",
    description: "Know why, and know how.",
    header: <Skeleton3 />,
    className: "md:col-span-1 p-6",
  },
  {
    title: "More than just a developer",
    description:"Can handle various tasks depending on the team needs",
    header: <Skeleton4 />,
    className: "md:col-span-2 p-6",
  },
];
