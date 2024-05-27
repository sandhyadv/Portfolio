"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>Tailwind</li>
        <li>Bootstrap</li> 
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 sm:leading-loose">
     <li>
          <span className="text-transparent sm:text-xl bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">2019-2023</span>
          <br />
          <span className="span2">
            BE - Sri Venkateshwara College Of Engineering from VTU.
            <br />
            7.5 CGPA
          </span>
        </li>
        <li>
          <span className="text-transparent sm:text-xl bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">2017-2019</span>
          <br />
          <span className="span2">
            PUC - Anubhava Mantapa
            <br />
            76%
          </span>
        </li>
        <li>
          <span className="text-transparent sm:text-xl bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">2017</span>
          <br />
          <span className="span2">
            SSLC - Adarsha Vidyalaya
            <br />
            91.52%
          </span>
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2 sm:leading-loose">
     <li>
          <span className="text-transparent sm:text-xl bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">May 2022 – June 2022</span>
          <br />
          <span className="span2">
          Compsoft Technologies
          </span>
        </li>
        <li>
          <span className="text-transparent sm:text-xl bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">Oct 2022 – April 2023</span>
          <br />
          <span className="span2">
          Clarivate Analytics
          </span>
        </li>
        <li>
          <span className="text-transparent sm:text-xl bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">August 2023 – April 2024</span>
          <br />
          <span className="span2">
            ThinkJS 
          </span>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white bg-opacity-50" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, ReactJS, Redux, Node.js, Express,
            HTML, CSS, MongoDB, MySql, Rematch, Bootstrap, Tailwind, Next.js, Rsuit, MaterialUI and Git. 
            I am a quick learner and I am always looking to expand my knowledge and skill set. 
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
