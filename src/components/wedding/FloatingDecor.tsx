export default function FloatingDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 10 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="absolute text-gold animate-pulse"
          style={{
            width: 14 + (i % 3) * 6,
            height: 14 + (i % 3) * 6,
            top: `${(i * 13 + 5) % 90}%`,
            left: `${(i * 23 + 7) % 95}%`,
            opacity: 0.18,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${4 + (i % 4)}s`,
          }}
        >
          <g fill="currentColor">
            {[0, 45, 90, 135].map((angle) => (
              <ellipse
                key={angle}
                cx="12"
                cy="6.5"
                rx="2.1"
                ry="4.5"
                transform={`rotate(${angle} 12 12)`}
              />
            ))}
            <circle cx="12" cy="12" r="2.2" />
          </g>
        </svg>
      ))}
    </div>
  );
}