import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full p-[1px] rounded-[10px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="h-64 rounded-[10px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col shadow-lg"
        style={{
          background:
            "linear-gradient(-135deg,  #aebcbf 0%,#aebcbf 43%,#0a0e0a 10%,#0a0809 100%)",
        }}
      >
        <img
          src={icon}
          alt="web-development"
          className="w-[85px] h-[85px] object-contain filter brightness-110"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2
          className={styles.sectionHeadText}
          style={{ fontFamily: "Edu NSW ACT Foundation, sans-serif" }}
        >
          Overview.
        </h2>
      </motion.div>

      <div className="flex gap-16 items-center mt-2">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[17px] max-w-2xl leading-[37px] mt-[-50px]"
        >
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p>
        <motion.img
          variants={fadeIn("", "", 0.1, 1)}
          src="../mine.png"
          alt="Your alt text"
          className=" ml-24 items-center w-[350px] h-[350px] rounded-full mb-28"
        />
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
