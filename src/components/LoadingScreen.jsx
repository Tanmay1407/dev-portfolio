import { useEffect, useState } from 'react';
import AccentBlob from './AccentBlob';

// You can use any circular earth image you like. Here's a free one:
const EARTH_IMG = 'https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg';

export default function LoadingScreen({ show = true, onFinish }) {
  const [visible, setVisible] = useState(show);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (!show) setVisible(false);
    else setVisible(true);
  }, [show]);

  // Animate loading percent and auto-hide
  useEffect(() => {
    if (show) {
      setPercent(0);
      let frame;
      const start = Date.now();
      const duration = 2200;
      function animate() {
        const elapsed = Date.now() - start;
        const p = Math.min(100, Math.round((elapsed / duration) * 100));
        setPercent(p);
        if (p < 100) {
          frame = requestAnimationFrame(animate);
        } else {
          setTimeout(() => {
            setVisible(false);
            if (onFinish) onFinish();
          }, 300);
        }
      }
      frame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(frame);
    }
  }, [show, onFinish]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* Animated aurora/cloud blobs (like Hero) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <AccentBlob className="absolute -top-32 -left-24" size="h-[30rem] w-[30rem]" colors={['#06b6d4','#8b5cf6','#ec4899']} opacity={0.18} delay={0} duration={2.0} floatDistance={80} horizontalDistance={100} />
        <AccentBlob className="absolute -top-40 right-[-10rem]" size="h-[40rem] w-[40rem]" colors={['#f59e0b','#ec4899','#06b6d4']} opacity={0.16} delay={0.3} duration={2.2} floatDistance={90} horizontalDistance={110} />
        <AccentBlob className="absolute bottom-[-10rem] left-1/3 -translate-x-1/2" size="h-[34rem] w-[34rem]" colors={['#22c55e','#06b6d4','#8b5cf6']} opacity={0.14} delay={0.6} duration={2.1} floatDistance={70} horizontalDistance={95} />
        <AccentBlob className="absolute bottom-[-6rem] right-1/4" size="h-[30rem] w-[30rem]" colors={['#a855f7','#22c55e','#06b6d4']} opacity={0.12} delay={0.9} duration={2.3} floatDistance={60} horizontalDistance={85} />
      </div>
      <div className="flex flex-col items-center gap-8">
        {/* Rotating Earth image only, larger, no border */}
        <div className="relative w-44 h-44 flex items-center justify-center">
          <span className="absolute w-44 h-44 rounded-full overflow-hidden earth-spin shadow-xl">
            <img src={EARTH_IMG} alt="Earth" className="w-full h-full object-cover" />
            {/* Animated gradient overlay */}
            <span className="absolute inset-0 w-full h-full rounded-full pointer-events-none earth-gradient-overlay" />
          </span>
        </div>
        {/* Loading percent */}
        <span className="text-3xl font-bold tracking-widest text-cyan-300 drop-shadow-lg">{percent}%</span>
      </div>
      {/* Overlay fade, earth spin, and animated gradient overlay */}
      <style>{`
        .earth-spin {
          animation: earth-spin 2.2s linear infinite;
        }
        @keyframes earth-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .earth-gradient-overlay {
          background: linear-gradient(120deg, rgba(14,165,233,0.18) 0%, rgba(168,85,247,0.18) 40%, rgba(245,158,11,0.13) 70%, rgba(34,197,94,0.15) 100%);
          mix-blend-mode: lighten;
          opacity: 0.7;
          animation: earth-gradient-move 4s ease-in-out infinite;
        }
        @keyframes earth-gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
