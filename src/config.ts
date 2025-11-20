// Bulk import attendance images
const amModules = import.meta.glob("./assets/attendance/*.png", { eager: true });
const amImages = Object.keys(amModules)
  .sort()
  .map((key) => (amModules[key] as any).default) as any[];

// Bulk import attendance images
const attendanceModules = import.meta.glob("./assets/attendance/*.png", { eager: true });
const attendanceImages = Object.keys(attendanceModules)
  .sort()
  .map((key) => (attendanceModules[key] as any).default) as any[];

// Bulk import tenzro images
const tenzroModules = import.meta.glob("./assets/tenzro-nft/*.png", { eager: true });
const tenzroImg = Object.keys(tenzroModules)
  .sort()
  .map((key) => (tenzroModules[key] as any).default) as any[];

// Bulk import kolektiva images
const kolektivaModules = import.meta.glob("./assets/kolektiva/*.png", { eager: true });
const kolektivaImg = Object.keys(kolektivaModules)
  .sort()
  .map((key) => (kolektivaModules[key] as any).default) as any[];

// Bulk import wool images
const woolModules = import.meta.glob("./assets/wool/*.png", { eager: true });
const woolImg = Object.keys(woolModules)
  .sort()
  .map((key) => (woolModules[key] as any).default) as any[];

// Bulk import thumbnails images
const thumbnailsModules = import.meta.glob("./assets/thumbnails/*.png", { eager: true });
const thumbnailsImg = Object.keys(thumbnailsModules)
  .sort()
  .map((key) => (thumbnailsModules[key] as any).default) as any[];

const galleryModules = import.meta.glob("./assets/gallery/*.png", { eager: true });
const galleryImg = Object.keys(galleryModules)
    .sort()
    .map((key) => (galleryModules[key] as any).default) as any[];

// Import company logos
import manexusLogo from "./assets/company-logo/manexus-pfp.jpg";
import woolLogo from "./assets/company-logo/wool-pfp.jpeg";
import sprintLogo from "./assets/company-logo/sprint-pfp.jpeg";
import qadrLogo from "./assets/company-logo/qadr-pfp.jpeg";
import uiLogo from "./assets/education-logo/ui-pfp.jpeg";
import unpadLogo from "./assets/education-logo/logo-unpad.jpeg"
import pbaLogo from "./assets/education-logo/pelita_bangsa_academy_logo.jpeg"
import myskillLogo from "./assets/education-logo/myskillid_logo.jpeg"
import alphaStage from "./assets/gallery/gallery3.jpeg"


export interface ProjectImage {
  src: ImageMetadata;
  alt: string;
}

export interface Project {
  name: string;
  description: string;
  link?: string;
  skills: string[];
  thumbnail?: ImageMetadata;
  role?: string;
  timeline?: string;
  techStack?: string[];
  scope?: string;
  methodology?: string;
  tools?: string[];
  teamSize?: number;
  images?: ProjectImage[];
}

export interface Deliverable {
  title: string;
  thumbnail?: ImageMetadata;
  description: string;
  tagsDocument: string;
  URL: string;
}

