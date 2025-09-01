import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import AccentBlob from './AccentBlob'
import CloudAnimation from './CloudAnimation'
import MouseScroll from './MouseScroll'
export default function Skills() {
  const skills = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', experience: '2+ Years', description: 'Building dynamic and responsive user interfaces.' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', experience: '2+ Years', description: 'Enhancing code quality and maintainability.' },
    { name: 'Java', icon: 'https://www.vectorlogo.zone/logos/java/java-icon.svg', experience: '2+ Years', description: 'Building robust backend systems and applications.' },
    { name: 'Spring Boot', icon: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg', experience: '2+ Years', description: 'Developing enterprise-grade applications and microservices.' },
    { name: 'Microservices', icon: './microservice_skill.png', experience: '2+ Years', description: 'Designing and implementing distributed systems with microservices architecture.' },
    { name: 'DSA', icon: 'https://cdn-icons-png.flaticon.com/512/9173/9173561.png', experience: '3+ Years', description: 'Implementing efficient algorithms and data structures.' },
    { name: 'Gen AI', icon: 'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg', experience: '1+ Year', description: 'Building AI-powered applications and integrations.' },
    { name: 'Agentic AI', icon: 'https://cdn-icons-png.flaticon.com/512/4712/4712027.png', experience: '1+ Year', description: 'Developing autonomous AI agents and intelligent automation systems.' },
    { name: 'MCP', icon: 'https://cdn-icons-png.flaticon.com/512/8002/8002121.png', experience: '1+ Year', description: 'Developing Model Context Protocol servers.' },
    { name: 'Ollama', icon: 'https://avatars.githubusercontent.com/u/124478244?s=200&v=4', experience: '1+ Year', description: 'Working with local LLMs and AI models.' },
    { name: 'SQL', icon: 'https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg', experience: '3+ Years', description: 'Designing and optimizing database queries and schemas.' },
    { name: 'CI/CD', icon: 'https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg', experience: '2+ Years', description: 'Implementing automated deployment pipelines.' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', experience: '2+ Years', description: 'Developing scalable server-side applications.' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', experience: '2+ Years', description: 'Creating robust APIs and web servers.' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', experience: '2+ Years', description: 'Managing NoSQL databases for flexible data storage.' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', experience: '2+ Years', description: 'Working with powerful relational databases.' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', experience: '2+ Years', description: 'Containerizing applications for consistent deployment.' },
    { name: 'AWS', icon: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg', experience: '1+ Year', description: 'Leveraging cloud services for scalable solutions.' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', experience: '5+ Years', description: 'Managing code versions and collaborative development.' },
    { name: 'Testing (Jest/JUnit)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', experience: '2+ Years', description: 'Comprehensive testing with Jest for JavaScript and JUnit for Java applications.' },
    { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', experience: '1+ Years', description: 'Rapidly styling applications with utility-first CSS.' }
  ]

  const trackRef = useRef(null)
	const [canPrev, setCanPrev] = useState(false)
	const [canNext, setCanNext] = useState(false)

  const updateArrows = () => {
		const el = trackRef.current
		if (!el) return
		const { scrollLeft, scrollWidth, clientWidth } = el
		setCanPrev(scrollLeft > 0)
		setCanNext(scrollLeft + clientWidth < scrollWidth - 1)
	}

  const scrollByCards = (dir) => {
    const el = trackRef.current
    if (!el) return
    // Scroll by one full column (pair of cards)
    const column = el.querySelector('.skill-column')
    const gap = 24 // gap between columns
    const amount = column ? column.getBoundingClientRect().width + gap : el.clientWidth
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
    setTimeout(updateArrows, 320)
  }

	useEffect(() => {
		updateArrows()
		const el = trackRef.current
		if (!el) return
		const onScroll = () => updateArrows()
		el.addEventListener('scroll', onScroll, { passive: true })
		const onResize = () => updateArrows()
		window.addEventListener('resize', onResize)
		return () => {
			el.removeEventListener('scroll', onScroll)
			window.removeEventListener('resize', onResize)
		}
	}, [])

  // Build columns of two skills each for mobile display
  const mobileColumns = []
  for (let i = 0; i < skills.length; i += 2) mobileColumns.push(skills.slice(i, i + 2))

  return (
  <section id="skills" className="relative min-h-screen overflow-hidden py-24 flex items-center justify-center">
      {/* Animated aurora/cloud background (like Hero, but different colors) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <AccentBlob className="absolute -top-32 -left-24" size="h-[30rem] w-[30rem]" colors={['#a3e635','#f59e0b','#8b5cf6']} opacity={0.15} delay={0} duration={2.1} floatDistance={70} horizontalDistance={90} />
        <AccentBlob className="absolute -top-40 right-[-8rem]" size="h-[32rem] w-[32rem]" colors={['#22d3ee','#a3e635','#f59e0b']} opacity={0.13} delay={0.3} duration={2.3} floatDistance={80} horizontalDistance={100} />
        <AccentBlob className="absolute bottom-[-8rem] left-1/3 -translate-x-1/2" size="h-[28rem] w-[28rem]" colors={['#f472b6','#a3e635','#8b5cf6']} opacity={0.12} delay={0.6} duration={2.2} floatDistance={60} horizontalDistance={85} />
        <AccentBlob className="absolute bottom-[-4rem] right-1/4" size="h-[24rem] w-[24rem]" colors={['#f59e0b','#f472b6','#a3e635']} opacity={0.10} delay={0.9} duration={2.4} floatDistance={50} horizontalDistance={75} />
      </div>
  <div className="container-px mx-auto w-full h-full flex flex-col justify-center min-h-full">
  <MouseScroll href="#projects" />
        <h2 className="section-title bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text text-transparent">Skills</h2>
        <div className="relative mt-8">
          {/* Controls for mobile screens */}
					<button
						aria-label="Previous"
						onClick={() => scrollByCards(-1)}
						disabled={!canPrev}
						aria-disabled={!canPrev}
						className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-slate-900/60 p-2 text-white/80 backdrop-blur hover:bg-slate-900/80 disabled:cursor-not-allowed disabled:opacity-40 block md:hidden"
					>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
					</button>
					<button
						aria-label="Next"
						onClick={() => scrollByCards(1)}
						disabled={!canNext}
						aria-disabled={!canNext}
						className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-slate-900/60 p-2 text-white/80 backdrop-blur hover:bg-slate-900/80 disabled:cursor-not-allowed disabled:opacity-40 block md:hidden"
					>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
					</button>

          {/* Mobile: horizontal snap columns, each column = 2 cards */}
          <div
            ref={trackRef}
            className="hide-scrollbar flex snap-x snap-mandatory overflow-x-auto py-8 gap-6 pl-[11vw] pr-[11vw] md:hidden"
          >
            {mobileColumns.map((col, cIdx) => (
              <div key={cIdx} className="skill-column shrink-0 snap-center flex flex-col gap-6 items-center w-[78vw] max-w-[340px]">
                {col.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="skill-card-wrapper w-full mx-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="skill-card">
                      <div className="skill-card-front">
                        <img src={skill.icon} alt={skill.name} className="h-12 w-12" />
                        <span className="mt-2 text-lg font-semibold">{skill.name}</span>
                      </div>
                      <div className="skill-card-back">
                        <h3 className="text-base font-bold">{skill.name}</h3>
                        <p className="font-medium text-sky-300 text-sm">{skill.experience}</p>
                        <p className="mt-2 text-xs text-slate-300 leading-relaxed">{skill.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>

          {/* Desktop / tablet: original wrap grid */}
          <div className="hidden md:flex md:flex-wrap md:justify-center md:gap-6 md:py-8">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="skill-card-wrapper"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="skill-card">
                  <div className="skill-card-front">
                    <img src={skill.icon} alt={skill.name} className="h-12 w-12" />
                    <span className="mt-2 text-lg font-semibold">{skill.name}</span>
                  </div>
                  <div className="skill-card-back">
                    <h3 className="text-base font-bold">{skill.name}</h3>
                    <p className="font-medium text-sky-300 text-sm">{skill.experience}</p>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
