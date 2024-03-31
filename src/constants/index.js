import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  omnifood,
  meta,
  refine,
  clone,
  dalle,
  tesla,
  shopify,
  threejs,
  omnifoodLogo,
  openai,
  three,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact Me",
  },
];

const services = [
  {
    title: "MERN-Stack",
    icon: web,
  },
  {
    title: "Software Engineering",
    icon: mobile,
  },
  {
    title: "Linux & Bash Scrpting",
    icon: backend,
  },
  {
    title: "Prototyping & Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Omnifood",
    icon: omnifoodLogo,
    iconBg: "#FDF2EA",
    date: "Feb 2023 - March 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Codex ChatGPI Clone",
    icon: openai,
    iconBg: "#fff",
    date: "Jan 2023 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer Portfolio",
    company_name: "3D React Charts",
    icon: threejs,
    iconBg: "#fff",
    date: "Jan 2023 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "A-z proved me wrong by creating a website that was as beautiful as our product.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Starbucks",
    image: "../5.png",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients like A-z does.",
    name: "Dominic Altas",
    designation: "COO",
    company: "Omnifood",
    image: "../11.png",
  },
  {
    testimonial:
      "After A-z optimized our website, our traffic increased by 50%. We can't be more grateful!",
    name: "Badr mourid",
    designation: "CTO",
    company: "Real Estates",
    image: "../azzedine.png",
  },
];

const projects = [
  {
    name: "Blockchains",
    description:
      "Web-based prototype that allows users to search, book, and manage properties from various real estate agents.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: refine,
    source_code_link: "https://github.com/B-azeddine/blockchain_project",
    live_link: "https://main--anchouf.netlify.app/",
    youtube_link: "https://youtu.be/VjmmgBQXTbw",
  },
  {
    name: "We Travel",
    description:
      "Web application that enables people to create images by using the amazing DALL-E AI and share them with the community.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "css3",
        color: "pink-text-gradient",
      },
    ],
    image: dalle,
    source_code_link: "https://github.com/B-azeddine/We-Travel",
    live_link: "https://b-azeddine.github.io/We-Travel/",
    youtube_link: "https://youtu.be/-dip4Nep9vk",
  },
  {
    name: "Starbelly",
    description:
      "The smart AI food subscription that will make you eat healthy again. A fine prototype of healthy diet website.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "css3",
        color: "pink-text-gradient",
      },
    ],
    image: omnifood,
    source_code_link: "https://github.com/B-azeddine/Starbelly_Project",
    live_link: "https://main--starbely.netlify.app/",
    youtube_link: "https://www.youtube.com/@jagadeeshkoyya",
  },
  // {
  //   name: "Starbucks Clone",
  //   description: "A clone of the Starbucks website built using HTML5 & CSS3.",
  //   tags: [
  //     {
  //       name: "html",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: clone,
  //   source_code_link: "https://github.com/JagadeeshKJ/Starbucks-Clone",
  //   live_link: "https://starbucks-clone-ashy.vercel.app/",
  //   youtube_link: "https://www.youtube.com/@jagadeeshkoyya",
  // },
];

export { services, technologies, experiences, testimonials, projects };
