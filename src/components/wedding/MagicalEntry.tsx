import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  type: "petal" | "sparkle" | "flower";
}

export default function MagicalEntry({ active }: { active: boolean }) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active || !wrapRef.current) return;
    const items = wrapRef.current.querySelectorAll<HTMLElement>("[data-particle]");
    items.forEach((el) => {
      const dur = parseFloat(el.dataset.duration || "6");
      const delay = parseFloat(el.dataset.delay || "0");
      const drift = (Math.random() - 0.5) * 200;
      gsap.fromTo(
        el,
        { y: -80, x: 0, opacity: 0, rotation: 0 },
        {
          y: window.innerHeight + 100,
          x: drift,
          opacity: 1,
          rotation: 360 + Math.random() * 360,
          duration: dur,
          delay,
          ease: "sine.inOut",
          repeat: -1,
          repeatDelay: Math.random() * 2,
        }
      );
    });
    // auto fade overlay after a moment so it doesn't dominate
    gsap.to(wrapRef.current, { opacity: 0.7, duration: 4, delay: 4 });
  }, [active]);

  if (!active) return null;

  const particles: Particle[] = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 6,
    size: 8 + Math.random() * 18,
    rotation: Math.random() * 360,
    type: i % 5 === 0 ? "sparkle" : i % 3 === 0 ? "flower" : "petal",
  }));

  return (
    <div
      ref={wrapRef}
      className="pointer-events-none fixed inset-0 z-[60] overflow-hidden"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          data-particle
          data-delay={p.delay}
          data-duration={p.duration}
          className="absolute"
          style={{
            left: `${p.left}%`,
            top: 0,
            width: p.size,
            height: p.size,
          }}
        >
          {p.type === "petal" && (
            <svg viewBox="0 0 24 24" className="h-full w-full">
              <path
                d="M12 2 C16 6 18 10 14 18 C12 22 12 22 10 18 C6 10 8 6 12 2 Z"
                fill="#c81e3a"
                opacity="0.85"
              />
              <path
                d="M12 4 C14 8 15 12 12 16"
                stroke="#7A0019"
                strokeWidth="0.5"
                fill="none"
              />
            </svg>
          )}
          {p.type === "flower" && (
            <svg viewBox="0 0 24 24" className="h-full w-full">
              {[0, 72, 144, 216, 288].map((r) => (
                <ellipse
                  key={r}
                  cx="12"
                  cy="7"
                  rx="3"
                  ry="5"
                  fill="#e63950"
                  opacity="0.8"
                  transform={`rotate(${r} 12 12)`}
                />
              ))}
              <circle cx="12" cy="12" r="1.5" fill="#D4AF37" />
            </svg>
          )}
          {p.type === "sparkle" && (
            <svg viewBox="0 0 24 24" className="h-full w-full">
              <path
                d="M12 0 L13 11 L24 12 L13 13 L12 24 L11 13 L0 12 L11 11 Z"
                fill="#D4AF37"
                opacity="0.9"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}