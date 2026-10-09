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
          <path
            d="M12 2 L13 11 L22 12 L13 13 L12 22 L11 13 L2 12 L11 11 Z"
            fill="currentColor"
          />
        </svg>
      ))}
    </div>
  );
}