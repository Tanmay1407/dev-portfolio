import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import AccentBlob from './AccentBlob'
import CloudAnimation from './CloudAnimation'
import MouseScroll from './MouseScroll'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [error, setError] = useState('')
  const form = useRef()

  // Popup error toast visibility
  const [showErrorToast, setShowErrorToast] = useState(false)
  useEffect(() => {
    if (status === 'error') {
      setShowErrorToast(true)
      const t = setTimeout(() => setShowErrorToast(false), 4000)
      return () => clearTimeout(t)
    }
  }, [status])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setError('')

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
          setStatus('success')
          form.current.reset()
      }, (error) => {
          console.log(error.text);
          setStatus('error')
          setError('Something went wrong. Please try again or email me directly.')
      });
  }

  return (
  <section id="contact" className="relative min-h-screen overflow-hidden py-24 flex items-center justify-center">
      {/* Animated aurora/cloud background (like Hero, but different colors) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <AccentBlob className="absolute -top-32 -left-24" size="h-[30rem] w-[30rem]" colors={['#818cf8','#f472b6','#22d3ee']} opacity={0.15} delay={0} duration={2.1} floatDistance={70} horizontalDistance={90} />
        <AccentBlob className="absolute -top-40 right-[-8rem]" size="h-[32rem] w-[32rem]" colors={['#fbbf24','#818cf8','#f472b6']} opacity={0.13} delay={0.3} duration={2.3} floatDistance={80} horizontalDistance={100} />
        <AccentBlob className="absolute bottom-[-8rem] left-1/3 -translate-x-1/2" size="h-[28rem] w-[28rem]" colors={['#22d3ee','#818cf8','#fbbf24']} opacity={0.12} delay={0.6} duration={2.2} floatDistance={60} horizontalDistance={85} />
        <AccentBlob className="absolute bottom-[-4rem] right-1/4" size="h-[24rem] w-[24rem]" colors={['#f472b6','#22d3ee','#818cf8']} opacity={0.10} delay={0.9} duration={2.4} floatDistance={50} horizontalDistance={75} />
      </div>
      <div className="container-px mx-auto w-full h-full flex flex-col justify-center min-h-full">
        <MouseScroll href="#home" />
        <h2 className="section-title bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text text-transparent">Contact</h2>
        {/* 60 / 40 layout */}
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-5 items-stretch">
          {/* Left 60%: details/form */}
          <div className="md:col-span-3 flex">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur h-full w-full">
              {status === 'success' ? (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-200">
                  ✅ Message sent! I’ll reply soon.
                </div>
              ) : (
                <form ref={form} onSubmit={handleSubmit} className="grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm text-white/70">Name</label>
                      <input
                        id="name"
                        name="user_name"
                        type="text"
                        required
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-white/40 outline-none transition focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm text-white/70">Email</label>
                      <input
                        id="email"
                        name="user_email"
                        type="email"
                        required
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-white/40 outline-none transition focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm text-white/70">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="Tell me a bit about your project..."
                    />
                  </div>

                  {/* Error message shown via popup toast instead of inline */}

                  <div className="mt-2">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-slate-900 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === 'sending' ? 'Sending...' : 'Send Email'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right 40%: eye-catching visual panel */}
          <div className="md:col-span-2 relative flex">
            {/* floating glows behind the panel */}
            <motion.span
              aria-hidden
              className="pointer-events-none absolute -top-8 -left-10 h-40 w-40 rounded-full"
              style={{
                background: 'radial-gradient(circle at center, rgba(6,182,212,0.6), rgba(6,182,212,0) 70%)',
                filter: 'blur(18px)'
              }}
              animate={{ x: [0, 10, -6, 0], y: [0, -8, 6, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.span
              aria-hidden
              className="pointer-events-none absolute -bottom-10 -right-8 h-48 w-48 rounded-full"
              style={{
                background: 'radial-gradient(circle at center, rgba(139,92,246,0.55), rgba(139,92,246,0) 70%)',
                filter: 'blur(20px)'
              }}
              animate={{ x: [0, -8, 6, 0], y: [0, 10, -6, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur h-full w-full">
              {/* subtle gradient ring */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-8 rounded-[2rem]"
                style={{
                  background:
                    'conic-gradient(from 0deg, rgba(6,182,212,0.25), rgba(139,92,246,0.25), rgba(245,158,11,0.25), rgba(6,182,212,0.25))',
                  filter: 'blur(22px)'
                }}
              />
              <div className="relative">
                <h3 className="text-xl font-semibold tracking-tight">Let’s connect</h3>
                <p className="mt-1 text-sm text-white/70">Open to freelance and full‑time roles.</p>

                {/* Quick links with splash glow */}
                <div className="mt-5 flex items-center gap-4">
                  <a href="https://github.com/Tanmay1407" aria-label="GitHub" className="relative inline-flex h-12 w-12 items-center justify-center rounded-full">
                    <span aria-hidden className="pointer-events-none absolute -inset-4 rounded-full" style={{ background: 'radial-gradient(circle at center, rgba(6,182,212,1) 0%, rgba(139,92,246,0.95) 40%, rgba(245,158,11,0.85) 75%, rgba(245,158,11,0) 92%)', filter: 'blur(20px)' }} />
                    <svg className="relative z-10 h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5.2 3.4 9.6 8 11.1.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.6-1.5-2-1.5-2-1.2-.8 0-.8 0-.8 1.3.1 2 .9 2 .9 1.2 2 3.1 1.4 3.8 1.1.1-.9.5-1.4.8-1.7-2.6-.3-5.4-1.3-5.4-6 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0C17.1 2 18.1 2.3 18.1 2.3c.6 1.6.2 2.9.1 3.2.8.9 1.2 2 1.2 3.3 0 4.8-2.8 5.6-5.4 5.9.5.4.9 1.1.9 2.3v3.4c0 .3.2.7.8.6 4.6-1.5 8-5.9 8-11.1A11.5 11.5 0 0 0 12 .5z"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/tanmay-patel-14j2002" aria-label="LinkedIn" className="relative inline-flex h-12 w-12 items-center justify-center rounded-full">
                    <span aria-hidden className="pointer-events-none absolute -inset-4 rounded-full" style={{ background: 'radial-gradient(circle at center, rgba(6,182,212,1) 0%, rgba(139,92,246,0.95) 40%, rgba(245,158,11,0.85) 75%, rgba(245,158,11,0) 92%)', filter: 'blur(20px)' }} />
                    <svg className="relative z-10 h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.1c.5-1 1.7-2.2 3.6-2.2 3.9 0 4.7 2.5 4.7 5.6V23h-4v-6.6c0-1.6 0-3.7-2.3-3.7-2.3 0-2.7 1.8-2.7 3.6V23h-4V8.5z"/></svg>
                  </a>
                  <a href="mailto:tanmay.patel0702@gmail.com" aria-label="Email" className="relative inline-flex h-12 w-12 items-center justify-center rounded-full">
                    <span aria-hidden className="pointer-events-none absolute -inset-4 rounded-full" style={{ background: 'radial-gradient(circle at center, rgba(6,182,212,1) 0%, rgba(139,92,246,0.95) 40%, rgba(245,158,11,0.85) 75%, rgba(245,158,11,0) 92%)', filter: 'blur(20px)' }} />
                    <svg className="relative z-10 h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 3.2-8 5-8-5V6l8 5 8-5v1.2z"/></svg>
                  </a>
                </div>

                <div className="mt-6 grid gap-3 text-sm text-white/70">
                  <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400"></span> Available for: Remote & On‑site</div>
                  <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-400"></span> Timezone: GMT+5:30 (IST)</div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-amber-400"></span>
                    Phone:
                    <a href="tel:+91 9691324820" className="text-white hover:underline hover:text-white/90">+91 9691324820</a>
                  </div>
                </div>

                {/*
                <a href="mailto:hello@example.com" className="mt-6 inline-flex rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2 text-sm font-medium text-slate-900 hover:brightness-110">
                  Say Hello
                </a>
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Error toast popup */}
      {showErrorToast && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ type: 'spring', stiffness: 220, damping: 20 }}
          className="fixed top-6 right-6 z-50 w-[22rem] max-w-[90vw] overflow-hidden rounded-xl border border-rose-400/30 bg-rose-500/15 backdrop-blur shadow-lg"
          role="alert"
        >
          <div className="relative p-4">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 rounded-[1.25rem]"
              style={{
                background:
                  'conic-gradient(from 0deg, rgba(244,63,94,0.25), rgba(249,115,22,0.25), rgba(244,63,94,0.25))',
                filter: 'blur(18px)'
              }}
            />
            <div className="relative flex items-start gap-3">
              <div className="mt-0.5 h-6 w-6 flex-shrink-0 rounded-full bg-rose-500/30 ring-1 ring-rose-400/40 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-rose-300" fill="currentColor"><path d="M11 7h2v6h-2zM11 15h2v2h-2z"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-rose-200">Something went wrong</p>
                <p className="mt-1 text-sm text-rose-100/80 break-words">{error || 'Please try again or email me directly.'}</p>
              </div>
              <button
                type="button"
                onClick={() => setShowErrorToast(false)}
                className="ml-2 rounded-md p-1 text-rose-200/80 hover:text-rose-100 hover:bg-rose-400/10"
                aria-label="Close error"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M18.3 5.71L12 12.01l-6.29-6.3-1.42 1.42L10.59 13.4l-6.3 6.29 1.42 1.42L12 14.83l6.29 6.29 1.42-1.42-6.3-6.29 6.3-6.29z"/></svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  )
}
