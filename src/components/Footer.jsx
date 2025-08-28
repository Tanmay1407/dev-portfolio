export default function Footer() {
  return (
    <footer className="py-10">
      <div className="container-px mx-auto flex flex-col items-center justify-between gap-4 text-sm text-white/60 md:flex-row">
        <p>© {new Date().getFullYear()} Tanmay Patel. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#home" className="hover:text-white/80">Top</a>
          <a href="#projects" className="hover:text-white/80">Projects</a>
          <a href="#contact" className="hover:text-white/80">Contact</a>
        </div>
      </div>
    </footer>
  )
}
