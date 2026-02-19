import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
  R,
  Javascript,
  Trakm,
  Concrete,
  Lexer
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Javascript", icon: Javascript },
  { title: "R", icon: R },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "AI/ML Security Intern",
    company_name: "Maungo craft",
    icon: eduskill,
    iconBg: "#161329",
    date: "Jun 2025 - Aug 2025",
    points: [
      "Acquired hands-on knowledge of automation, delving into security for ai systems.",
      "also building on a solid foundation in Machine Learning, covering topics like algorithms, data analysis, and model building.",
    ],
  },
  
];

export const projects = [
  {
    name: "Neighbourhood watch app",
    description:
      "A user facing mobile app for a neighbourhood watch group with a web based admin dashboard",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "React-native", color: "green-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
    ],
    image: Trakm,
    source_code_link: "https://github.com/ReaSetilo/NeigbourhoodWatchApp3",
  },
  {
    name: "Concrete property prediction System",
    description:
      "A web based machine learning platform that allows users to type different ash types that will be used in a concrete mix, then gives expected slump, cost, and carbon dioxide emissions  ",
    tags: [
      { name: "AI/ML", color: "blue-text-gradient" },
      { name: "python", color: "green-text-gradient" },
      { name: "engineering", color: "pink-text-gradient" },
    ],
    image: Concrete,
    source_code_link: "https://github.com/ReaSetilo/Concrete-property-prediction",
  },
  {
    name: "Setswana compiler",
    description:
      "A CLI based project that takes an input sentence then determines if it is grammatically correct setswana",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "NLP", color: "green-text-gradient" },
      { name: "compiler theory", color: "pink-text-gradient" },
    ],
    image: Lexer,
    source_code_link:
      "https://github.com/ReaSetilo/Setswana-lexical-analyzer-and-compiler",
  },
];
