import { motion } from "framer-motion";

export default function AvatarCircle({
  src = "/avatar.jpg",
  alt = "Avatar",
  size = 160,
  initials = "YN",
}) {
  // Circular avatar with a static purple glow shadow (no animation)
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Static soft shadow aura for consistent visible shadow and bigger spread */}
      <div
        className="absolute z-0 pointer-events-none rounded-full"
        style={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background:
            'radial-gradient(closest-side, rgba(168,85,247,0.95), rgba(168,85,247,0.7) 65%, rgba(168,85,247,0.4) 88%, rgba(168,85,247,0) 99%)',
          filter: 'blur(42px)',
          opacity: 1,
          borderRadius: '50%'
        }}
      />
      {/* Animation removed per request */}
      {/* Avatar image or fallback in square mask, no border, no borderRadius on outer, only on image for slight rounding */}
      <div
        className="relative z-10 flex items-center justify-center rounded-full overflow-hidden"
  style={{ width: size - 60, height: size - 60, background: 'transparent' }}
      >
  {/* ring is rendered in outer container */}
        {src ? (
          <motion.img
            src={src}
            alt={alt}
            className="object-cover w-full h-full rounded-full"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, damping: 16 }}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: 'transparent',
              filter: 'drop-shadow(0 0 40px rgba(168, 85, 247, 0.75))'
            }}
          />
        ) : (
          <motion.div
            className="flex items-center justify-center w-full h-full text-4xl font-bold text-white bg-gradient-to-br from-fuchsia-500 to-cyan-500 rounded-full"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, damping: 16 }}
            style={{ filter: 'drop-shadow(0 0 40px rgba(168, 85, 247, 0.75))' }}
          >
            {initials}
          </motion.div>
        )}
      </div>
    </div>
  );
}
