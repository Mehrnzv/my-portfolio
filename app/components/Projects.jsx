"use client";
import React, { useRef } from "react";
import { ProjectData } from "../constants/data";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="lg:py-24" id="projects">
      <h2 className="text-center text-4xl font-bold mt-12 lg:mt-0 text-white mb-8 md:mb-12">
        My Projects
      </h2>
      <ul
        ref={ref}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
      >
        {ProjectData.map((project, index) => (
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={index}
              title={project.title}
              desc={project.desc}
              imgUrl={project.image}
              gitUrl={project.path}
              stack={project.stack}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