export const siteConfig = {
  name: "Faris Abdurrahman",
  title: ["Product Manager", "Project Manager", "Head of Product & Technology"],
  description: "Portfolio website of Faris Abdurrahman - Product and Project Manager with 5+ years of experience",
  accentColor: "#1d4ed8",
  social: {
    email: "faris@manexus.xyz",
    linkedin: "https://www.linkedin.com/in/faris-abdurrahman/",
    twitter: "",
    github: "",
  },
  aboutMe:
    "Result driven Product & Project Manager with 5+ years of experience leading innovation in web and app development. Successfully delivered 20+ cross-industry projects by translating business needs into actionable product requirements and driving measurable gains in efficient speed. Experienced in aligning diverse teams, utilizing AI productivity tools, and managing stakeholders toward product growth vision.",
  skills: [
    "Product Strategy & Vision",
    "Agile Project Management (Scrum)",
    "Go-To-Market Strategy",
    "Business Analysis",
    "Product Growth",
    "Web3",
    "Blockchain",
    "AI",
    "Jira",
    "Confluence"
  ],
  projects: [

    {
      name: "AI Attendance System",
      description:
        "AI-powered attendance application streamlining student attendance management. Features QR code check-ins, geofencing validation, and AI-driven leave request analysis based on predefined criteria and behavioral patterns.",
      link: "https://docs.google.com/presentation/d/1p6oG3DArw-VbXnk_nxSM5nFOQaYjkQ6eIN9Hw1bK2uM/edit?usp=sharing",
      skills: ["Edutech", "HRIS", "HCMS", "Academic Management"],
      thumbnail: thumbnailsImg[2],
      role: "Product Manager",
      timeline: "Sept 2024 - Present",
      techStack: ["React", "Node.js", "OpenAI", "LangChain", "Redis", "Python", "PostgreSQL"],
      scope: "MVP Development & Launch",
      methodology: "Agile Scrum",
      tools: ["Jira", "Figma", "Confluence", "GitHub", "Vercel", "Jam Dev"],
      teamSize: 9,
      images: [
        { src: attendanceImages[2], alt: "AI Attendance Dashboard" },
        { src: attendanceImages[1], alt: "QR Code Check-in Interface" },
        { src: attendanceImages[0], alt: "Geofencing Validation" },
        { src: attendanceImages[3], alt: "Leave Request Analysis" },
        { src: attendanceImages[4], alt: "Attendance Reports" },
        { src: attendanceImages[5], alt: "Student Management" },
        { src: attendanceImages[6], alt: "Geofence" },
      ],
    },
    {
      name: "Talent Management Platform",
      description:
        "End-to-end profiling assessment and talent management platform empowering job seekers and companies. Features include assessment platform, schedule management, resume builder, job portal, and talent pool for efficient candidate-company matchmaking.",
      link: "https://wool.id",
      skills: ["Healthcare", "HRIS", "HCMS", "Talent Management"],
      thumbnail: thumbnailsImg[3],
      role: "Head of Product & Technology",
      timeline: "May 2023 - Sep 2025",
      techStack: ["TypeScript", "React", "Node.js", "PostgreSQL", "Redis"],
      scope: "Full Platform Development",
      methodology: "Agile Scrum",
      tools: ["Jira", "Confluence", "Figma", "Grafana", "Jenkins", "GitHub", "AWS"],
      teamSize: 10,
      images: [
        { src: woolImg[1], alt: "B2B Dashboard" },
        { src: woolImg[0], alt: "Wool Appointment" },
        { src: woolImg[2], alt: "DMHP Dashboard" },
      ],
    },
    {
      name: "Kolektiva (Real World Asset)",
      description:
        "Web3 platform for tokenizing and trading fractional real-world assets such as real estate properties and villas. Enables fractional investment through asset tokenization, making investment accessible to a wider audience.",
      link: "https://manexus.xyz",
      skills: ["Web3", "Blockchain", "RWA"],
      thumbnail: thumbnailsImg[0],
      role: "Product Manager",
      timeline: "Aug 2024 - Nov 2024",
      techStack: ["Solidity", "React", "Ethers.js", "ThirdWeb"],
      scope: "Hackathon MVP",
      methodology: "Agile (Scrum)",
      tools: ["Figma", "Remix IDE", "GitHub"],
      teamSize: 9,
      images: [
        { src: kolektivaImg[0], alt: "Kolektiva Asset Management" },
        { src: kolektivaImg[1], alt: "Tokenized Property List" },
        { src: kolektivaImg[2], alt: "Detail Property Interface" },
      ],
    },
    {
      name: "Tenzro AI-NFT",
      description:
        "AI-driven NFT platform redefining digital asset value and management. Features AI context embedding for enriched metadata, NFT minting, drops, marketplace, and comprehensive asset management tools.",
      link: "https://manexus.xyz",
      skills: ["Web3", "NFT", "AI", "Blockchain"],
      thumbnail: thumbnailsImg[1],
      role: "Product Manager",
      timeline: "Jan 2024 - Apr 2024",
      techStack: ["Next.js", "Solidity", "LangChain", "OpenAI", "ThirdWeb"],
      scope: "Product Research & MVP",
      methodology: "Agile Scrum",
      tools: ["Jira", "Figma", "Vercel", "GitHub"],
      teamSize: 7,
      images: [
        { src: tenzroImg[0], alt: "NFT Digital Collection Mobile" },
        { src: tenzroImg[1], alt: "NFT Profile" },
        { src: tenzroImg[2], alt: "AI Context Embedding" },
        { src: tenzroImg[3], alt: "AI Context Embedding Desktop" },
        { src: tenzroImg[4], alt: "NFT Preview" },
        { src: tenzroImg[5], alt: "NFT Collection" },
      ],
    },
    {
      name: "UI Grant Management",
      description:
        "Comprehensive grant management system for Universitas Indonesia streamlining the entire grant lifecycle. Features include proposal submission, review workflow, budget tracking, reporting, and administrative oversight for academic research funding.",
      link: "https://youtu.be/JyLGFUbdKug?si=BIBazC4SjaAgSmlD",
      skills: ["Edutech"],
      thumbnail: thumbnailsImg[7],
      role: "Project Manager",
      timeline: "April 2019 - Apr 2021",
      techStack: ["Node.js", "Vue.js", "SQL Server"],
      scope: "Full Development & Launch",
      methodology: "Waterfall",
      tools: ["VS Code", "Ms. SQL Server"],
      teamSize: 6,
      images: [
        { src: thumbnailsImg[7], alt: "Home Page" },
      ],
    },
    {
      name: "GLPI Asset Management",
      description:
        "IT asset management and helpdesk system built on GLPI framework for comprehensive infrastructure monitoring. Features include hardware inventory tracking, software license management, network mapping, and incident ticketing system for efficient IT operations.",
      link: "",
      skills: ["Asset Management"],
      thumbnail: thumbnailsImg[6],
      role: "Web Developer/System Administrator",
      timeline: "April 2022 - Jan 2023",
      techStack: ["php", "VMWare", "SQL"],
      scope: "Full Development & Administration",
      methodology: "Waterfall",
      tools: ["VS Code"],
      teamSize: 2,
      images: [
        { src: amImages[0], alt: "Dashboard" },
        { src: amImages[1], alt: "DFD" },
        { src: amImages[2], alt: "Network Map" },
      ],
    },
    {
      name: "LMS Nihongo",
      description:
        "WordPress-based learning management system for Japanese language education. Features include course modules, interactive lessons, progress tracking, quiz system, and multimedia content delivery for effective language learning experience.",
      link: "",
      skills: ["Learning Management System"],
      thumbnail: thumbnailsImg[9],
      role: "Web Developer",
      timeline: "2023",
      techStack: ["Wordpress", "PHP", "MySQL"],
      scope: "Full Development & Content Development",
      methodology: "Agile",
      tools: ["WP Admin", "VS Code", "Canva"],
      teamSize: 2,
      images: [
        { src: thumbnailsImg[6], alt: "Landing Page" },
      ],
    },
    // {
    //   name: "Wool AI Chatbot",
    //   description:
    //     "Next-generation WhatsApp chatbot powered by Large Language Models through Gemini API. Delivers intelligent conversations for support, product sales, and early-stage user engagement.",
    //   link: "https://#",
    //   skills: ["AI", "n8n", "LLM", "Gemini API"],
    //   thumbnail: thumbnail1,
    // },
  ],
  deliverables: [
    {
      title: "PRD: Medira AI Healthcare",
      thumbnail: thumbnailsImg[12],
      description: "Product requirements document for AI-powered healthcare platform, detailing features for patient management, diagnostic assistance, and healthcare workflow optimization.",
      tagsDocument: "Product Requirement Document",
      URL: "https://www.notion.so/Product-Research-MEDIRA-294a2641aa438077b212d8e9036fce83?source=copy_link",
    },
    {
      title: "PRD: AI Sales Force Automation (SFA)",
      thumbnail: thumbnailsImg[10],
      description: "Comprehensive PRD for AI-driven sales force automation platform with canvassing capabilities, route optimization, inventory integration, and intelligent sales analytics.",
      tagsDocument: "Product Requirement Document",
      URL: "https://www.notion.so/PRD-SFA-Canvassing-App-for-Sales-and-Inventory-Integration-2b1a2641aa43814ebbf5e211441a0eec?source=copy_link",
    },
    {
      title: "PRD: Flash Sale ABC eCommerce",
      thumbnail: thumbnailsImg[11],
      description: "Comprehensive product requirements document for implementing flash sale functionality in eCommerce platform, including user flows, technical specifications, and success metrics.",
      tagsDocument: "Product Requirement Document",
      URL: "https://www.notion.so/PRD-SFA-Canvassing-App-for-Sales-and-Inventory-Integration-2b1a2641aa43814ebbf5e211441a0eec?source=copy_link",
    },
    {
      title: "TSD: IoT Smartfeeder",
      thumbnail: thumbnailsImg[13],
      description: "Technical specification document detailing the architecture and implementation approach for Biofloc monitoring system in eFishery's aquaculture platform.",
      tagsDocument: "Technical Specification Document",
      URL: "https://drive.google.com/file/d/1bXP9uOgKNPuIKWUxFX_gmFak7KRAxzWl/view?usp=sharing",
    },
    {
      title: "GTM: Crypto Project to Indonesia",
      thumbnail: thumbnailsImg[8],
      description: "Strategic go-to-market plan for launching cryptocurrency project in Indonesian market, including market analysis, regulatory compliance, user acquisition strategy, and localization approach.",
      tagsDocument: "Go To Market Strategy",
      URL: "https://drive.google.com/file/d/1bXP9uOgKNPuIKWUxFX_gmFak7KRAxzWl/view?usp=sharing",
    },
    {
      title: "Business Proposal: Gooroo",
      thumbnail: thumbnailsImg[5],
      description: "Comprehensive business proposal for educational technology platform connecting students with qualified tutors, including market opportunity, business model, financial projections, and implementation roadmap.",
      tagsDocument: "Business Proposal",
      URL: "https://drive.google.com/file/d/0B2O5_zbfqNxYSHctRTJISTBIY2M/view?usp=sharing&resourcekey=0-Yaw3eESggrSvK0rsc0JDXA",
    },
  ],
  experience: [
    {
      company: "Manexus Pte. Ltd.",
      title: "Product Manager",
      dateRange: "May 2024 - Present",
      logo: manexusLogo,
      bullets: [
        "Secured 2nd place at ETH Southeast Asia Hackathon during Coinfest Asia, Bali 2024, showcasing innovation and technical expertise",
        "Led coordination with remote, cross-cultural team of 9 members, driving effective communication and collaboration across geographies",
        "Executed product research, prioritized feature development, designed architecture, UIUX analysis, and quality standards for 3+ products",
        "Delivered persuasive presentations to stakeholders, pitched to potential clients, investors, and strategic partners",
      ],
    },
    {
      company: "Wool.id",
      title: "Head of Product & Technology",
      dateRange: "May 2023 - Sep 2025",
      logo: woolLogo,
      bullets: [
        "Defined and executed long-term product vision and roadmaps, driving revenue growth through the launch of 10+ innovative products",
        "Managed end-to-end product development lifecycle, translating requirements into 100+ user stories, backlogs, and test cases",
        "Guided cross-functional teams of 10+ members, including designers, developers, and product specialists",
        "Owned talent acquisition process from resume screening through final hiring decisions, building high-performing product teams",
      ],
    },
    {
      company: "Sprint Asia Technology",
      title: "Product and Project Management Consultant",
      dateRange: "Dec 2024 - Mar 2025",
      logo: sprintLogo,
      bullets: [
        "Streamlined development workflows and project management across 5+ projects by optimizing Jira and Confluence processes",
        "Trained 30+ company employees through interactive workshops on Scrum Agile methodologies",
        "Accelerated PRD and BRD production by 2x through strategic analysis and leveraging AI technologies",
        "Fostered continuous improvement culture by implementing best practices of retrospective sessions and process reviews",
      ],
    },
    {
      company: "Qadr Creative",
      title: "Project Manager",
      dateRange: "May 2021 - May 2023",
      logo: qadrLogo,
      bullets: [
        "Co-founded and led digital agency focused on sharia-compliant digital marketing and web/app development, delivering 5+ projects",
        "Controlled full project lifecycles from initial scoping to launch for government agencies, private sector firms, and NGOs",
        "Established strategic partnerships, negotiated contracts, and secured new business opportunities to drive agency growth",
        "Oversaw financial planning, document administration, and resource allocation to optimize project delivery",
      ],
    },
  ],
  education: [
    {
      school: "Universitas Indonesia",
      degree: "Bachelor of Information System",
      dateRange: "Aug 2017 - Feb 2020",
      logo: uiLogo,
      achievements: [
        "Relevant coursework: IT Project Management, IT Service Management, Customer Relation Management, Administration Business",
      ],
    },
    {
      school: "Universitas Padjadjaran",
      degree: "Diploma in Informatics Engineering",
      dateRange: "Aug 2012 - Nov 2015",
      logo: unpadLogo,
      achievements: [
        "Relevant coursework: Programming, Database, Information Security System, Algorithm, Data Structure, Operating System, Statistics",
      ],
    },
    {
      school: "Pelita Bangsa Academy",
      degree: "Blockchain Developer Bootcamp Certification",
      dateRange: "2024",
      logo: pbaLogo,
      achievements: [
        "Solidity, Yul, Foundry, EVM, Ethers.JS",
        "Smart Contract Development, ERC20, ERC721",
        "ETH SEA Hackathon Winner - Real World Asset Track",
      ],
    },
    {
      school: "MySkill",
      degree: "Product & Project Management Certification",
      dateRange: "2023",
      logo: myskillLogo,
      achievements: [
        "Product Strategy & Vision, Agile Project Management (Scrum)",
        "Product Market Fit, Go-to-Market Strategy, Stakeholder Management",
        "Technical Specification Documentation (TSD, FSD, PRD, BRD)",
      ],
    },
    
  ],
  gallery: {
    title: "Gallery",
    images: [
      { src: galleryImg[0], alt: "Hackathon ETH SEA Win" },
      { src: galleryImg[1], alt: "Wool Team" },
      { src: galleryImg[2], alt: "Hackathon ICP Win" },
      { src: alphaStage, alt: "RWA Alpha Stage" },
    ],
  },
};
