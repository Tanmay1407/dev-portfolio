import { motion } from 'framer-motion'
import AccentBlob from './AccentBlob'
import MouseScroll from './MouseScroll'
import { useState, useRef, useEffect } from 'react'
import { FaLinkedin } from 'react-icons/fa'

export default function Work() {
  const [activeTab, setActiveTab] = useState(0)
  const [expandedRoles, setExpandedRoles] = useState({})
  const tabTrackRef = useRef(null)
  const [canPrevTabs, setCanPrevTabs] = useState(false)
  const [canNextTabs, setCanNextTabs] = useState(false)

  // Initialize first role as expanded when company tab changes
  const handleTabChange = (index) => {
    setActiveTab(index)
    // Expand the first role of the selected company
    const firstRoleTitle = jobs[index].roles[0].title
    setExpandedRoles({ [firstRoleTitle]: true })
  }

  // Toggle role expansion
  const toggleRole = (roleTitle) => {
    setExpandedRoles(prev => ({
      ...prev,
      [roleTitle]: !prev[roleTitle]
    }))
  }

  const jobs = [
    {
      company: 'KFin Technologies Limited',
      location: 'Hyderabad, TS',
      period: 'Feb 2024 – Present',
      linkedinUrl: 'https://www.linkedin.com/company/wekfintech/posts/?feedView=all',
      roles: [
        {
          title: 'Senior Software Engineer',
          period: 'Aug 2025 – Present',
          achievements: [
            'Architected and delivered enterprise-scale REST API solutions using Node.js and TypeScript, achieving 70x performance improvement (70s to 1s response times) for critical financial services operations.',
            'Led legacy system modernization initiatives by refactoring complex SQL Server stored procedures into maintainable Node.js microservices, reducing server load by 30% and improving system scalability.',
            'Designed and implemented comprehensive testing frameworks using Jest, establishing quality gates that reduced post-release defects by 55% and enhanced overall system reliability.',
            'Optimized high-volume data processing through advanced MongoDB aggregation pipelines and SQL indexing strategies, delivering 40% improvement in data retrieval performance across multiple services.'
          ]
        },
        {
          title: 'Software Engineer',
          period: 'Feb 2024 – July 2025',
          achievements: [
            'Developed robust backend systems using Java Spring Boot and Apache Camel for financial transaction processing, focusing on modularity and maintainability in high-stakes environments.',
            'Successfully migrated legacy SQL-based transaction systems to modern Java implementations, enabling parallel processing capabilities and achieving 40% increase in overall system efficiency.',
            'Identified and resolved critical performance bottlenecks in backend workflows through systematic analysis and optimization, significantly improving request handling speed and user experience.',
            'Collaborated with cross-functional teams to deliver feature enhancements while maintaining system stability and adhering to financial industry compliance standards.'
          ]
        }
      ]
    },
    {
      company: 'Repsoft Global',
      location: 'Hyderabad, TS',
      period: 'Jan 2023 – Jan 2024',
      linkedinUrl: 'https://www.linkedin.com/company/repsoft-technologies-private-limited/posts/?feedView=all',
      roles: [
        {
          title: 'Android Developer',
          period: 'Jan 2023 – Jan 2024',
          achievements: [
            'Developed and maintained multiple Android applications using Kotlin and Java, implementing MVVM architecture and following Material Design guidelines.',
            'Integrated RESTful APIs and implemented real-time data synchronization using Firebase, improving app responsiveness and user engagement by 45%.',
            'Optimized app performance by implementing efficient caching mechanisms and lazy loading, reducing app size by 30% and improving load times by 50%.',
            'Implemented comprehensive unit and UI testing using JUnit and Espresso, achieving 85% test coverage and reducing crash rates by 70%.',
          ]
        }
      ]
    }
  ]

  // Set initial expanded state for the first role
  useState(() => {
    if (jobs[0]?.roles[0]) {
      setExpandedRoles({ [jobs[0].roles[0].title]: true })
    }
  }, [])

  // Update arrow enable state for tab scroller
  const updateTabArrows = () => {
    const el = tabTrackRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    setCanPrevTabs(scrollLeft > 2)
    setCanNextTabs(scrollLeft + clientWidth < scrollWidth - 2)
  }

  const scrollTabs = (dir) => {
    const el = tabTrackRef.current
    if (!el) return
    const child = el.querySelector('.company-tab')
    const gap = 16 // gap-4
    const amount = child ? (child.getBoundingClientRect().width + gap) * 1.2 : el.clientWidth * 0.6
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
    setTimeout(updateTabArrows, 260)
  }

  useEffect(() => {
    updateTabArrows()
    const el = tabTrackRef.current
    if (!el) return
    const onScroll = () => updateTabArrows()
    el.addEventListener('scroll', onScroll, { passive: true })
    const onResize = () => updateTabArrows()
    window.addEventListener('resize', onResize)
    return () => {
      el.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section id="work" className="relative min-h-screen overflow-hidden py-24 flex items-center justify-center">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <AccentBlob className="absolute -top-32 -left-24" size="h-[30rem] w-[30rem]" colors={['#38bdf8','#f472b6','#fbbf24']} opacity={0.15} delay={0} duration={2.1} floatDistance={70} horizontalDistance={90} />
        <AccentBlob className="absolute -top-40 right-[-8rem]" size="h-[32rem] w-[32rem]" colors={['#fbbf24','#22d3ee','#38bdf8']} opacity={0.13} delay={0.3} duration={2.3} floatDistance={80} horizontalDistance={100} />
        <AccentBlob className="absolute bottom-[-8rem] left-1/3 -translate-x-1/2" size="h-[28rem] w-[28rem]" colors={['#818cf8','#38bdf8','#fbbf24']} opacity={0.12} delay={0.6} duration={2.2} floatDistance={60} horizontalDistance={85} />
        <AccentBlob className="absolute bottom-[-4rem] right-1/4" size="h-[24rem] w-[24rem]" colors={['#f472b6','#818cf8','#38bdf8']} opacity={0.10} delay={0.9} duration={2.4} floatDistance={50} horizontalDistance={75} />
      </div>
      <div className="container-px mx-auto w-full h-full flex flex-col justify-center min-h-full">
        <MouseScroll href="#skills" />
        <h2 className="section-title bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text text-transparent">Work</h2>
        <p className="mt-2 text-white/70">Recent roles and impact across product, platform, and delivery.</p>
        
        <div className="mt-8 flex flex-col md:flex-row gap-8">
          {/* Left: Company Tabs */}
          <div className="relative md:w-60">
            {/* Mobile scroll arrows */}
            <button
              aria-label="Scroll companies left"
              onClick={() => scrollTabs(-1)}
              disabled={!canPrevTabs}
              className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10 h-9 w-9 flex items-center justify-center rounded-full border border-white/15 bg-slate-900/60 backdrop-blur text-white/70 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button
              aria-label="Scroll companies right"
              onClick={() => scrollTabs(1)}
              disabled={!canNextTabs}
              className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10 h-9 w-9 flex items-center justify-center rounded-full border border-white/15 bg-slate-900/60 backdrop-blur text-white/70 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
            </button>
            <div
              ref={tabTrackRef}
              className="md:w-60 flex gap-4 md:flex-col hide-scrollbar overflow-x-auto -mx-4 px-12 md:px-0 md:mx-0 md:overflow-visible snap-x snap-mandatory md:snap-none scroll-smooth"
            >
              {jobs.map((job, index) => (
                <div key={job.company} className="company-tab relative group shrink-0 snap-center md:snap-none min-w-[70%] xs:min-w-[60%] sm:min-w-[50%] md:min-w-0">
                  <button
                    onClick={() => handleTabChange(index)}
                    className={`relative w-full rounded-md px-4 py-3 pr-10 text-left text-sm font-medium transition-all duration-300 whitespace-normal md:whitespace-nowrap
                      ${activeTab === index 
                        ? 'text-white bg-white/10 border border-white/20 shadow-inner md:bg-white/10 md:border-white/20' 
                        : 'text-white/60 hover:text-white hover:bg-white/5 md:hover:bg-white/5'} 
                      ${activeTab === index 
                        ? 'md:bg-white/10 bg-gradient-to-b from-white/15 to-white/5 border-t-2 border-t-cyan-400/60 rounded-t-lg rounded-b-none shadow-lg' 
                        : 'md:bg-transparent bg-white/5 border border-white/10 rounded-lg hover:bg-white/10'}`}
                  >
                    <span className="block">{job.company}</span>
                    {/* Active underline - only for desktop */}
                    <span className={`pointer-events-none absolute left-3 right-3 bottom-1 h-[3px] rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 transition-opacity duration-300 hidden md:block ${activeTab === index ? 'opacity-100' : 'opacity-0'}`}/>
                    {/* Mobile active indicator - top border */}
                    <span className={`pointer-events-none absolute left-0 right-0 top-0 h-[3px] rounded-t-md bg-gradient-to-r from-cyan-400 to-fuchsia-400 transition-opacity duration-300 md:hidden ${activeTab === index ? 'opacity-100' : 'opacity-0'}`}/>
                  </button>
                  <a
                    href={job.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-1/2 -translate-y-1/2 right-2 p-1 text-white/40 hover:text-white/90 transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl bg-[#0c0c0c]/50 border border-white/[0.08] shadow-lg backdrop-blur-sm relative"
            >
              {/* Subtle gradient glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 blur-xl" />
              
              {/* Content */}
              <div className="relative p-6">
                <div className="relative">
                  {jobs[activeTab].roles.map((role, index) => (
                    <div key={role.title} className="relative">
                      {/* Timeline connector */}
                      {index < jobs[activeTab].roles.length - 1 && (
                        <div className="absolute left-1 top-14 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-fuchsia-400/20" />
                      )}
                      
                      <div className={`relative ${index > 0 ? 'mt-12' : ''}`}>
                        {/* Timeline dot */}
                        <div className="absolute -left-2 top-3 h-4 w-4 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 ring-4 ring-black/50" />
                        
                        {/* Content */}
                        <div className="pl-8">
                          <button 
                            onClick={() => toggleRole(role.title)}
                            className="w-full text-left group"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-xl font-bold text-white">
                                {role.title} · <span className="bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text text-transparent">{jobs[activeTab].company}</span>
                              </h3>
                              <span className={`text-white/60 transform transition-transform duration-300 ${expandedRoles[role.title] ? 'rotate-180' : ''}`}>
                                ▼
                              </span>
                            </div>
                            <p className="text-sm text-white/60 tracking-wider uppercase mt-1">{role.period}</p>
                          </button>
                          
                          {/* Expandable achievements */}
                          <motion.div
                            initial={false}
                            animate={{ 
                              height: expandedRoles[role.title] ? "auto" : 0,
                              opacity: expandedRoles[role.title] ? 1 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <ul className="space-y-4 mt-6">
                              {role.achievements.map(achievement => (
                                <li key={achievement} className="flex items-start gap-3 text-white/80 group">
                                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400 transition-transform duration-300 group-hover:scale-125" />
                                  <span className="text-base">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
