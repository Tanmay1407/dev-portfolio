import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import AccentBlob from './AccentBlob'
import SkillsMarquee from './SkillsMarquee'
import AvatarCircle from './AvatarCircle'
import MouseScroll from './MouseScroll'

export default function Hero() {
  const name = 'Tanmay Patel'
  const initials = name.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase()
  const [imgOk, setImgOk] = useState(true)
  const avatarSrc = '/hero_profile.jpg'
  return (
  <section id="home" className="relative min-h-screen overflow-hidden pt-28 flex items-center justify-center">
      {/* Animated aurora/cloud background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <AccentBlob className="absolute -top-40 -left-28" size="h-[36rem] w-[36rem]" colors={['#06b6d4','#8b5cf6','#ec4899']} opacity={0.18} delay={0} duration={2.0} floatDistance={80} horizontalDistance={100} />
        <AccentBlob className="absolute -top-48 right-[-10rem]" size="h-[40rem] w-[40rem]" colors={['#f59e0b','#ec4899','#06b6d4']} opacity={0.16} delay={0.3} duration={2.2} floatDistance={90} horizontalDistance={110} />
        <AccentBlob className="absolute bottom-[-10rem] left-1/3 -translate-x-1/2" size="h-[34rem] w-[34rem]" colors={['#22c55e','#06b6d4','#8b5cf6']} opacity={0.14} delay={0.6} duration={2.1} floatDistance={70} horizontalDistance={95} />
        <AccentBlob className="absolute bottom-[-6rem] right-1/4" size="h-[30rem] w-[30rem]" colors={['#a855f7','#22c55e','#06b6d4']} opacity={0.12} delay={0.9} duration={2.3} floatDistance={60} horizontalDistance={85} />
      </div>
      <div className="container-px mx-auto w-full h-full flex flex-col justify-center min-h-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full h-full gap-8 md:gap-16">
          {/* Left: Text Content (80% on desktop) */}
          <div className="w-full md:w-[60%] flex flex-col items-start text-left justify-center space-y-6 overflow-hidden">
            <p className="section-subtitle font-mono text-lg sm:text-xl md:text-2xl xl:text-3xl">Hello, I am</p>
            <h1 className="bg-gradient-to-r from-white via-fuchsia-200 to-cyan-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent drop-shadow sm:text-5xl md:text-6xl xl:text-7xl">
              {name}
            </h1>
            <p className="max-w-2xl text-white/70">
              Full‑stack developer specializing in building exceptional digital experiences. Currently focused on modern web apps with React, Node, and cloud.
            </p>
            {/* Skill marquee under the hero intro */}
            <SkillsMarquee />
            <div className="flex flex-wrap justify-start gap-3">
              <a href="#projects" className="btn ring-1 ring-white/10">
                View Projects
              </a>
                <a href="https://drive.google.com/file/d/17rdGlZI6XvxZgMSA8w0YbDb8h7BGQEN-/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-slate-900 shadow-lg shadow-fuchsia-500/10 hover:brightness-110">
                  <FaDownload className="mr-2" /> Download Resume
                </a>
            </div>
            <div className="flex items-center justify-start gap-4 pt-4 pb-8 text-xl md:pb-0">
              <a href="https://github.com/Tanmay1407" aria-label="GitHub" className="hover:text-white/80"><FaGithub /></a>
              <a href="https://leetcode.com/u/tanmaypatel1407" aria-label="LeetCode" className="hover:text-white/80"><SiLeetcode /></a>
              <a href="https://www.linkedin.com/in/tanmay-patel-14j2002/" aria-label="LinkedIn" className="hover:text-white/80"><FaLinkedin /></a>
              <a href="mailto:tanmay.patel0702@gmail.com" aria-label="Email" className="hover:text-white/80"><FaEnvelope /></a>
            </div>
          </div>
          {/* Right: Avatar (15% on desktop, no shrink) */}
          <div className="w-full md:w-[40%] flex-shrink-0 min-w-0 flex justify-center items-center mb-4 md:mb-0">
            {/* Always glass design, smaller on mobile, less margin below on mobile */}
            <span className="block md:hidden">
              <AvatarCircle src={avatarSrc} initials={initials} size={120} design="glass" />
            </span>
            <span className="hidden md:block">
              <AvatarCircle src={avatarSrc} initials={initials} size={420} design="glass" />
            </span>
          </div>
        </div>
      </div>
  <MouseScroll href="#about" />
    </section>
  )
}
