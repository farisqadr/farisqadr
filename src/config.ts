import thumbnail0 from "./assets/thumbnail0.png";
import thumbnail1 from "./assets/thumbnail1.png";
import thumbnail2 from "./assets/thumbnail2.png";
import thumbnail3 from "./assets/thumbnail3.png";

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

export const siteConfig = {
  name: "Faris Abdurrahman",
  title: ["Product Manager", "Project Manager", "Head of Product & Technology"],
  description: "Portfolio website of Faris Abdurrahman - Product and Project Manager with 5+ years of experience",
  accentColor: "#1d4ed8",
  social: {
    email: "farisabdurrahman@icloud.com",
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
      name: "AI Attendance App",
      description:
        "AI-powered attendance application streamlining student attendance management. Features QR code check-ins, geofencing validation, and AI-driven leave request analysis based on predefined criteria and behavioral patterns.",
      link: "https://manexus.xyz",
      skills: ["Product Management", "AI/ML", "React", "Node.js"],
      thumbnail: thumbnail0,
      role: "Product Manager",
      timeline: "May 2024 - Present",
      techStack: ["React", "Node.js", "TensorFlow", "PostgreSQL"],
      scope: "MVP Development & Launch",
      methodology: "Agile Scrum",
      tools: ["Jira", "Figma", "Confluence", "GitHub"],
      teamSize: 9,
      images: [
        { src: thumbnail0, alt: "AI Attendance App Dashboard" },
        { src: thumbnail1, alt: "QR Code Check-in Feature" },
        { src: thumbnail2, alt: "Analytics Dashboard" },
      ],
    },
    {
      name: "Wool",
      description:
        "End-to-end profiling assessment and talent management platform empowering job seekers and companies. Features include assessment platform, schedule management, resume builder, job portal, and talent pool for efficient candidate-company matchmaking.",
      link: "https://wool.id",
      skills: ["Product Management", "TypeScript", "React", "Node.js"],
      thumbnail: thumbnail1,
      role: "Head of Product & Technology",
      timeline: "May 2023 - Sep 2025",
      techStack: ["TypeScript", "React", "Node.js", "MongoDB", "Redis"],
      scope: "Full Platform Development",
      methodology: "Agile Scrum",
      tools: ["Jira", "Figma", "Notion", "GitHub", "AWS"],
      teamSize: 10,
      images: [
        { src: thumbnail1, alt: "Wool Platform Overview" },
        { src: thumbnail0, alt: "Assessment Interface" },
        { src: thumbnail3, alt: "Talent Pool Dashboard" },
      ],
    },
    {
      name: "Kolektiva (Real World Asset)",
      description:
        "Web3 platform for tokenizing and trading fractional real-world assets such as real estate properties and villas. Enables fractional investment through asset tokenization, making investment accessible to a wider audience.",
      link: "https://manexus.xyz",
      skills: ["Product Management", "Web3","Blockchain", "Solidity"],
      thumbnail: thumbnail2,
      role: "Product Manager",
      timeline: "Aug 2024 - Nov 2024",
      techStack: ["Solidity", "React", "Ethers.js", "IPFS", "Hardhat"],
      scope: "Hackathon MVP",
      methodology: "Design Sprint",
      tools: ["Figma", "Remix IDE", "MetaMask", "GitHub"],
      teamSize: 9,
      images: [
        { src: thumbnail2, alt: "Kolektiva Platform" },
        { src: thumbnail3, alt: "Asset Tokenization" },
        { src: thumbnail0, alt: "Trading Interface" },
      ],
    },
    {
      name: "Tenzro NFT",
      description:
        "AI-driven NFT platform redefining digital asset value and management. Features AI context embedding for enriched metadata, NFT minting, drops, marketplace, and comprehensive asset management tools.",
      link: "https://manexus.xyz",
      skills: ["Product Management", "Web3", "AI", "NFT"],
      thumbnail: thumbnail3,
      role: "Product Manager",
      timeline: "Jan 2024 - Apr 2024",
      techStack: ["Next.js", "Solidity", "OpenAI API", "Pinata", "Wagmi"],
      scope: "Full Platform Launch",
      methodology: "Agile Scrum",
      tools: ["Jira", "Figma", "Hardhat", "Vercel", "GitHub"],
      teamSize: 7,
      images: [
        { src: thumbnail3, alt: "Tenzro NFT Platform" },
        { src: thumbnail2, alt: "NFT Marketplace" },
        { src: thumbnail1, alt: "AI Metadata Generator" },
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
  experience: [
    {
      company: "Manexus Pte. Ltd.",
      title: "Product Manager",
      dateRange: "May 2024 - Present",
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
      achievements: [
        "Relevant coursework: IT Project Management, IT Service Management",
        "Customer Relation Management, Administration Business",
      ],
    },
    {
      school: "Universitas Padjadjaran",
      degree: "Diploma in Informatics Engineering",
      dateRange: "Aug 2012 - Nov 2015",
      achievements: [
        "Relevant coursework: Programming, Database, Information Security System",
        "Algorithm, Data Structure, Operating System, Statistics",
      ],
    },
    {
      school: "Product & Project Management Certification",
      degree: "Professional Certification",
      dateRange: "2023",
      achievements: [
        "Product Strategy & Vision, Agile Project Management (Scrum)",
        "Product Market Fit, Go-to-Market Strategy, Stakeholder Management",
        "Technical Specification Documentation (TSD, FSD, PRD, BRD)",
      ],
    },
    {
      school: "Blockchain Developer Bootcamp",
      degree: "Technical Certification",
      dateRange: "2024",
      achievements: [
        "Solidity, Yul, Foundry, EVM, Ethers.JS",
        "Smart Contract Development, ERC20, ERC721",
        "ETH SEA Hackathon Winner - Real World Asset Track",
      ],
    },
  ],
  gallery: {
    title: "Gallery",
    images: [
      { src: thumbnail0, alt: "AI Attendance App" },
      { src: thumbnail1, alt: "Wool Platform" },
      { src: thumbnail2, alt: "Kolektiva RWA" },
      { src: thumbnail3, alt: "Tenzro NFT" },
      { src: thumbnail0, alt: "AI Attendance App" },
      { src: thumbnail1, alt: "Wool Platform" },
    ],
  },
};
