// File: src/Portfolio.jsx import React, { useState } from "react"; import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { Moon, Sun } from "lucide-react"; import { motion } from "framer-motion";

export default function Portfolio() { const [darkMode, setDarkMode] = useState(false);

return ( <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}> <div className="p-6"> {/* Navigation Bar */} <nav className="flex justify-between items-center mb-10"> <h1 className="text-2xl font-bold">Arunjyoti</h1> <div className="flex gap-4 items-center"> <a href="#about" className="hover:underline">About</a> <a href="#experience" className="hover:underline">Experience</a> <a href="#projects" className="hover:underline">Projects</a> <a href="#education" className="hover:underline">Education</a> <a href="#contact" className="hover:underline">Contact</a> <Button variant="ghost" onClick={() => setDarkMode(!darkMode)}> {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />} </Button> </div> </nav>

{/* Hero Section */}
    <motion.section className="text-center mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <img
        src="/Arun.jpg"
        alt="Arunjyoti Changkakoty"
        className="mx-auto rounded-full w-32 h-32 object-cover"
      />
      <h1 className="text-3xl font-bold mt-4">Arunjyoti Changkakoty</h1>
      <p className="text-gray-600 dark:text-gray-300">
        AI Engineer Intern @ Eskillveda | GenAI • Prompt Design | B.Tech CSE | Future Tech Strategist
      </p>
      <div className="mt-4">
        <a
          href="/resume.pdf"
          download
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl"
        >
          Download Resume
        </a>
      </div>
    </motion.section>

    {/* About Me */}
    <section id="about" className="mb-10">
      <h2 className="text-2xl font-semibold mb-2">About Me</h2>
      <p>
        AI Engineer Intern at Eskillveda, leveraging advanced tools like OpenAI and LangChain to develop impactful
        solutions for the future of learning. My focus lies in prompt optimization, seamless AI integration, and
        collaborative innovation—driving efficiency and intelligence across the edtech space.
      </p>
      <p className="mt-2">
        Currently pursuing a B.Tech in Computer Science and Engineering at Assam Science and Technology University,
        with foundational experience in web development and GitHub workflow management through prior internships.
      </p>
      <p className="mt-2">
        I aspire to build intelligent, ethical systems that shape industries—combining deep curiosity in generative AI
        with a strategic, solution-oriented mindset. My goal is to grow at the intersection of AI, product thinking,
        and human-centric design.
      </p>
    </section>

    {/* Experience */}
    <section id="experience" className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <Card className="mb-4">
        <CardContent>
          <h3 className="font-bold">AI Engineer Intern @ Eskillveda Edtech Private Limited</h3>
          <p>Guwahati, Assam (Remote) | June 1 - August 31</p>
          <ul className="list-disc pl-5">
            <li>Developed AI-powered solutions, prompt optimization, AI model integration</li>
            <li>Skills: OpenAI, ChatGPT, LangChain, Prompt Engineering</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardContent>
          <h3 className="font-bold">Web Development Intern @ Prodigy Infotech</h3>
          <p>Mumbai, India (Remote) | June 1 - June 31</p>
          <ul className="list-disc pl-5">
            <li>Worked on web projects like Stopwatch, Weather App, Suzoku, Portfolio Website</li>
            <li>Skills: HTML, CSS, JavaScript, Git & GitHub, API Integration</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h3 className="font-bold">Cyber Security Awareness Camp</h3>
          <p>Sivasagar, Assam | July 1 - July 31</p>
          <ul className="list-disc pl-5">
            <li>Conducted surveys and community awareness sessions on cyber threats</li>
            <li>Skills: Leadership, Communication, Cybersecurity</li>
          </ul>
        </CardContent>
      </Card>
    </section>

    {/* Projects */}
    <section id="projects" className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>

      <Card className="mb-4">
        <CardContent>
          <h3 className="font-bold">CodeVerse</h3>
          <p>
            A unified platform combining multiple competitive coding profiles into one. Contributed UI/UX and built the
            leaderboard page with filters and search.
          </p>
          <p className="mt-2 text-sm">Tech: React.js, Tailwind CSS, Node.js, Express.js, MongoDB, JWT, Axios</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h3 className="font-bold">Library Management System</h3>
          <p>Worked on UI/UX design for a library platform using Figma.</p>
          <p className="mt-2 text-sm">Tech: HTML, CSS, JavaScript, Git & GitHub</p>
        </CardContent>
      </Card>
    </section>

    {/* Education */}
    <section id="education" className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      <ul className="list-disc pl-5">
        <li>
          B.Tech in Computer Science and Engineering — Dhemaji Engineering College (2022-2026)
        </li>
        <li>12th Science — Sivasagar Senior Secondary School (2019-2021) — 88.4%</li>
        <li>10th — Shankardev Shishu Vidya Niketan (2014-2019) — 88%</li>
      </ul>
    </section>

    {/* Certifications */}
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
      <ul className="list-disc pl-5">
        <li>
          Microsoft & LinkedIn Professional Certificate in Generative AI — Skills: AI Prompting, AI for Business,
          Microsoft Copilot, Media Ethics, Data Analysis, MS Excel & PowerPoint
        </li>
        <li>Web Development Internship Certificate by Prodigy Infotech</li>
      </ul>
    </section>

    {/* Contact Section */}
    <section id="contact" className="text-center">
      <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
      <p>
        LinkedIn: <a href="https://www.linkedin.com/in/arun-jyoti-changkakoti" className="text-blue-600 underline">arun-jyoti-changkakoti</a>
      </p>
    </section>
  </div>
</div>

); }

  
