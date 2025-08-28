import { motion } from 'framer-motion'

const toRgba = (hex, alpha) => {
  const h = hex.replace('#', '')
  const bigint = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export default function AccentBlob({
  className = '',
  size = 'h-72 w-72',
  colors = ['#ec4899', '#06b6d4', '#8b5cf6', '#f59e0b'], // fuchsia, cyan, violet, amber
  opacity = 0.12,
  floatDistance = 40,
  horizontalDistance,
  duration = 5,
  delay = 0,
}) {
  const palette = colors.map((c) => toRgba(c, opacity))
  const driftX = horizontalDistance ?? floatDistance
  return (
    <motion.div
      className={`pointer-events-none rounded-full blur-3xl ${size} ${className}`}
      initial={{ x: 0, y: 0, scale: 1, backgroundColor: palette[0] }}
      animate={{
        x: [-driftX, driftX, -driftX],
        y: [-floatDistance, floatDistance, -floatDistance],
        scale: [1, 1.06, 1],
        backgroundColor: [...palette, palette[0]],
      }}
      transition={{
        x: { duration, repeat: Infinity, ease: 'easeInOut', delay },
        y: { duration, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.2 },
        scale: { duration: duration * 1.5, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.1 },
        backgroundColor: { duration: duration * 1.6, repeat: Infinity, ease: 'linear', delay },
      }}
    />
  )
}
