import { motion } from 'framer-motion'
import AccentBlob from './AccentBlob'
import { FaCode, FaServer, FaTools } from 'react-icons/fa'
import MouseScroll from './MouseScroll'

export default function About() {
  const highlights = [
    'Full-stack development with a focus on backend systems',
    'Building and consuming RESTful APIs',
    'Database design and management (SQL & NoSQL)',
    'Agile methodologies and collaborative development'
  ]

  const pillars = [
    {
      icon: <FaServer className="text-cyan-300" />,
      title: 'Backend Systems',
      text: 'Developing scalable applications with Node.js, Express, Java, and Spring Boot.'
    },
    {
      icon: <FaCode className="text-fuchsia-300" />,
      title: 'AI & Data',
      text: 'Exploring Generative AI and managing data with MongoDB and SQL databases.'
    },
    {
      icon: <FaTools className="text-emerald-300" />,
      title: 'Modern Tooling',
      text: 'Utilizing CI/CD, Docker, and other tools to streamline development and deployment.'
    }
  ]

  const metrics = [
    { k: '2+', v: 'Years' },
    { k: '15+', v: 'Projects' },
    { k: '350+', v: 'LeetCode Questions' },
    { k: '8+', v: 'Certifications' }
  ]

  return (
  <section id="about" className="relative min-h-screen overflow-hidden py-24 flex items-center justify-center">
      {/* Animated aurora/cloud background (like Hero, but different colors) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <AccentBlob className="absolute -top-32 -left-24" size="h-[30rem] w-[30rem]" colors={['#f472b6','#f59e0b','#a3e635']} opacity={0.16} delay={0} duration={2.1} floatDistance={70} horizontalDistance={90} />
        <AccentBlob className="absolute -top-40 right-[-8rem]" size="h-[32rem] w-[32rem]" colors={['#fbbf24','#818cf8','#f472b6']} opacity={0.14} delay={0.3} duration={2.3} floatDistance={80} horizontalDistance={100} />
        <AccentBlob className="absolute bottom-[-8rem] left-1/3 -translate-x-1/2" size="h-[28rem] w-[28rem]" colors={['#22d3ee','#f472b6','#fbbf24']} opacity={0.13} delay={0.6} duration={2.2} floatDistance={60} horizontalDistance={85} />
        <AccentBlob className="absolute bottom-[-4rem] right-1/4" size="h-[24rem] w-[24rem]" colors={['#a3e635','#818cf8','#f472b6']} opacity={0.11} delay={0.9} duration={2.4} floatDistance={50} horizontalDistance={75} />
      </div>

  <div className="container-px mx-auto w-full h-full flex flex-col justify-center min-h-full">
  <MouseScroll href="#work" />
        <div className="grid items-start gap-10 md:grid-cols-12">
          {/* Left: narrative */}
          <div className="relative z-10 space-y-6 md:col-span-7">
            <div className="group relative inline-block">
              <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 opacity-75 blur animated-glow-gradient" />
              <span className="relative inline-flex items-center rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-sm font-medium text-white">
                About Me
              </span>
            </div>
            <h2 className="bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
              Crafting Innovative Software Solutions
            </h2>
            <p className="max-w-2xl text-white/80">
              I'm a Software Engineer dedicated to building high-quality, scalable, and efficient applications. My expertise spans across various technologies including JavaScript/Node.js and Java/Spring Boot for robust backend systems, and I have a keen interest in leveraging Generative AI to create intelligent solutions. I enjoy solving complex problems and turning ideas into reality through code.
            </p>
            <ul className="mt-2 grid gap-2 text-white/80 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-baseline gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {metrics.map((m) => (
                <div key={m.v} className="glass rounded-2xl px-4 py-5 text-center">
                  <div className="text-2xl font-extrabold tracking-tight text-white">{m.k}</div>
                  <div className="text-xs uppercase tracking-wide text-white/60">{m.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: pillars */}
          <div className="md:col-span-5">
            <div className="space-y-4">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="card flex items-start gap-4 p-4 transition hover:shadow-[0_10px_50px_-12px_rgba(236,72,153,0.25)]"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{p.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
