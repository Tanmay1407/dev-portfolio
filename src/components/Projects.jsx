import { motion } from 'framer-motion'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { useRef, useEffect, useState } from 'react'
import AccentBlob from './AccentBlob'
import CloudAnimation from './CloudAnimation'
import MouseScroll from './MouseScroll'

const items = [
	{
		title: 'Dev Portfolio',
		desc: 'A modern, responsive portfolio website showcasing my projects and skills. Features smooth animations, dark theme, and a contact form. Built with React and TailwindCSS.',
		url: 'https://github.com/Tanmay1407/dev-portfolio',
		imageUrl: '/dev-project-image.png',
		tech: ['React', 'TailwindCSS', 'Framer Motion', 'EmailJS']
	},
	{
		title: 'WebRTC Video Calling',
		desc: 'A real-time video calling application built with WebRTC, featuring a signalling server, and leveraging STUN/TURN servers for NAT traversal.',
		url: 'https://github.com/Tanmay1407/webRTC-video-calling-app',
		imageUrl: 'https://raw.githubusercontent.com/Tanmay1407/webRTC-video-calling-app/main/WebRTC_Framework_Flow.png',
		tech: ['WebRTC', 'Socket.io', 'Express', 'React', 'Node.js', 'TailwindCSS']
	},
	{
		title: 'AI Finance Platform',
		desc: 'An AI-powered financial management platform that helps you track, analyze, and optimize your spending with real-time insights.',
		url: 'https://github.com/Tanmay1407/ai-finance-platform',
		imageUrl: '/ai-project-image.png',
		tech: ['Next.js', 'Supabase', 'Tailwind', 'Prisma', 'Inngest', 'ArcJet', 'Shadcn UI']
	}
]

export default function Projects() {
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
		const card = el.querySelector('.project-card')
		const gap = 20 // approx gap-5
		const amount = card ? card.getBoundingClientRect().width + gap : el.clientWidth * 0.8
		el.scrollBy({ left: dir * amount, behavior: 'smooth' })
		// update state after the scroll settles
		setTimeout(updateArrows, 300)
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

	return (
		<section id="projects" className="relative min-h-screen overflow-hidden py-24 flex items-center justify-center">
			{/* Animated aurora/cloud background (like Hero, but different colors) */}
			<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
				<AccentBlob className="absolute -top-32 -left-24" size="h-[30rem] w-[30rem]" colors={['#fbbf24','#8b5cf6','#22d3ee']} opacity={0.15} delay={0} duration={2.1} floatDistance={70} horizontalDistance={90} />
				<AccentBlob className="absolute -top-40 right-[-8rem]" size="h-[32rem] w-[32rem]" colors={['#f472b6','#fbbf24','#8b5cf6']} opacity={0.13} delay={0.3} duration={2.3} floatDistance={80} horizontalDistance={100} />
				<AccentBlob className="absolute bottom-[-8rem] left-1/3 -translate-x-1/2" size="h-[28rem] w-[28rem]" colors={['#22d3ee','#fbbf24','#f472b6']} opacity={0.12} delay={0.6} duration={2.2} floatDistance={60} horizontalDistance={85} />
				<AccentBlob className="absolute bottom-[-4rem] right-1/4" size="h-[24rem] w-[24rem]" colors={['#8b5cf6','#22d3ee','#fbbf24']} opacity={0.10} delay={0.9} duration={2.4} floatDistance={50} horizontalDistance={75} />
			</div>
			<div className="container-px mx-auto w-full h-full flex flex-col justify-center min-h-full">
			<MouseScroll href="#contact" />
				<h2 className="section-title bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text text-transparent">
					Projects
				</h2>
				<div className="relative mt-8">
					{/* Controls */}
					<button
						aria-label="Previous"
						onClick={() => scrollByCards(-1)}
						disabled={!canPrev}
						aria-disabled={!canPrev}
						className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-slate-900/60 px-3 py-2 text-white/80 backdrop-blur hover:bg-slate-900/80 disabled:cursor-not-allowed disabled:opacity-40"
					>
						‹
					</button>
					<button
						aria-label="Next"
						onClick={() => scrollByCards(1)}
						disabled={!canNext}
						aria-disabled={!canNext}
						className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-slate-900/60 px-3 py-2 text-white/80 backdrop-blur hover:bg-slate-900/80 disabled:cursor-not-allowed disabled:opacity-40"
					>
						›
					</button>

					{/* Horizontal scroll carousel with snap */}
					<div
						ref={trackRef}
						className="hide-scrollbar -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 py-2"
						tabIndex={0}
						onKeyDown={(e) => {
							if (e.key === 'ArrowLeft') scrollByCards(-1)
							if (e.key === 'ArrowRight') scrollByCards(1)
						}}
					>
						{items.map((p, i) => (
							<motion.a
								key={p.title}
								href={p.url}
								target="_blank"
								rel="noopener noreferrer"
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.2 }}
								transition={{ duration: 0.4, delay: i * 0.05 }}
								className="project-card group card snap-center w-full shrink-0 overflow-hidden p-0 ring-1 ring-white/5 transition hover:ring-cyan-400/20 hover:shadow-[0_12px_70px_-18px_rgba(6,182,212,0.35)] sm:w-[calc(50%-0.625rem)] md:w-[calc(33.333%-0.833rem)]"
							>
								<div className="relative aspect-[16/9] overflow-hidden">
									<img
										src={p.imageUrl}
										loading="lazy"
										alt={p.title}
										className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
									/>
									<span className="absolute left-2 top-2 rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-xs text-white/80 backdrop-blur">
										#{i + 1}
									</span>
								</div>
								<div className="p-4">
									<div className="flex items-center justify-between">
										<h3 className="text-2xl font-bold text-white">{p.title}</h3>
										<HiOutlineExternalLink className="text-white/70 transition group-hover:translate-x-0.5 text-xl" />
									</div>
									<p className="mt-4 text-base text-white/70 mb-6">{p.desc}</p>
									<div className="flex flex-wrap gap-2 text-sm text-white/60">
										{p.tech.map((t) => (
											<span
												key={t}
												className="rounded-full border border-white/10 bg-white/5 px-2 py-1"
											>
												{t}
											</span>
										))}
									</div>
								</div>
							</motion.a>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
