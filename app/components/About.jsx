"use client";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";
import { Tab_DATA } from "../constants/data";

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending ,startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about">
      <div className="flex flex-col md:flex-row justify-between">
        <Image
          src="/images/about-image.png"
          className="w-full object-cover md:w-2/5"
          alt="about"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm a frontend developer with a passion for creating interactive and
            responsive web applications. I'm a quick learner and I'm always
            looking to expand my knowledge and skill set. I'm a team player and
            I'm excited to work with others to create amazing applications.
          </p>
          <div className="flex space-x-3 mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-8" >
            {Tab_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
